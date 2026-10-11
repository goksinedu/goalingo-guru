import { useState } from "react";
import { HomeScreen } from "./components/HomeScreen";
import { MatchScreen } from "./components/MatchScreen";
import { SourcesScreen } from "./components/SourcesScreen";
import { EvidenceSheet } from "./components/EvidenceSheet";
import { Wordmark } from "./components/Logo";
import type { Evidence } from "./data/facts";

type Tab = "home" | "match" | "sources";

export default function App() {
  const [tab, setTab] = useState<Tab>("match");
  const [sheet, setSheet] = useState<Evidence | null>(null);

  return (
    <div className="min-h-screen bg-[#d9e4fb]">
      <div className="mx-auto flex min-h-screen max-w-[430px] flex-col bg-paper shadow-[0_0_0_1px_rgba(20,20,20,0.06)] sm:min-h-[100svh]">
        {tab === "home" ? <HomeScreen onOpenMatch={() => setTab("match")} /> : null}
        {tab === "match" ? (
          <MatchScreen
            onBack={() => setTab("home")}
            onEvidence={setSheet}
            onSources={() => setTab("sources")}
          />
        ) : null}
        {tab === "sources" ? <SourcesScreen onBack={() => setTab("match")} /> : null}

        <nav className="sticky bottom-0 z-20 mt-auto grid grid-cols-3 border-t border-line bg-paper px-2 py-2">
          <NavBtn active={tab === "home"} onClick={() => setTab("home")} label="Today" />
          <NavBtn active={tab === "match"} onClick={() => setTab("match")} label="GURU" />
          <NavBtn active={tab === "sources"} onClick={() => setTab("sources")} label="Sources" />
        </nav>
      </div>

      <p className="hidden py-6 text-center text-[12px] text-blue-ink/70 lg:block">
        <Wordmark />
        <span className="mx-2">·</span>
        Pre-kickoff GURU · final held out of the tape
      </p>

      {sheet ? <EvidenceSheet item={sheet} onClose={() => setSheet(null)} /> : null}
    </div>
  );
}

function NavBtn({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full py-2 text-[13px] font-medium ${
        active ? "bg-ink text-white" : "text-mute"
      }`}
    >
      {label}
    </button>
  );
}
