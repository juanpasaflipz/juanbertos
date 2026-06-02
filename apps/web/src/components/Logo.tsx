import Image from "next/image";

type Props = {
  size?: number;
  priority?: boolean;
  className?: string;
};

export function Logo({ size = 96, priority = false, className }: Props) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Juanberto's California Burritos"
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
