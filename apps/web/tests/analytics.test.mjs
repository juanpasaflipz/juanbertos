import assert from 'node:assert/strict';
import { test } from 'node:test';
import { trackConversion } from '../src/lib/analytics.ts';

test('engagements emit no purchase, assumed revenue or second Ads route', () => {
  const google = [];
  const meta = [];
  globalThis.window = { gtag: (...args) => google.push(args), fbq: (...args) => meta.push(args) };
  const events = ['order_whatsapp', 'order_rappi', 'order_didi', 'order_ubereats', 'directions', 'phone_call'];
  for (const event of events) trackConversion(event);
  assert.equal(google.length, 6);
  assert.equal(meta.length, 6);
  assert.deepEqual(google.map(call => call[1]), events);
  for (const call of [...google, ...meta]) {
    assert.notEqual(call[1].toLowerCase(), 'purchase');
    for (const field of ['value', 'currency', 'send_to', 'transaction_id']) {
      assert.equal(Object.hasOwn(call[2], field), false, `${call[1]} must not have ${field}`);
    }
  }
  delete globalThis.window;
});

test('server rendering and unavailable analytics are safe', () => {
  delete globalThis.window;
  assert.doesNotThrow(() => trackConversion('order_didi'));
  globalThis.window = {};
  assert.doesNotThrow(() => trackConversion('order_whatsapp'));
  delete globalThis.window;
});
