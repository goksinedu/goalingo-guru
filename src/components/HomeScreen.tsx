import { community, match } from "../data/facts";
import { Wordmark } from "./Logo";

export function HomeScreen({ onOpenMatch }: { onOpenMatch: () => void }) {
  return (
    <div className="flex min-h-full flex-col px-4 pb-24 pt-4">
      <header className="flex items-center justify-between">
        <Wordmark />
        <span className="rounded-full bg-blue/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue">
          GURU
        </span>
      </header>

      <p className="mt-6 font-serif text-[32px] leading-[1.05]">
        Tonight:{" "}
        <span className="italic">1 match</span> worth understanding.
      </p>
      <p className="mt-2 text-[13px] text-mute">
        One final, still unplayed in this report. Everything else can wait.
      </p>

      <button
        type="button"
        onClick={onOpenMatch}
        className="mt-5 w-full rounded-[28px] bg-ink p-5 text-left text-white"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
          {match.competition} · {match.stage}
        </p>
        <p className="mt-3 font-serif text-[26px] leading-tight">{match.whyItMatters}</p>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-[13px] text-white/70">England vs Spain · Basel 16:00</p>
            <p className="text-[13px] text-white/70">Pre-kickoff GURU stack</p>
          </div>
          <span className="text-[12px] font-medium text-white/80">Open GURU →</span>
        </div>
      </button>

      <section className="mt-4 rounded-[28px] bg-card p-4 ring-1 ring-line">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">Community</p>
        <p className="mt-2 text-[15px] leading-snug">
          <span className="font-semibold">@{community.user}</span>{" "}
          <span className="text-verify">· {community.badge}</span>
        </p>
        <p className="mt-1 text-[14px] leading-relaxed text-ink/90">“{community.take}”</p>
        <p className="mt-2 text-[12px] text-mute">Challenges {community.challenges}</p>
      </section>

      <p className="mt-6 text-center text-[12px] text-mute">
        goalingo.ai — football, understood.
      </p>
    </div>
  );
}
