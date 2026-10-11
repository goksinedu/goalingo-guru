import {
  community,
  evidence,
  form,
  guruFacts,
  h2h,
  hookFact,
  match,
  snapshot,
  sources,
  teamWeights,
} from "../data/facts";
import type { Evidence } from "../data/facts";
import { EvidenceNumber } from "./EvidenceSheet";
import { PulseBlock } from "./PulseBlock";

export function MatchScreen({
  onBack,
  onEvidence,
  onSources,
}: {
  onBack: () => void;
  onEvidence: (e: Evidence) => void;
  onSources: () => void;
}) {
  return (
    <div className="flex min-h-full flex-col pb-24">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-paper px-4 py-3">
        <button type="button" onClick={onBack} className="text-[13px] font-medium">
          ← Home
        </button>
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
          GURU · pre-kickoff
        </span>
        <button type="button" onClick={onSources} className="text-[13px] font-medium text-blue">
          Sources
        </button>
      </header>

      <div className="px-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mute">
          {match.competition} · {match.stage} · not played
        </p>
        <h1 className="mt-2 font-serif text-[32px] leading-[1.05]">{match.whyItMatters}</h1>
        <p className="mt-2 text-[14px] leading-relaxed text-mute">{match.whyBody}</p>

        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-[28px] bg-card px-4 py-4 ring-1 ring-line">
          <TeamChip side="England" color="#c8102e" />
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-mute">Kick-off</p>
            <p className="font-serif text-[28px] leading-none">{match.kickoff}</p>
            <p className="mt-1 text-[11px] text-mute">{match.date}</p>
          </div>
          <TeamChip side="Spain" color="#f1bf00" align="right" />
        </div>
        <p className="mt-2 text-center text-[12px] text-mute">
          {match.venue} · {match.referee}
        </p>

        <article className="mt-5 rounded-[28px] bg-[#132015] p-5 text-[#f4efe4]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8fbf96]">
            {hookFact.kicker}
          </p>
          <p className="mt-2 font-serif text-[22px] leading-snug">{hookFact.text}</p>
          <p className="mt-3 text-[12px]">
            Tap{" "}
            <EvidenceNumber id={hookFact.evidenceId} onOpen={onEvidence}>
              2 of 2
            </EvidenceNumber>{" "}
            for the knockout tape.
          </p>
        </article>

        <div className="mt-4">
          <PulseBlock onEvidence={onEvidence} />
        </div>

        <section className="mt-8">
          <h2 className="font-serif text-[26px]">Top GURU facts</h2>
          <p className="mt-1 text-[13px] text-mute">
            Ranked by weight: recency, asymmetry, sample, availability, social/market split.
            Not a forecast.
          </p>
          <ol className="mt-4 space-y-3">
            {guruFacts.map((f) => (
              <li key={f.id} className="rounded-[24px] bg-card p-4 ring-1 ring-line">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
                    #{f.rank} · {f.tag}
                  </p>
                  <WeightChip value={f.weight} />
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper">
                  <div className="h-full bg-blue" style={{ width: `${f.weight}%` }} />
                </div>
                <h3 className="mt-3 font-serif text-[21px] leading-snug">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed">{f.body}</p>
                <p className="mt-2 text-[11px] text-mute">{f.drivers.join(" · ")}</p>
                <button
                  type="button"
                  className="mt-3 text-[12px] font-medium text-verify"
                  onClick={() => onEvidence(evidence[f.evidenceId])}
                >
                  See evidence →
                </button>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-[26px]">GURU weights</h2>
          <p className="mt-1 text-[13px] text-mute">
            EvidenceScore layers from the spec. Neutral venue, so home/away is flat. Market is a
            signal, not a price list.
          </p>
          <div className="mt-3 rounded-[24px] bg-card p-4 ring-1 ring-line">
            <WeightRow label="Form" a={teamWeights.england.form} b={teamWeights.spain.form} />
            <WeightRow label="Attack" a={teamWeights.england.attack} b={teamWeights.spain.attack} />
            <WeightRow label="Defense" a={teamWeights.england.defense} b={teamWeights.spain.defense} />
            <WeightRow
              label="Availability"
              a={teamWeights.england.availability}
              b={teamWeights.spain.availability}
            />
            <WeightRow label="Home / away" a={teamWeights.england.homeAway} b={teamWeights.spain.homeAway} />
            <WeightRow label="Market signal" a={teamWeights.england.market} b={teamWeights.spain.market} />
            <p className="mt-2 text-[11px] text-mute">England left · Spain right · 0–10</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-[26px]">Road here</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <FormCol side="England" rows={form.england} />
            <FormCol side="Spain" rows={form.spain} />
          </div>
          <div className="mt-3 rounded-[24px] bg-card p-4 ring-1 ring-line">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-mute">Per game · n=5</p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[13px]">
              <Stat k="xG" a={snapshot.england.xg} b={snapshot.spain.xg} id="control" onEvidence={onEvidence} />
              <Stat k="Shots" a={snapshot.england.shots} b={snapshot.spain.shots} id="control" onEvidence={onEvidence} />
              <Stat k="Conceded" a={snapshot.england.ga} b={snapshot.spain.ga} id="defense" onEvidence={onEvidence} />
              <Stat k="Passes" a={snapshot.england.passes} b={snapshot.spain.passes} id="control" onEvidence={onEvidence} />
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-[26px]">Only two meetings</h2>
          <ul className="mt-3 space-y-3">
            {h2h.map((row) => (
              <li key={row.date} className="rounded-[20px] bg-card p-4 ring-1 ring-line">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-mute">
                  {row.comp} · {row.date}
                </p>
                <p className="mt-1 font-serif text-[20px]">
                  <EvidenceNumber id="h2h" onOpen={onEvidence}>
                    {row.score}
                  </EvidenceNumber>
                </p>
                <p className="mt-1 text-[13px] text-mute">{row.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-[24px] bg-card p-4 ring-1 ring-line">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
            The community corrects GURU
          </p>
          <p className="mt-2 text-[15px] leading-snug">
            <span className="font-semibold">@{community.user}</span>{" "}
            <span className="text-verify">· {community.badge}</span>
          </p>
          <p className="mt-1 text-[14px] leading-relaxed">“{community.take}”</p>
        </section>

        <button
          type="button"
          onClick={onSources}
          className="mt-6 mb-2 w-full rounded-[24px] bg-blue/10 p-4 text-left"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">Held out</p>
          <p className="mt-1 text-[14px]">
            {sources[0].coverage} Four folders still feed the weights.
          </p>
          <p className="mt-2 text-[12px] font-medium text-blue">How GURU used the warehouses →</p>
        </button>
      </div>
    </div>
  );
}

function WeightChip({ value }: { value: number }) {
  return (
    <span className="rounded-full bg-blue/10 px-2.5 py-0.5 text-[12px] font-semibold tabular-nums text-blue">
      w{value}
    </span>
  );
}

function WeightRow({ label, a, b }: { label: string; a: number; b: number }) {
  return (
    <div className="py-1.5">
      <div className="flex justify-between text-[12px]">
        <span className="tabular-nums">{a.toFixed(1)}</span>
        <span className="text-mute">{label}</span>
        <span className="tabular-nums">{b.toFixed(1)}</span>
      </div>
      <div className="mt-1 flex h-1.5 gap-1">
        <div className="flex flex-1 justify-end overflow-hidden rounded-full bg-paper">
          <div className="h-full bg-eng" style={{ width: `${a * 10}%` }} />
        </div>
        <div className="flex flex-1 overflow-hidden rounded-full bg-paper">
          <div className="h-full bg-esp-gold" style={{ width: `${b * 10}%` }} />
        </div>
      </div>
    </div>
  );
}

function FormCol({
  side,
  rows,
}: {
  side: string;
  rows: { date: string; opp: string; gf: number; ga: number; stage: string }[];
}) {
  return (
    <div className="rounded-[20px] bg-card p-3 ring-1 ring-line">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-mute">{side}</p>
      <ul className="mt-2 space-y-1.5 text-[12px]">
        {rows.map((r) => (
          <li key={r.date} className="flex justify-between gap-1">
            <span className="truncate text-mute">
              {r.stage} {r.opp.replace(" Women's", "").replace(" W", "")}
            </span>
            <span className="tabular-nums font-medium">
              {r.gf}–{r.ga}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamChip({ side, color, align }: { side: string; color: string; align?: "right" }) {
  return (
    <div className={align === "right" ? "text-right" : ""}>
      <span className="inline-block h-2 w-2 rounded-full" style={{ background: color }} />
      <p className="mt-1 text-[13px] font-semibold">{side}</p>
    </div>
  );
}

function Stat({
  k,
  a,
  b,
  id,
  onEvidence,
}: {
  k: string;
  a: number;
  b: number;
  id: string;
  onEvidence: (e: Evidence) => void;
}) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-mute">{k}</p>
      <p className="font-serif text-[22px]">
        <EvidenceNumber id={id} onOpen={onEvidence}>
          {a}
        </EvidenceNumber>
        <span className="mx-1 text-line">/</span>
        <EvidenceNumber id={id} onOpen={onEvidence}>
          {b}
        </EvidenceNumber>
      </p>
    </div>
  );
}
