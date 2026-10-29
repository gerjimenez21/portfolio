import { motion } from "motion/react";
import newSvgPaths from "@/imports/PortfolioPageDesign-1/svg-quai8z445o";

const EASE = [0.22, 1, 0.36, 1] as const;
const EXIT = { duration: 0.6, delay: 2.4, ease: EASE };

const WORDMARK_VIEW = { w: 59.5708, h: 15.9989 };
const WORDMARK_H = 32;
const WORDMARK_SCALE = WORDMARK_H / WORDMARK_VIEW.h;
const WORDMARK_W = WORDMARK_VIEW.w * WORDMARK_SCALE;
const U_CENTER = 7.1909 * WORDMARK_SCALE;
const R_CENTER = 55.74135 * WORDMARK_SCALE;

function GooeyLoader() {
  const duration = 0.95;
  const startX = U_CENTER;
  const travel = R_CENTER - U_CENTER;
  const delayStep = 0.08;
  const dots = [
    { fill: "#6764f2", delay: 0 },
    { fill: "#7a88f6", delay: delayStep },
    { fill: "#8aaef8", delay: delayStep * 2 },
  ];

  return (
    <svg
      className="w-full"
      height="52"
      viewBox={`0 0 ${WORDMARK_W} 52`}
      overflow="visible"
      aria-hidden
    >
      <defs>
        <filter
          id="splash-goo"
          x="-80%"
          y="-80%"
          width="260%"
          height="260%"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="8"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          />
        </filter>
      </defs>
      <g filter="url(#splash-goo)">
        {dots.map((dot, i) => (
          <motion.circle
            key={i}
            cx={startX}
            cy="26"
            r="12"
            fill={dot.fill}
            animate={{ x: [0, travel] }}
            transition={{
              duration,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [0.42, 0, 0.58, 1],
            }}
            style={{
              transformOrigin: `${startX}px 26px`,
              scaleX: 1.48,
              scaleY: 0.7,
            }}
          />
        ))}
      </g>
    </svg>
  );
}

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
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6764f2] opacity-20 blur-[120px]"
        aria-hidden
      />

      <motion.div
        className="relative flex w-max flex-col items-stretch gap-5"
        initial={{ filter: "blur(0px)" }}
        animate={{ filter: "blur(12px)" }}
        transition={EXIT}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Wordmark />
        </motion.div>

        <GooeyLoader />
      </motion.div>
    </motion.div>
  );
}
