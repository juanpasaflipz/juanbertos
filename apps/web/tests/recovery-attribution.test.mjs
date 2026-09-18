import assert from 'node:assert/strict';
import { test } from 'node:test';
import { recoveryReference, referencedWhatsAppUrl, referenceStorage } from '../src/lib/recovery-attribution.ts';

const query = (group = 'burritos_cerca') => `utm_source=google&utm_medium=cpc&utm_campaign=jb_recovery_sep2026&utm_content=${group}`;
const storage = () => {
  const data = new Map();
  return { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value), removeItem: key => data.delete(key) };
};
const id = () => '12345678-abcd-4000-abcd-123456789012';

test('blocked storage getter or methods preserve one shared reference and clear safely', () => {
  for (const getStorage of [
    () => { throw Error('blocked getter'); },
    () => ({ getItem() { throw Error('blocked read'); }, setItem() { throw Error('quota'); }, removeItem() { throw Error('blocked remove'); } }),
  ]) {
    const store = referenceStorage(getStorage);
    let sequence = 0;
    const nextId = () => `${++sequence}2345678-abcd-4000-abcd-123456789012`;
    const first = recoveryReference(query(), store, 1, nextId);
    assert.deepEqual(recoveryReference(query(), store, 2, nextId), first);
    assert.deepEqual(recoveryReference('', store, 3, nextId), first);
    assert.equal(sequence, 1);
    assert.equal(recoveryReference('utm_source=rappi', store, 4, nextId), null);
    assert.equal(recoveryReference('', store, 5, nextId), null);
  }
});

test('only the recovery campaign receives a reference; same session retains it', () => {
  const store = storage();
  assert.equal(recoveryReference('', store, 1, id), null);
  assert.equal(recoveryReference(query('unknown'), store, 1, id), null);
  const result = recoveryReference(query(), store, 1, id);
  assert.equal(result.reference, 'JB-CER-12345678ABCD');
  assert.deepEqual(recoveryReference('', store, 1000, id), result);
  assert.deepEqual(recoveryReference(query(), store, 1000, id), result);
  assert.equal(recoveryReference(query('brand'), store, 1000, id).group, 'brand');
});

test('references expire and another campaign clears attribution', () => {
  const store = storage();
  recoveryReference(query(), store, 1, id);
  assert.equal(recoveryReference('', store, 86400001, id), null);
  recoveryReference(query(), store, 86400002, id);
  assert.equal(recoveryReference('utm_source=rappi', store, 86400003, id), null);
  assert.equal(recoveryReference('', store, 86400004, id), null);
});

test('invalid or blocked storage never breaks ordering', () => {
  const corrupt = { getItem: () => '{bad', setItem() {}, removeItem() {} };
  assert.equal(recoveryReference('', corrupt, 1, id), null);
  const blocked = { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); }, removeItem() { throw Error('blocked'); } };
  assert.equal(recoveryReference(query(), blocked, 1, id).group, 'burritos_cerca');
});

test('WhatsApp keeps the confirmed number and original draft; other destinations are untouched', () => {
  const href = 'https://wa.me/525613096835?text=Hola%20Juanberto';
  const result = new URL(referencedWhatsAppUrl(href, 'JB-CAL-12345678ABCD'));
  assert.equal(result.pathname, '/525613096835');
  assert.equal(result.searchParams.get('text'), 'Hola Juanberto\nReferencia de pedido: JB-CAL-12345678ABCD');
  for (const other of ['https://www.didi-food.com/es-MX/', '/es/locations', 'https://wa.me/525613096438']) {
    assert.equal(referencedWhatsAppUrl(other, 'JB-CAL-12345678ABCD'), other);
  }
  assert.equal(referencedWhatsAppUrl(href, undefined), href);
});
