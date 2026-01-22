import Image from "next/image";

export function Logo({
  width = 200,
  height = 80,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <div className="relative">
      <Image
        alt="Sailia Logo"
        className="dark:hidden"
        height={height}
        priority
        src="/logos/logo-2/logo-b.png"
        width={width}
      />
      <Image
        alt="Sailia Logo"
        className="hidden dark:block"
        height={height}
        priority
        src="/logos/logo-2/logo-w.png"
        width={width}
      />
    </div>
  );
}
