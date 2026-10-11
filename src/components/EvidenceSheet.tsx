import { evidence, type Evidence } from "../data/facts";

export function EvidenceNumber({
  id,
  children,
  onOpen,
}: {
  id: string;
  children: React.ReactNode;
  onOpen: (e: Evidence) => void;
}) {
  const item = evidence[id];
  return (
    <button type="button" className="evidence" onClick={() => item && onOpen(item)}>
      {children}
    </button>
  );
}

export function EvidenceSheet({
  item,
  onClose,
}: {
  item: Evidence;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/55 p-4">
      <button className="absolute inset-0 cursor-default" aria-label="Dismiss overlay" onClick={onClose} />
      <div className="sheet-enter relative max-h-[min(88dvh,640px)] w-full max-w-[390px] overflow-y-auto rounded-3xl bg-card p-5 ring-1 ring-line">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-verify">Evidence</p>
        <p className="mt-2 font-serif text-[28px] leading-none">{item.number}</p>
        <p className="mt-1 text-sm text-mute">{item.label}</p>
        <dl className="mt-5 space-y-3 text-[13px] leading-relaxed">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-mute">Definition</dt>
            <dd className="mt-0.5">{item.definition}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-mute">Sample</dt>
            <dd className="mt-0.5">{item.sample}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-mute">Source</dt>
            <dd className="mt-0.5">{item.source}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-mute">Freshness</dt>
            <dd className="mt-0.5">{item.freshness}</dd>
          </div>
          {item.notes ? <p className="text-mute">{item.notes}</p> : null}
        </dl>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-full bg-ink py-2.5 text-sm font-medium text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}
