export type Side = "England" | "Spain" | "Draw";

export type Evidence = {
  id: string;
  number: string;
  label: string;
  definition: string;
  sample: string;
  source: string;
  freshness: string;
  notes?: string;
};

export type GuruFact = {
  id: string;
  rank: number;
  weight: number;
  drivers: string[];
  tag: string;
  title: string;
  body: string;
  evidenceId: string;
};

export const match = {
  id: 4020846,
  date: "27 Jul 2025",
  kickoff: "16:00 CEST",
  competition: "UEFA Women's Euro 2025",
  stage: "Final",
  venue: "St. Jakob-Park, Basel",
  referee: "Stéphanie Frappart",
  home: "England",
  away: "Spain",
  status: "pre-kickoff" as const,
  managers: { England: "Sarina Wiegman", Spain: "Montserrat Tomé" },
  whyItMatters: "England have already lived two finals this fortnight. Spain have barely conceded.",
  whyBody:
    "Kick-off 16:00 in Basel. Holders versus world champions. GURU is reading only what was knowable before the whistle — tournament tape, public availability, market-as-signal, fan voice.",
};

export const hookFact = {
  kicker: "The one thing that matters",
  text: "England's last two knockout nights both left 90 minutes without a winner. Spain's last five games have let in three goals.",
  evidenceId: "et-load",
};

export const form = {
  england: [
    { date: "5 Jul", opp: "France", gf: 1, ga: 2, xg: 0.73, stage: "Group", note: "Only regulation loss. Walsh 86'." },
    { date: "9 Jul", opp: "Netherlands", gf: 4, ga: 0, xg: 2.40, stage: "Group", note: "First statement win." },
    { date: "13 Jul", opp: "Wales", gf: 6, ga: 1, xg: 5.39, stage: "Group", note: "Inflated attack sample." },
    { date: "17 Jul", opp: "Sweden", gf: 2, ga: 2, xg: 1.91, stage: "QF", note: "0–2 down. Bronze 78', Agyemang 80'. ET + pens." },
    { date: "22 Jul", opp: "Italy", gf: 2, ga: 1, xg: 3.05, stage: "SF", note: "0–1. Agyemang 95', Kelly 118'." },
  ],
  spain: [
    { date: "3 Jul", opp: "Portugal", gf: 5, ga: 0, xg: 3.41, stage: "Group", note: "Bonmatí returns late after hospital." },
    { date: "7 Jul", opp: "Belgium", gf: 6, ga: 2, xg: 3.16, stage: "Group", note: "Only game Spain leaked twice." },
    { date: "11 Jul", opp: "Italy", gf: 3, ga: 1, xg: 1.55, stage: "Group", note: "Quietest xG night." },
    { date: "18 Jul", opp: "Switzerland", gf: 2, ga: 0, xg: 3.69, stage: "QF", note: "Clean, high chance quality." },
    { date: "23 Jul", opp: "Germany", gf: 1, ga: 0, xg: 1.96, stage: "SF", note: "Bonmatí 112', 0.01 xG. ET." },
  ],
};

export const snapshot = {
  england: { xg: 2.7, shots: 19.0, press: 180, passes: 613, gf: 3.0, ga: 1.2, lateXg: 1.1, et: 2, n: 5 },
  spain: { xg: 2.75, shots: 24.4, press: 153, passes: 761, gf: 3.4, ga: 0.6, lateXg: 1.25, et: 1, n: 5 },
};

export const teamWeights = {
  england: { form: 7.2, attack: 8.1, defense: 5.4, availability: 5.8, homeAway: 5.0, market: 4.6 },
  spain: { form: 9.1, attack: 8.4, defense: 8.6, availability: 6.4, homeAway: 5.0, market: 7.8 },
};

export const h2h = [
  {
    date: "20 Jul 2022",
    comp: "Euro QF",
    score: "England 2–1 Spain",
    note: "Toone 83', Stanway 95'. England already needed extra time against this Spain.",
  },
  {
    date: "20 Aug 2023",
    comp: "World Cup Final",
    score: "Spain 1–0 England",
    note: "Carmona 28'. The last final between them. Spain are still world champions tonight.",
  },
];

export const guruFacts: GuruFact[] = [
  {
    id: "et-load",
    rank: 1,
    weight: 96,
    drivers: ["Load", "Recency", "Pattern"],
    tag: "Load",
    title: "England are walking into a third extra time in ten days",
    body: "Quarter-final 17 Jul: 0–2 to Sweden, level at 78' and 80', then pens. Semi 22 Jul: 0–1 to Italy, Agyemang 95', Kelly 118'. Spain also played 120' on 23 Jul — but only once. The legs question is England's.",
    evidenceId: "et-load",
  },
  {
    id: "pulse-split",
    rank: 2,
    weight: 93,
    drivers: ["Market", "Social", "Disagreement"],
    tag: "Pulse",
    title: "Fans back England. The Pulse still backs Spain.",
    body: "Market-as-signal opens on the world champions (defense, shot volume, WC final). Fan ballots moved after Kelly's 118' on Tuesday. That gap is the story, not a tip.",
    evidenceId: "pulse",
  },
  {
    id: "h2h",
    rank: 3,
    weight: 91,
    drivers: ["H2H", "Situational", "Absurd"],
    tag: "H2H",
    title: "The last two times: England after 90', Spain in a final",
    body: "Euro 2022 quarter-final — England 2–1 after extra time. World Cup 2023 final — Spain 1–0. Same two teams, opposite scripts. n=2. Still the only finals-week tape that exists.",
    evidenceId: "h2h",
  },
  {
    id: "defense",
    rank: 4,
    weight: 88,
    drivers: ["Defense", "Asymmetry", "Sample"],
    tag: "Defense",
    title: "Spain have conceded 3 in 5. England have conceded 6.",
    body: "0.6 against per game versus 1.2. Spain's only leaky night was Belgium (6–2). England have been breached in four of five. Attack xG is almost a tie (2.75 vs 2.70). The gap is who gets scored on.",
    evidenceId: "defense",
  },
  {
    id: "bonmati",
    rank: 5,
    weight: 86,
    drivers: ["Availability", "Value", "Public medical"],
    tag: "Availability",
    title: "Bonmatí is the most valuable player on the pitch — and the thinnest",
    body: "Viral meningitis, hospital, late June — public. She came back against Portugal, then scored the Germany semi winner at 112' on 0.01 xG. Five-game open-play xG: 0.75. Esther is on 3.71. The Ballon d'Or is not the spear tonight; she is the availability weight.",
    evidenceId: "bonmati",
  },
  {
    id: "bench",
    rank: 6,
    weight: 84,
    drivers: ["Social", "Attack", "Recency"],
    tag: "Player watch",
    title: "England's bench has scored the last three knockout goals",
    body: "Agyemang 80' and 95'. Kelly 118'. Plus the 2022 Kelly-lore already moving fan Pulse. Russo and Toone lead tournament xG (2.13 / 2.27) — the finishers lately have come from the shoulder.",
    evidenceId: "bench",
  },
  {
    id: "control",
    rank: 7,
    weight: 79,
    drivers: ["Attack", "SkillCorner intensity"],
    tag: "Control",
    title: "Spain take more shots and more of the ball. They do not create more xG.",
    body: "24.4 shots and 761 passes per game versus 19 and 613. Expected goals: 2.75 vs 2.70. High-control, not high-yield — the 30–40 minute shape SkillCorner's intensity model flags as sterile possession.",
    evidenceId: "control",
  },
];

export const community = {
  user: "sample_size_sam",
  badge: "Accuracy 91",
  take: "Two extra times is a feeling, not a law. n=2 on the knockout tape. Spain's 'locked defence' also includes Belgium 2 — drop that night and it's 1 in 4, which is the real number.",
  challenges: "GURU's #1 load fact and #4 defence fact",
};

export const pulse = {
  explanation:
    "Goalingo Pulse is a blend: a market-price baseline (cold-start) plus Goalingo votes (the fan voice). Market is a signal only — never linked, never sold. This is how the crowd leans tonight, not a tip.",
  market: { England: 38, Spain: 47, Draw: 15 },
  fansSeed: { England: 54, Spain: 31, Draw: 15 },
  snapshots: [
    { at: "Monday", note: "Market-heavy, low votes", England: 40, Spain: 46, Draw: 14 },
    { at: "After Italy SF", note: "Fans jump on Kelly 118'", England: 48, Spain: 37, Draw: 15 },
    { at: "Sunday morning", note: "Still split", England: 43, Spain: 42, Draw: 15 },
  ],
};

export const sources = [
  {
    id: "statsbomb",
    name: "StatsBomb",
    folder: "01_StatsBomb_Open_Data",
    usedFor: "Pre-final Euro 2025 events + 2022/2023 H2H",
    thisMatch: "England n=5 and Spain n=5 before 27 Jul 2025 · H2H 3844384, 3906390",
    coverage: "Cutoff: kick-off. Final 4020846 is held out.",
  },
  {
    id: "skillcorner",
    name: "SkillCorner",
    folder: "03_SkillCorner_Open_Data",
    usedFor: "Intensity model for sterile-control windows",
    thisMatch: "Calibrated on A-League 2024/25 tracking, latest 17 May 2025",
    coverage: "20 tracked matches",
  },
  {
    id: "wyscout",
    name: "Wyscout",
    folder: "02_Wyscout_Soccer_Match_Event_Dataset",
    usedFor: "Playerank-style contribution weights",
    thisMatch: "Taxonomy only — 2017–18 dump does not include this final",
    coverage: "1,941 matches · 2017–18",
  },
  {
    id: "metrica",
    name: "Metrica Sports",
    folder: "04_Metrica_Sports_Sample_Data",
    usedFor: "Physical-load schema for the ET-in-ten-days fact",
    thisMatch: "Sample Game 3 schema — not this fixture",
    coverage: "3 sample games",
  },
];

export const evidence: Record<string, Evidence> = {
  "et-load": {
    id: "et-load",
    number: "2 of 2",
    label: "England knockout matches needing extra time",
    definition:
      "Matches in UEFA Women's Euro 2025, England involved, stage in {Quarter-finals, Semi-finals}, before 2025-07-27, where event periods include 3 or 4. Sweden 4018355 (Bronze 78', Agyemang 80'). Italy 4020005 (Agyemang 95', Kelly 118').",
    sample: "n = 2 knockout matches. Spain extra time in the same window: 1 (Germany 4020077).",
    source: "StatsBomb Open Data · matches/53/315.json + events",
    freshness: "Last pre-final match 22 Jul 2025 (England), 23 Jul 2025 (Spain)",
    notes: "Lucy Bronze's tibia fracture was not public before kick-off, so it is not in this weight.",
  },
  pulse: {
    id: "pulse",
    number: "sums to 100%",
    label: "Goalingo Pulse mix",
    definition:
      "Displayed lean = (1 − α) × market + α × fan votes, renormalised to 100%. α rises with participation. Market prices are a cold-start signal only.",
    sample: "Seeded fan n on the Pulse sheet; your vote is local.",
    source: "Market baseline (signal) + Goalingo votes",
    freshness: "Recomputed on every vote · pre-kickoff",
  },
  h2h: {
    id: "h2h",
    number: "2–1 and 1–0",
    label: "England vs Spain, senior finals-week H2H",
    definition:
      "StatsBomb matches with both team_id 865 and 863, match_date < 2025-07-27. Euro 2022 QF 3844384 (2–1 AET). World Cup 2023 Final 3906390 (1–0).",
    sample: "n = 2",
    source: "StatsBomb Open Data",
    freshness: "Last meeting 20 Aug 2023",
    notes: "Amber: n=2. Rendered as raw results, not a percentage.",
  },
  defense: {
    id: "defense",
    number: "3 vs 6",
    label: "Goals conceded, Euro 2025 before the final",
    definition:
      "Sum of goals against for each team in competition 53 / season 315 with match_date < 2025-07-27. Spain 0+2+1+0+0. England 2+0+1+2+1.",
    sample: "n = 5 each",
    source: "StatsBomb match scores · 53/315",
    freshness: "Through 23 Jul 2025",
  },
  bonmati: {
    id: "bonmati",
    number: "0.75 xG",
    label: "Bonmatí open-play xG, five pre-final games",
    definition:
      "Sum of StatsBomb xG on her shots, period ≠ 5, in Spain's five Euro 2025 matches before 27 Jul. SF winner vs Germany: minute 112, xG 0.014. Public medical: viral meningitis late June 2025 (RFEF / Reuters). Market value ~€1.6m (Sep 2025 public estimate) used as a value weight only.",
    sample: "12 shots · 1 goal · n = 5 matches",
    source: "StatsBomb events + public medical reports",
    freshness: "Through 23 Jul 2025",
    notes: "Private-life material is excluded. Medical is included only where already public.",
  },
  bench: {
    id: "bench",
    number: "80' / 95' / 118'",
    label: "England knockout goals after the 75th minute",
    definition:
      "Goals for England in QF 4018355 and SF 4020005 with minute ≥ 75, period ≠ 5. Bronze 78, Agyemang 80, Agyemang 95, Kelly 118. Tournament open-play xG leaders: Toone 2.27, Russo 2.13, Kelly 1.56.",
    sample: "n = 2 knockout matches, 4 late goals",
    source: "StatsBomb events",
    freshness: "Through 22 Jul 2025",
  },
  control: {
    id: "control",
    number: "24.4 vs 19.0",
    label: "Shots per game, Euro 2025 before the final",
    definition:
      "Mean shot count (penalties in period 5 excluded) across five pre-final matches. Passes: Spain 760.6, England 613.4. Open-play + in-match xG: Spain 2.755, England 2.697.",
    sample: "n = 5 each",
    source: "StatsBomb events · intensity mix informed by SkillCorner phases",
    freshness: "Through 23 Jul 2025",
  },
};

export const lineups = {
  England: [
    "Hannah Hampton",
    "Lucy Bronze",
    "Leah Williamson",
    "Alex Greenwood",
    "Jessica Carter",
    "Keira Walsh",
    "Georgia Stanway",
    "Ella Toone",
    "Lauren James",
    "Lauren Hemp",
    "Alessia Russo",
  ],
  Spain: [
    "Cata Coll",
    "Ona Batlle",
    "Irene Paredes",
    "Laia Aleixandri",
    "Olga Carmona",
    "Patri Guijarro",
    "Aitana Bonmatí",
    "Alexia Putellas",
    "Athenea del Castillo",
    "Mariona Caldentey",
    "Esther González",
  ],
};
