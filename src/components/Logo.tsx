export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        fill="#2563EB"
        d="M16.2 3.2c-7.1 0-12.6 5.2-12.6 12.6 0 7.6 5.6 13 13.2 13 5.2 0 9.4-2.4 11.4-6.6l-4.2-2.1c-1.2 2.3-3.6 3.7-7.1 3.7-4.6 0-7.8-3.3-7.8-8 0-4.5 3.2-7.6 7.6-7.6 3.2 0 5.5 1.4 6.6 3.6l4.3-2.3C25.4 5.4 21.4 3.2 16.2 3.2Zm5.4 10.6h-8.1v3.6h4.4c-.2 1.4-1.4 2.3-3.1 2.3-2.2 0-3.6-1.6-3.6-4 0-2.3 1.4-3.9 3.6-3.9 1.4 0 2.4.6 3 1.6l3.8-2c-1.3-2.2-3.7-3.6-6.9-3.6-4.6 0-8 3.4-8 7.9 0 4.6 3.4 8.1 8.2 8.1 4.8 0 8-3.2 8-8.1 0-.3 0-.6-.03-.9Z"
      />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Mark className="h-6 w-6" />
      <span className={`text-[17px] font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        goalingo
      </span>
    </span>
  );
}
