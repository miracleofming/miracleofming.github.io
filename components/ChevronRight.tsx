// Lucide "chevron-right" (https://lucide.dev/icons/chevron-right)
export function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
