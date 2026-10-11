import { sources } from "../data/facts";

export function SourcesScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex min-h-full flex-col px-4 pb-24 pt-4">
      <button type="button" onClick={onBack} className="text-[13px] font-medium">
        ← Match
      </button>
      <h1 className="mt-4 font-serif text-[32px] leading-tight">Four folders. One report.</h1>
      <p className="mt-2 text-[14px] leading-relaxed text-mute">
        Pre-kickoff cut. The final file is held out. GURU reads England and Spain's five Euro
        2025 matches plus two historic meetings, then weights them with the other three
        warehouses.
      </p>
      <div className="mt-5 space-y-3">
        {sources.map((s) => (
          <article key={s.id} className="rounded-[24px] bg-card p-4 ring-1 ring-line">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">{s.name}</p>
            <p className="mt-1 font-medium">{s.usedFor}</p>
            <p className="mt-2 text-[13px] leading-relaxed">{s.thisMatch}</p>
            <p className="mt-2 text-[12px] text-mute">
              {s.folder} · {s.coverage}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-[12px] leading-relaxed text-mute">
        Licenses are research/open-data. Review each provider before any commercial launch.
        Prediction-market prices are a Pulse signal only — no links, no stake, no betting words.
      </p>
    </div>
  );
}
