import { motion } from "motion/react";
import newSvgPaths from "@/imports/PortfolioPageDesign-1/svg-quai8z445o";

const EASE = [0.22, 1, 0.36, 1] as const;
const EXIT = { duration: 0.6, delay: 1.6, ease: EASE };

function Wordmark() {
  return (
    <svg
      fill="none"
      viewBox="0 0 59.5708 15.9989"
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

export function Splash({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#09090f]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={EXIT}
      onAnimationComplete={onDone}
      role="status"
      aria-label="Cargando"
    >
      <motion.div
        className="relative flex flex-col items-center gap-4"
        initial={{ filter: "blur(0px)" }}
        animate={{ filter: "blur(12px)" }}
        transition={EXIT}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6764f2] opacity-20 blur-[120px]"
          aria-hidden
        />

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Wordmark />
        </motion.div>

        <div className="relative h-px w-[128px] overflow-hidden">
          <motion.div
            className="h-px w-full origin-left bg-[#6764f2]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: "linear" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
