export function ChevronRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`h-1.5 w-full chevron-band ${className}`}
    />
  );
}
