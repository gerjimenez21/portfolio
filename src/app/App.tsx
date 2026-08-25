import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Link,
} from "react-router";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Send,
  BarChart3,
} from "lucide-react";
import { Splash } from "@/app/components/Splash";
import svgPaths from "@/imports/PortfolioPageDesign/svg-zfmadp87xp";
import newSvgPaths from "@/imports/PortfolioPageDesign-1/svg-quai8z445o";
import expSvgPaths from "@/imports/ExperienceMargin/svg-j6yg914nz2";
import imgHero from "@/imports/image.png";
import imgLouderband from "@/imports/image-1.png";
import imgBillboard from "@/imports/image-2.png";
import imgSolitaire from "@/imports/HomePage/8b9da8de3c76f8e3e13fac112f3cea13ac4982bf.png";
import imgHabitium from "@/imports/HomePage/b4c856bb09b435bee9853ef545943ab16b390e2c.png";
import imgFigmaLogo from "@/imports/figma-logo.svg";
import imgLotusLogo from "@/imports/lotus-logo.png";

/* ─── Shared data ────────────────────────────────────────────────────── */

const CONTACT_EMAIL = "indiarte@gmail.com";
const SOCIAL = {
  github: "https://github.com/gerjimenez21",
  linkedin: "https://www.linkedin.com/in/gjjimenez/",
  email: CONTACT_EMAIL,
};
const SECTION_PAD = "px-6 md:px-16 lg:px-24";
const SECTION_INNER = "w-full max-w-5xl mx-auto";

export const EXPERIENCE = [
  {
    company: "Humand Technologies",
    role: "Product Designer",
    period: "Nov 2023 — Presente",
    location: "Remote",
    paragraphs: [
      "Diseño experiencias de producto en Humand, con foco en resolver problemas complejos de forma simple para los usuarios.",
      "Actualmente lidero el diseño de un buscador unificado, un proyecto que nace de la necesidad de resolver la fragmentación de búsquedas dentro de la plataforma. A partir de investigación con usuarios y benchmark de otras plataformas, di forma en conjunto al equipo a un enfoque de búsqueda centralizada que unifica resultados de distintos módulos (como Noticias, Feed y Grupos) en una sola experiencia, sin perder la consistencia entre secciones.",
      "Anteriormente, participé en la creación de Timetracker desde cero: un producto orientado a ayudar a las empresas a gestionar el tiempo de sus equipos. Trabajando junto a equipos de desarrollo e investigación de usuarios, dimos forma a una herramienta que permitió a nuestros clientes reemplazar soluciones externas y sumarse al todo-en-uno de HR que ofrece Humand.",
    ],
    tags: [
      "Figma",
      "Claude",
      "Cursor",
      "Gemini",
      "Jitter",
      "Design Thinking",
      "UI Design",
    ],
  },
  {
    company: "Nonconformist",
    role: "Product Designer",
    period: "Enero 2022 — Jul 2023",
    location: "Buenos Aires, Argentina",
    paragraphs: [
      "En Nonconformist, formé parte del equipo que diseñó desde cero la Tarjeta de Débito Digital de Banco Supervielle, un producto que en ese momento no existía.",
      "Diseñamos e integramos funcionalidades clave como la posibilidad de exponer y ocultar los datos de la tarjeta, y visualizar los movimientos asociados. Para lograrlo, realizamos pruebas de usabilidad y entrevistas con usuarios, con el objetivo de entender sus necesidades reales y construir un producto centrado en quienes lo usan.",
      "También trabajé en el diseño de un sandbox de Payments as a Service, que permitía a distintas billeteras digitales integrarse y competir en el mercado.",
    ],
    tags: [
      "Figma",
      "Design Thinking",
      "UX Research",
      "UI Design",
      "Docker",
    ],
  },
  {
    company: "Instakash",
    role: "UX/UI Design",
    period: "Dic 2019 — Oct 2023",
    location: "Perú (Remoto)",
    paragraphs: [
      "En Instakash, una casa de cambio digital de Perú, participé en distintas etapas de evolución del producto: desde el diseño de las primeras versiones hasta sus sucesivas iteraciones.",
      "A medida que la plataforma escalaba, di forma a un Design System que permitió mantener consistencia visual y de interacción entre los distintos productos ofrecidos por la casa de cambio, coordinando el trabajo con los equipos de desarrollo y producto.",
      "Combiné investigación cualitativa (surveys) y cuantitativa (seguimiento de métricas) para validar decisiones de diseño y alinear cada iteración con los objetivos de negocio.",
    ],
    tags: ["React", "Vue.js", "SCSS", "Figma", "GraphQL"],
  },
];

const PERSONAL_PROJECTS = [
  {
    title: "figma-handoff",
    mono: true,
    description:
      "Skill para documentar decisiones de diseño sobre el canvas de Figma: cards de nota, annotation chips y conectores. Espejo opcional en Notion.",
    tags: ["Figma", "MCP", "Notion"],
    Icon: IconFigmaLogo,
    href: "https://github.com/gerjimenez21/figma-handoff",
  },
  {
    title: "Lotus Reader",
    mono: false,
    description:
      "Lector multiplataforma de PDF, EPUB y CBR con modo lectura, marcadores y soporte de fuentes personalizadas. Construido en Python, con Cocoa en Mac.",
    tags: [
      "Python",
      "CustomTkinter",
      "PyMuPDF",
      "Pillow",
      "PyObjC",
      "PyInstaller",
    ],
    Icon: IconLotusLogo,
    iconFill: true,
  },
  {
    title: "Libre Chart Manager",
    mono: false,
    description:
      "Herramienta open-source para crear, organizar y exportar gráficos a partir de datos locales. Sin suscripción, sin cloud.",
    tags: [
      "TypeScript",
      "React 19",
      "Vite",
      "Lightweight Charts",
    ],
    Icon: BarChart3,
  },
];

const SKILLS = [
  {
    category: "Diseño y prototipado",
    Icon: IconFrontend,
    items: [
      { label: "Figma" },
      {
        label: "Prototipado con AI",
        sublabel: "(Claude o Cursor)",
      },
      { label: "Vercel (Deploy de prototipos)" },
    ],
  },
  {
    category: "Research",
    Icon: IconBackend,
    items: [
      { label: "Entrevistas y usability testing" },
      { label: "Surveys" },
      { label: "Analytics" },
    ],
  },
  {
    category: "Gestión y documentación",
    Icon: IconDevOps,
    items: [
      { label: "Notion" },
      { label: "Jira" },
      { label: "Github" },
    ],
  },
  {
    category: "AI",
    Icon: IconTools,
    items: [
      { label: "Claude" },
      { label: "MCP" },
      { label: "Creación de Agentes" },
      { label: "Creación de Skills" },
    ],
  },
];

/* ─── SVG Icons ──────────────────────────────────────────────────────── */

function IconFigmaLogo(_props: {
  className?: string;
  strokeWidth?: number;
  color?: string;
}) {
  return (
    <span className="relative inline-block h-5 w-[13.342px] overflow-clip shrink-0">
      <img
        src={imgFigmaLogo}
        alt=""
        className="absolute inset-0 size-full"
      />
    </span>
  );
}

function IconLotusLogo(_props: {
  className?: string;
  strokeWidth?: number;
  color?: string;
}) {
  return (
    <span className="relative block size-10 overflow-clip shrink-0">
      <img
        src={imgLotusLogo}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
    </span>
  );
}

function IconFrontend() {
  return (
    <svg
      className="size-4"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip-fe)">
        <path
          d={svgPaths.p39ee6532}
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.p253a080}
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M1.33333 8H14.6667"
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
      <defs>
        <clipPath id="clip-fe">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconBackend() {
  return (
    <svg
      className="size-4"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 16 16"
    >
      <path
        d={svgPaths.p2b393280}
        stroke="#8276CA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d={svgPaths.p3eea2890}
        stroke="#8276CA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d={svgPaths.p2bdcbd80}
        stroke="#8276CA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
    </svg>
  );
}

function IconDevOps() {
  return (
    <svg
      className="size-4"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip-devops)">
        <path
          d={svgPaths.pfe5cd00}
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.p1fb38400}
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M10 1.33333V2.66667"
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M10 13.3333V14.6667"
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M1.33333 10H2.66667"
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M1.33333 6H2.66667"
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M13.3333 10H14.6667"
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M13.3333 6H14.6667"
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M6 1.33333V2.66667"
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M6 13.3333V14.6667"
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
      <defs>
        <clipPath id="clip-devops">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconTools() {
  return (
    <svg
      className="size-4"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip-tools)">
        <path
          d={svgPaths.p241f1490}
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.p6b27c00}
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.p312f7580}
          stroke="#8276CA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
      <defs>
        <clipPath id="clip-tools">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconSend() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 16 16">
      <g clipPath="url(#clip-send)">
        <path
          d={svgPaths.p22f0380}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M14.5693 1.43133L7.276 8.724"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
      <defs>
        <clipPath id="clip-send">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LogoWordmark() {
  return (
    <svg
      fill="none"
      viewBox="0 0 59.5708 15.9989"
      className="h-4 w-auto"
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

function CalendarIcon() {
  return (
    <svg
      className="size-3 shrink-0"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        d="M4 1V3"
        stroke="#7B78A8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1V3"
        stroke="#7B78A8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={expSvgPaths.p333d5300}
        stroke="#7B78A8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 5H10.5"
        stroke="#7B78A8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="size-3 shrink-0"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        d={expSvgPaths.p7c73480}
        stroke="#7B78A8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={expSvgPaths.p2d617c80}
        stroke="#7B78A8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Shared UI components ───────────────────────────────────────────── */

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Tag({ label }: { label: string }) {
  return (
    <span
      className="text-[14px] tracking-[0.275px] px-[11px] py-[5px] rounded-[4px] border border-[rgba(103,100,242,0.3)] text-[#BBB5DF] bg-[rgba(103,100,242,0.05)]"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {label}
    </span>
  );
}

export function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span
        className="text-[#8276ca] text-[16px] tracking-[2.4px] whitespace-nowrap"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        {children}
      </span>
      <span className="flex-1 h-px bg-[rgba(103,100,242,0.2)]" />
    </div>
  );
}

/* ─── Shared layout ──────────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleHashLink(e: React.MouseEvent, hash: string) {
    e.preventDefault();
    document
      .querySelector(hash)
      ?.scrollIntoView({ behavior: "smooth" });
  }

  const NAV_LINKS = [
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090f]/80 backdrop-blur-md border-b border-[rgba(103,100,242,0.1)]"
          : ""
      }`}
    >
      <nav className={`${SECTION_PAD} w-full`}>
        <div className={`${SECTION_INNER} flex items-center justify-between h-16`}>
        <Link to="/" className="flex items-center">
          <LogoWordmark />
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleHashLink(e, link.href)}
                className="text-[12px] tracking-[0.3px] text-[#7b78a8] hover:text-[#f0eff8] transition-colors"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleHashLink(e, "#contact")}
          className="hidden md:inline-flex items-center gap-1.5 px-[17px] py-[9px] rounded-[8px] border border-[rgba(103,100,242,0.3)] text-[#8276ca] text-[12px] transition-all hover:bg-[rgba(103,100,242,0.1)]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          <svg
            className="size-3"
            fill="none"
            viewBox="0 0 12 12"
          >
            <path
              d={svgPaths.pcd45380}
              stroke="#8276CA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p9deeb00}
              stroke="#8276CA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Contactar
        </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className={`relative w-full ${SECTION_PAD} pb-8 pt-[33px]`}>
      <div
        className="absolute border-[rgba(103,100,242,0.1)] border-solid border-t inset-0 pointer-events-none"
        aria-hidden
      />
      <div className={`${SECTION_INNER} flex items-center justify-between`}>
        <span
          className="text-[12px] text-[#7b78a8]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          © 2026 Ger Jiménez
        </span>
        <span
          className="text-[12px] text-[#7b78a8]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          Buenos Aires, Argentina
        </span>
      </div>
    </footer>
  );
}

function Root() {
  return (
    <div className="bg-[#09090f] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col items-start w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Home page sections ─────────────────────────────────────────────── */

function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex-shrink-0 mx-auto lg:mx-0 w-56 sm:w-64 lg:w-72 h-80 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden"
    >
      <ImageWithFallback
        src={imgHero}
        alt="Foto de perfil"
        className="w-full h-full object-cover object-top"
      />
      <div
        className="absolute inset-y-0 left-0 w-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #09090f, transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #09090f)",
        }}
      />
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center ${SECTION_PAD} pt-24 pb-16 overflow-hidden w-full`}
    >
      {/* Orbe izquierda */}
      <div
        className="pointer-events-none absolute blur-[80px] left-[-160px] opacity-20 rounded-full size-[600px] top-[-160px]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -42.426 -42.426 0 300 300)'><stop stop-color='rgba(103,100,242,1)' offset='0'/><stop stop-color='rgba(0,0,0,0)' offset='0.7'/></radialGradient></defs></svg>\")",
        }}
      />

      <div className={`relative z-10 ${SECTION_INNER} flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16`}>
        {/* Columna de texto */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="size-2 rounded-full bg-[#4df150]" />
            <span
              className="text-[#7b78a8] text-[16px] tracking-[1.2px]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Disponible para proyectos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-extrabold leading-[0.95] tracking-[-2.4px] text-[#f0eff8] mb-6"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(48px, 7vw, 88px)",
            }}
          >
            Sobre mi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[#7b78a8] text-[18px] leading-[30px] max-w-xl mb-10"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Diseñador de producto con más de 6 años creando
            experiencias centradas en el usuario. Experto en
            diseñar interfaces intuitivas y definir flujos de
            usuario eficientes y desarrollar sistemas de datos
            en tiempo real que mejoran la interacción.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[8px] bg-[#6764f2] text-white font-semibold text-[14px] transition-all hover:bg-[#5553d4] hover:shadow-[0_0_30px_rgba(103,100,242,0.4)]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Hablemos
            </a>
          </motion.div>
        </div>

        {/* Foto */}
        <HeroPhoto />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#7b78a8]"
      >
        <ChevronDown className="size-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

function ExperienceItem({
  job,
  index,
  isOpen,
  onToggle,
}: {
  job: (typeof EXPERIENCE)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="md:pl-10 relative">
        <button
          onClick={onToggle}
          className="w-full text-left group"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div className="flex items-start gap-3">
              <div className="flex flex-col">
                <h3
                  className="font-bold text-[18px] leading-[28px] text-[#f0eff8] group-hover:text-white transition-colors"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  {job.role}
                </h3>
                <span
                  className="font-semibold text-[14px] leading-[20px] text-[#8276ca]"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  {job.company}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-start sm:items-end gap-[4px]">
                <span
                  className="text-[12px] text-[#7b78a8] flex items-center gap-[6px]"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  <CalendarIcon />
                  {job.period}
                </span>
                <span
                  className="text-[12px] text-[#7b78a8] flex items-center gap-[6px]"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  <LocationIcon />
                  {job.location}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="shrink-0 text-[#6764f2]"
              >
                <ChevronDown className="size-4" />
              </motion.div>
            </div>
          </div>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ overflow: "hidden" }}
        >
          <div className="pt-4 pb-1 flex flex-col gap-[22.75px]">
            {job.paragraphs.map((p, pi) => (
              <p
                key={pi}
                className="text-[#7b78a8] text-[14px] leading-[22.75px]"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pb-2">
            {job.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </motion.div>
      </div>
    </FadeIn>
  );
}

function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className={`${SECTION_PAD} py-24 w-full`}
    >
      <div className={SECTION_INNER}>
      <FadeIn>
        <SectionLabel>Experiencia</SectionLabel>
      </FadeIn>

      <div className="relative">
        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((job, i) => (
            <div
              key={job.company}
              className="border border-[rgba(103,100,242,0.1)] rounded-[12px] bg-[#0f0e1a] px-5 py-4 transition-colors hover:border-[rgba(103,100,242,0.25)]"
            >
              <ExperienceItem
                job={job}
                index={i}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

function OtherProjectLogo({
  src,
  alt,
  pad = false,
}: {
  src: string;
  alt: string;
  pad?: boolean;
}) {
  return (
    <div className="relative shrink-0 size-16 overflow-hidden rounded-[9px]">
      {pad ? (
        <div className="absolute inset-[13.6px]">
          <ImageWithFallback
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <ImageWithFallback
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}

function OtherProjectsSection() {
  const rows = [
    {
      img: imgSolitaire,
      alt: "Solitaire Home Story",
      title: "Solitaire Home Story",
      type: "Product Design · Mobile",
      border: "border-b",
      pad: false,
    },
    {
      img: imgBillboard,
      alt: "Billboard",
      title: "Billboard",
      type: "Product Design · Mobile & Web",
      border: "border-b",
      pad: false,
    },
    {
      img: imgLouderband,
      alt: "Louderband",
      title: "Louderband",
      type: "Product Design · Mobile & Web",
      border: "",
      pad: true,
    },
    {
      img: imgHabitium,
      alt: "Habitium",
      title: "Habitium",
      type: "Digital design · Web",
      border: "border-t",
      pad: false,
    },
  ];

  return (
    <section className={`${SECTION_PAD} pb-16 w-full`}>
      <div className={SECTION_INNER}>
      <FadeIn>
        <p
          className="font-normal leading-[16.5px] text-[#7b78a8] text-[11px] tracking-[2px] uppercase"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontVariationSettings: '"wdth" 100',
          }}
        >
          Otros proyectos en los que trabajé
        </p>
        <div className="flex flex-col pt-3 w-full">
          {rows.map(
            ({ img, alt, title, type, border, pad }) => (
              <div
                key={title}
                className={`flex items-center justify-between py-3 w-full border-[rgba(103,100,242,0.08)] border-solid ${border}`}
              >
                <div className="flex gap-3 items-center">
                  <OtherProjectLogo
                    src={img}
                    alt={alt}
                    pad={pad}
                  />
                  <div className="flex flex-col items-start">
                    <p
                      className="font-semibold leading-[21px] text-[#bbb5df] text-[14px] whitespace-nowrap"
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontVariationSettings: '"wdth" 100',
                      }}
                    >
                      {title}
                    </p>
                    <p
                      className="font-normal leading-[16.5px] text-[#3d3a5c] text-[11px]"
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontVariationSettings: '"wdth" 100',
                      }}
                    >
                      {type}
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </FadeIn>
      </div>
    </section>
  );
}

function PersonalProjectsSection() {
  return (
    <section
      id="projects"
      className={`${SECTION_PAD} py-24 w-full`}
    >
      <div className={SECTION_INNER}>
        <FadeIn>
          <SectionLabel>Proyectos personales</SectionLabel>
        </FadeIn>
        <div className="flex flex-col gap-4">
          {PERSONAL_PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.07}>
              <article className="relative flex gap-4 sm:gap-5 items-start rounded-[12px] bg-[#0f0e1a] p-5 sm:p-6 transition-colors hover:border-[rgba(103,100,242,0.25)]">
                <div
                  aria-hidden
                  className="absolute border border-[rgba(103,100,242,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]"
                />
                <div
                  className={`rounded-[8px] size-10 flex items-center justify-center shrink-0 overflow-hidden ${
                    project.iconFill
                      ? ""
                      : "bg-[rgba(103,100,242,0.1)]"
                  }`}
                >
                  <project.Icon
                    className="size-5"
                    strokeWidth={1.75}
                    color="#8276CA"
                  />
                </div>
                <div className="min-w-0 flex-1 flex flex-col gap-2">
                  <h3
                    className="font-semibold text-[16px] leading-[24px] text-[#c8c6f0]"
                    style={{
                      fontFamily: project.mono
                        ? "ui-monospace, Menlo, Monaco, monospace"
                        : "'Open Sans', sans-serif",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[#7b78a8] text-[14px] leading-[22px]"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <Tag key={t} label={t} />
                      ))}
                    </div>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start inline-flex items-center gap-2 py-1 text-[#8276ca] text-[14px] font-bold transition-colors hover:text-[#a89cf5]"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        <Github className="size-5" strokeWidth={2} />
                        Ir a github
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="skills"
      className={`${SECTION_PAD} py-24 w-full`}
    >
      <div className={SECTION_INNER}>
      <FadeIn>
        <SectionLabel>Conocimientos</SectionLabel>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
        {SKILLS.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.07} className="h-full">
            <div className="relative h-full bg-[#0f0e1a] rounded-[12px] p-[21px] hover:border-[rgba(103,100,242,0.3)] transition-colors">
              <div
                aria-hidden
                className="absolute border border-[rgba(103,100,242,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]"
              />
              <div className="flex items-center gap-[10px] mb-5">
                <div className="bg-[rgba(103,100,242,0.1)] rounded-[8px] size-8 flex items-center justify-center shrink-0">
                  <group.Icon />
                </div>
                <span
                  className="font-bold text-[14px] leading-[20px] text-[#f0eff8]"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontVariationSettings:
                      '"opsz" 14, "wdth" 100',
                  }}
                >
                  {group.category}
                </span>
              </div>
              <ul className="flex flex-col gap-[10px] pt-[0px]">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-2"
                  >
                    <div className="size-1 rounded-full bg-[rgba(103,100,242,0.5)] shrink-0 mt-[7px]" />
                    {item.sublabel ? (
                      <span
                        className="text-[#7b78a8] text-[12px] leading-[0]"
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <p className="leading-[16px] mb-0">
                          {item.label}
                        </p>
                        <p className="leading-[16px]">
                          {item.sublabel}
                        </p>
                      </span>
                    ) : (
                      <span
                        className="text-[12px] leading-[16px] text-[#7b78a8]"
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.website) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `Portfolio — mensaje de ${form.name}`,
            _template: "table",
            _captcha: "false",
          }),
        },
      );
      const data = (await response.json()) as {
        success?: string | boolean;
      };
      if (!response.ok || data.success === "false" || data.success === false) {
        throw new Error("send failed");
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-[rgba(15,14,26,0.6)] w-full py-24"
    >
      <div className={SECTION_PAD}>
        <div className={SECTION_INNER}>
          <FadeIn>
            <SectionLabel>Contacto</SectionLabel>
            <h2
              className="font-extrabold text-[36px] leading-[45px] text-[#f0eff8]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              ¿Tienes un proyecto en mente?
            </h2>
            <p
              className="text-[#7b78a8] text-[16px] leading-[26px] mt-4 mb-10"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Siempre estoy abierto a nuevas oportunidades,
              colaboraciones o simplemente una buena
              conversación sobre tecnología. Escríbeme y te
              respondo en menos de 24 h.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            {status !== "sent" ? (
              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      key: "name" as const,
                      label: "Nombre",
                      placeholder: "Tu nombre",
                      type: "text",
                    },
                    {
                      key: "email" as const,
                      label: "Email",
                      placeholder: "tu@email.com",
                      type: "email",
                    },
                  ].map(({ key, label, placeholder, type }) => (
                    <div
                      key={key}
                      className="flex flex-col gap-1.5"
                    >
                      <label
                        className="text-[12px] text-[#7b78a8]"
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        {label}
                      </label>
                      <input
                        required
                        type={type}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            [key]: e.target.value,
                          })
                        }
                        disabled={status === "sending"}
                        className="w-full h-[46px] px-[17px] py-[13px] rounded-[8px] bg-[#1a1828] text-[#f0eff8] text-[14px] placeholder:text-[rgba(123,120,168,0.5)] outline-none border border-[rgba(103,100,242,0.15)] focus:border-[rgba(103,100,242,0.5)] transition-colors disabled:opacity-60"
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[12px] text-[#7b78a8]"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                    }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    disabled={status === "sending"}
                    className="w-full px-[17px] py-[13px] rounded-[8px] bg-[#1a1828] text-[#f0eff8] text-[14px] placeholder:text-[rgba(123,120,168,0.5)] outline-none border border-[rgba(103,100,242,0.15)] focus:border-[rgba(103,100,242,0.5)] transition-colors resize-none disabled:opacity-60"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-[8px] bg-[#6764f2] text-white font-semibold text-[14px] transition-all hover:bg-[#5553d4] hover:shadow-[0_0_30px_rgba(103,100,242,0.4)] disabled:opacity-60 disabled:hover:bg-[#6764f2] disabled:hover:shadow-none"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  {status === "sending"
                    ? "Enviando..."
                    : "Enviar mensaje"}{" "}
                  <IconSend />
                </button>
                {status === "error" && (
                  <p
                    className="text-sm text-[#f07178]"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                    }}
                  >
                    No se pudo enviar. Probá de nuevo o escribime a{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="underline hover:text-[#f0eff8]"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}
              </form>
            ) : (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <div className="size-16 rounded-full bg-[rgba(103,100,242,0.15)] flex items-center justify-center">
                  <Send className="size-7 text-[#6764f2]" />
                </div>
                <h3
                  className="text-xl font-bold text-[#f0eff8]"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p
                  className="text-[#7b78a8] text-sm"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  Gracias por escribirme. Te respondo pronto.
                </p>
              </div>
            )}
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative flex items-center gap-5 mt-10 pt-[41px]">
              <div
                className="absolute border-[rgba(103,100,242,0.1)] border-t inset-0 pointer-events-none"
                aria-hidden
              />
              {[
                {
                  Icon: Github,
                  label: "GitHub",
                  href: SOCIAL.github,
                  external: true,
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: SOCIAL.linkedin,
                  external: true,
                },
                {
                  Icon: Mail,
                  label: "Email",
                  href: `mailto:${SOCIAL.email}`,
                  external: false,
                },
              ].map(({ Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-2 text-[#7b78a8] text-[14px] hover:text-[#6764f2] transition-colors"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Pages ──────────────────────────────────────────────────────────── */

function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <OtherProjectsSection />
      <PersonalProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}

/* ─── Router ─────────────────────────────────────────────────────────── */

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ index: true, Component: HomePage }],
  },
]);

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <Splash onDone={() => setSplashDone(true)} />}
      <RouterProvider router={router} />
    </>
  );
}