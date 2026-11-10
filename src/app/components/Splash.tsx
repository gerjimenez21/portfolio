import { useEffect } from "react";
import newSvgPaths from "@/imports/PortfolioPageDesign-1/svg-quai8z445o";

const WORDMARK_VIEW = { w: 59.5708, h: 15.9989 };
const PULSE_CYCLE_S = 1.2;
const PULSE_CYCLES = 2;

function Wordmark() {
  return (
    <svg
      fill="none"
      viewBox={`0 0 ${WORDMARK_VIEW.w} ${WORDMARK_VIEW.h}`}
      className="h-8 w-auto"
      aria-hidden
    >
      <g>
        <path d={newSvgPaths.p3a85180} fill="white" />
        <path d={newSvgPaths.p183f6800} fill="white" />
        <path d={newSvgPaths.p1cd4af00} fill="white" />
        <path d={newSvgPaths.p1dec7a80} fill="white" />
        <path d={newSvgPaths.p15e9bf00} fill="white" />
      </g>
    </svg>
  );
}

function DotsPulse() {
  return (
    <div className="splash-dots-pulse" aria-hidden>
      <span />
      <span />
      <span />
    </div>
  );
}

export function Splash({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const id = window.setTimeout(
      onDone,
      (PULSE_CYCLE_S * PULSE_CYCLES + 0.3) * 1000,
    );
    return () => window.clearTimeout(id);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#09090f]"
      role="status"
      aria-label="Cargando"
    >
      <style>{`
        .splash-dots-pulse {
          --size: 32px;
          display: inline-flex;
          gap: calc(var(--size) / 6);
        }
        .splash-dots-pulse span {
          width: calc(var(--size) / 4);
          height: calc(var(--size) / 4);
          border-radius: 50%;
          background: #6764f2;
          opacity: 0.5;
          animation: splash-dots-pulse 1.2s ease-in-out 2 both;
        }
        .splash-dots-pulse span:nth-child(2) { animation-delay: 0.15s; }
        .splash-dots-pulse span:nth-child(3) { animation-delay: 0.30s; }
        @keyframes splash-dots-pulse {
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6764f2] opacity-20 blur-[120px]"
        aria-hidden
      />

      <div className="relative flex flex-col items-center gap-5">
        <Wordmark />
        <DotsPulse />
      </div>
    </div>
  );
}
