import { useMemo, useState } from "react";
import { evidence, pulse, type Side } from "../data/facts";
import type { Evidence } from "../data/facts";

const SIDES: Side[] = ["England", "Spain", "Draw"];

function norm(parts: Record<Side, number>): Record<Side, number> {
  const t = parts.England + parts.Spain + parts.Draw;
  return {
    England: Math.round((parts.England / t) * 100),
    Spain: Math.round((parts.Spain / t) * 100),
    Draw: 0,
  } as Record<Side, number> & { Draw: number };
}

function finish(raw: Record<Side, number>): Record<Side, number> {
  const a = norm(raw);
  a.Draw = 100 - a.England - a.Spain;
  return a;
}

function mix(market: Record<Side, number>, fans: Record<Side, number>, alpha: number) {
  return finish({
    England: (1 - alpha) * market.England + alpha * fans.England,
    Spain: (1 - alpha) * market.Spain + alpha * fans.Spain,
    Draw: (1 - alpha) * market.Draw + alpha * fans.Draw,
  });
}

const color: Record<Side, string> = {
  England: "#c8102e",
  Spain: "#f1bf00",
  Draw: "#9a958b",
};

export function PulseBlock({
  onEvidence,
}: {
  onEvidence: (e: Evidence) => void;
}) {
  const [vote, setVote] = useState<Side | null>(null);
  const [open, setOpen] = useState(false);
  const seedN = 24;
  const n = seedN + (vote ? 1 : 0);
  const fans = {
    England: pulse.fansSeed.England + (vote === "England" ? 4 : 0),
    Spain: pulse.fansSeed.Spain + (vote === "Spain" ? 4 : 0),
    Draw: pulse.fansSeed.Draw + (vote === "Draw" ? 4 : 0),
  };
  const alpha = Math.min(0.55, 0.12 + n / 280);
  const blended = useMemo(() => mix(pulse.market, fans, alpha), [fans.England, fans.Spain, fans.Draw, alpha]);

  return (
    <section className="rounded-3xl bg-card p-4 ring-1 ring-line">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">Goalingo Pulse</p>
          <p className="mt-1 text-[12px] leading-snug text-mute">{pulse.explanation}</p>
        </div>
        <button
          type="button"
          className="evidence shrink-0 text-[11px] font-medium"
          onClick={() => onEvidence(evidence.pulse)}
        >
          Why these numbers
        </button>
      </div>

      <div className="mt-4">
        <LeanBar value={blended} />
        <div className="mt-2 flex justify-between text-[12px]">
          <span>
            <b style={{ color: color.England }}>ENG {blended.England}</b>
          </span>
          <span className="text-mute">Draw {blended.Draw}</span>
          <span>
            <b style={{ color: "#b45309" }}>ESP {blended.Spain}</b>
          </span>
        </div>
      </div>

      <p className="mt-3 text-[12px] text-mute">
        Fans back England. The Pulse still backs Spain. Tap for the raw vote.
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-2 text-[12px] font-medium text-blue"
      >
        {open ? "Hide split" : "Show market vs fans"}
      </button>

      {open ? (
        <div className="mt-3 space-y-3 border-t border-line pt-3">
          <Split label={`Market baseline · signal only`} value={pulse.market} />
          <Split label={`Fan vote · ${n} ballots`} value={finish(fans)} />
          {pulse.snapshots.map((s) => (
            <Split key={s.at} label={`${s.at} · ${s.note}`} value={s} />
          ))}
        </div>
      ) : null}

      <div className="mt-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-mute">Who do you back tonight?</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {SIDES.map((side) => (
            <button
              key={side}
              type="button"
              onClick={() => setVote(side)}
              className={`rounded-full py-2 text-[13px] font-medium ring-1 ${
                vote === side ? "bg-ink text-white ring-ink" : "bg-paper text-ink ring-line"
              }`}
            >
              {side === "Draw" ? "Draw / ET" : side}
            </button>
          ))}
        </div>
        {vote ? (
          <p className="mt-2 text-[12px] text-mute">
            Locked in: {vote}. Pulse shifts toward the fan layer as ballots grow.
          </p>
        ) : null}
      </div>
    </section>
  );
}

function LeanBar({ value }: { value: Record<Side, number> }) {
  return (
    <div className="flex h-2.5 overflow-hidden rounded-full">
      <div style={{ width: `${value.England}%`, background: color.England }} />
      <div style={{ width: `${value.Draw}%`, background: color.Draw }} />
      <div style={{ width: `${value.Spain}%`, background: color.Spain }} />
    </div>
  );
}

function Split({
  label,
  value,
}: {
  label: string;
  value: { England: number; Spain: number; Draw: number };
}) {
  return (
    <div>
      <p className="text-[11px] text-mute">{label}</p>
      <LeanBar value={value} />
      <p className="mt-1 text-[11px] text-mute">
        ENG {value.England} · Draw {value.Draw} · ESP {value.Spain}
      </p>
    </div>
  );
}
