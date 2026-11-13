// Lucide "chevron-right" / "chevron-left" (https://lucide.dev/icons/chevron-right)
function Chevron({ d, className = "" }: { d: string; className?: string }) {
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
      <path d={d} />
    </svg>
  );
}

export const ChevronRight = ({ className }: { className?: string }) => <Chevron d="m9 18 6-6-6-6" className={className} />;
export const ChevronLeft = ({ className }: { className?: string }) => <Chevron d="m15 18-6-6 6-6" className={className} />;
