export function Icon({ src, big }: { src: string; big?: boolean }) {
  return (
    <span
      className={`inline-block bg-current mask-(--icon) mask-contain ${big ? "w-25 h-25" : "w-5 h-5"}`}
      style={{ "--icon": `url('${src}')` } as React.CSSProperties}
    />
  );
}
