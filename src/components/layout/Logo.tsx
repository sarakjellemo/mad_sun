import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Mad Sun Marketing — startsida"
      className="group focus-visible:outline-none"
    >
      <Image
        src="/images/logo.png"
        alt="Mad Sun Marketing"
        width={160}
        height={48}
        className="h-48 w-auto object-contain transition-opacity duration-300 group-hover:opacity-70"
        priority
      />
    </Link>
  );
}
