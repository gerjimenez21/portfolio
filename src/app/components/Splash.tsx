import { motion } from "motion/react";
import newSvgPaths from "@/imports/PortfolioPageDesign-1/svg-quai8z445o";

const EASE = [0.22, 1, 0.36, 1] as const;
const EXIT = { duration: 0.6, delay: 2.4, ease: EASE };

const WORDMARK_VIEW = { w: 59.5708, h: 15.9989 };

function OrbitLoader() {
  return (
    <div className="splash-orbit" aria-hidden>
      <div className="splash-orbit-inner splash-orbit-one" />
      <div className="splash-orbit-inner splash-orbit-two" />
      <div className="splash-orbit-inner splash-orbit-three" />
    </div>
  );
}

function Wordmark() {
  return (
    <svg
      fill="none"
      viewBox={`0 0 ${WORDMARK_VIEW.w} ${WORDMARK_VIEW.h}`}
      className="relative z-10 h-8 w-auto"
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
      <style>{`
        .splash-orbit {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          perspective: 800px;
        }
        .splash-orbit-inner {
          position: absolute;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .splash-orbit-one {
          animation: splash-rotate-one 1s linear infinite;
          border-bottom: 3px solid #c4c2ff;
        }
        .splash-orbit-two {
          animation: splash-rotate-two 1s linear infinite;
          border-right: 3px solid #8aaef8;
        }
        .splash-orbit-three {
          animation: splash-rotate-three 1s linear infinite;
          border-top: 3px solid #6764f2;
        }
        @keyframes splash-rotate-one {
          0% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); }
          100% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); }
        }
        @keyframes splash-rotate-two {
          0% { transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); }
          100% { transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); }
        }
        @keyframes splash-rotate-three {
          0% { transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); }
          100% { transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); }
        }
      `}</style>

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6764f2] opacity-20 blur-[120px]"
        aria-hidden
      />

      <motion.div
        className="relative flex size-[272px] items-center justify-center"
        initial={{ filter: "blur(0px)" }}
        animate={{ filter: "blur(12px)" }}
        transition={EXIT}
      >
        <OrbitLoader />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Wordmark />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
