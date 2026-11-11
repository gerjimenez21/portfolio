import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  Button,
  ExperienceCard,
  Field,
  NavLink,
  ProjectCard,
  ProjectRow,
  SectionLabel,
  SkillCard,
  SocialLink,
  Status,
  Tag,
  Textarea,
  Timeline,
  type ButtonVariant,
} from "@/design-system/ui";
import {
  color,
  colorRole,
  fontSans,
  radius,
  space,
  typeScale,
} from "@/design-system/tokens";

const nav = [
  {
    group: "Fundamentos",
    items: [
      { id: "color", label: "Color" },
      { id: "tipo", label: "Tipografía" },
      { id: "espacio", label: "Espacio y radio" },
    ],
  },
  {
    group: "Componentes",
    items: [
      { id: "button", label: "Button" },
      { id: "tag", label: "Tag" },
      { id: "section", label: "Section label" },
      { id: "nav", label: "Nav link" },
      { id: "status", label: "Status" },
      { id: "field", label: "Field" },
      { id: "textarea", label: "Textarea" },
      { id: "experience", label: "Experience card" },
      { id: "timeline", label: "Timeline" },
      { id: "project", label: "Project card" },
      { id: "skill", label: "Skill card" },
      { id: "row", label: "Project row" },
      { id: "social", label: "Social link" },
    ],
  },
] as const;

type StoryId = (typeof nav)[number]["items"][number]["id"];

const stories: Record<StoryId, { title: string; note: string }> = {
  color: {
    title: "Color",
    note: "La paleta de la home. El acento es #6764f2 y el fondo es #09090f. El resto existe para jerarquía, no para decorar.",
  },
  tipo: {
    title: "Tipografía",
    note: "Una sola familia: Open Sans. El peso y el tracking hacen el trabajo de la jerarquía.",
  },
  espacio: {
    title: "Espacio y radio",
    note: "El radio sigue la altura de la pieza: 4 en tags, 8 en botones e inputs, 12 en cards, 16 en la foto.",
  },
  button: {
    title: "Button",
    note: "Primary para la acción de la sección. Outline para contactar desde el nav. Ghost para salir hacia GitHub.",
  },
  tag: {
    title: "Tag",
    note: "Skills y herramientas. Siempre lavanda sobre un velo del acento, nunca un color nuevo.",
  },
  section: {
    title: "Section label",
    note: "Abre cada bloque de la home. Tracking amplio y una línea que llega al borde del contenedor.",
  },
  nav: {
    title: "Nav link",
    note: "El ítem del menú. En reposo es #8f86d4. Al pasar el mouse, o si está activo, pasa a texto principal.",
  },
  status: {
    title: "Status",
    note: "El punto verde del hero. Un solo uso: disponibilidad.",
  },
  field: {
    title: "Field",
    note: "Campo del formulario de contacto. Fondo #1a1828, borde del acento al 15%, foco al 50%.",
  },
  textarea: {
    title: "Textarea",
    note: "El mismo campo, más alto. El texto no se redimensiona a mano.",
  },
  experience: {
    title: "Experience card",
    note: "Fila de trabajo. Tocá la card para abrir el resumen y los tags.",
  },
  timeline: {
    title: "Timeline",
    note: "Los hitos dentro de un trabajo. Punto y línea del acento, título en blanco y el texto en muted. El último punto no lleva línea.",
  },
  project: {
    title: "Project card",
    note: "Proyecto personal. Ícono, título, descripción, tags y, si hay repo, el link ghost.",
  },
  skill: {
    title: "Skill card",
    note: "Columna de conocimientos. Título en blanco y ítems en muted, con un punto del acento.",
  },
  row: {
    title: "Project row",
    note: "La lista corta de otros proyectos. Título lavanda, meta en #3d3a5c.",
  },
  social: {
    title: "Social link",
    note: "GitHub, LinkedIn y mail, debajo del formulario. Hover al acento.",
  },
};

function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[12px] border border-[rgba(103,100,242,0.15)] bg-[#0f0e1a] p-6 sm:p-8">
      {children}
    </div>
  );
}

function Control({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2 text-[12px] text-[#7b78a8]">
      {label}
      {children}
    </label>
  );
}

const controlClass =
  "h-10 rounded-[8px] border border-[rgba(103,100,242,0.3)] bg-[#09090f] px-3 text-[14px] text-[#f0eff8] outline-none focus:border-[rgba(103,100,242,0.5)]";

export function SistemaPage() {
  const [active, setActive] = useState<StoryId>("button");
  const [variant, setVariant] = useState<ButtonVariant>("primary");
  const [buttonLabel, setButtonLabel] = useState("Hablemos");
  const [disabled, setDisabled] = useState(false);
  const [tagLabel, setTagLabel] = useState("Figma");
  const [section, setSection] = useState("Experiencia");
  const [navLabel, setNavLabel] = useState("Experiencia");
  const [navActive, setNavActive] = useState(false);
  const [statusLabel, setStatusLabel] = useState("Disponible para proyectos");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(0);
  const [timelineTitle, setTimelineTitle] = useState("Timetracker");

  const story = stories[active];

  return (
    <div
      className="min-h-screen bg-[#09090f] text-[#f0eff8] lg:flex"
      style={{ fontFamily: fontSans }}
    >
      <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-60 lg:shrink-0 lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-[rgba(103,100,242,0.15)] px-5 py-6">
        <a href="/" className="text-[12px] tracking-[2.4px] text-[#8276ca]">
          UXGER
        </a>
        <p className="mt-2 text-[20px] font-extrabold tracking-[-0.4px]">
          Sistema
        </p>
        <p className="mt-1 text-[12px] leading-4 text-[#7b78a8]">
          Sandbox de la home. No está en el menú público.
        </p>
        <nav className="mt-6 flex flex-col gap-5" aria-label="Sistema">
          {nav.map((group) => (
            <div key={group.group}>
              <p className="mb-2 text-[11px] tracking-[2px] uppercase text-[#3d3a5c]">
                {group.group}
              </p>
              <ul className="flex flex-col">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActive(item.id)}
                      className={`w-full rounded-[8px] px-2 py-1.5 text-left text-[14px] transition-colors ${
                        active === item.id
                          ? "bg-[rgba(103,100,242,0.12)] text-[#f0eff8]"
                          : "text-[#8f86d4] hover:text-[#f0eff8]"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main className="min-w-0 flex-1 px-5 py-8 sm:px-10 lg:px-14 lg:py-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <header>
            <h1 className="text-[36px] font-extrabold leading-tight">
              {story.title}
            </h1>
            <p className="mt-3 max-w-2xl text-[16px] leading-[26px] text-[#7b78a8]">
              {story.note}
            </p>
          </header>

          {active === "color" && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {colorRole.map((swatch) => (
                <div key={swatch.token} className="flex flex-col gap-2">
                  <div
                    className="h-16 rounded-[8px] border border-[rgba(103,100,242,0.2)]"
                    style={{ background: swatch.value }}
                  />
                  <p className="text-[13px] font-semibold">{swatch.name}</p>
                  <p className="text-[12px] text-[#7b78a8]">
                    {swatch.value} · {swatch.use}
                  </p>
                </div>
              ))}
            </div>
          )}

          {active === "tipo" && (
            <div className="flex flex-col gap-8">
              {typeScale.map((step) => (
                <div
                  key={step.name}
                  className="border-t border-[rgba(103,100,242,0.12)] pt-5"
                >
                  <p className="mb-3 text-[12px] text-[#7b78a8]">
                    {step.name} · {step.size}px / {step.weight}
                    {step.tracking ? ` / ${step.tracking}` : ""}
                  </p>
                  <p
                    style={{
                      fontSize: step.size,
                      fontWeight: step.weight,
                      letterSpacing: step.tracking,
                      lineHeight: step.leading,
                      color: step.color,
                    }}
                  >
                    {step.sample}
                  </p>
                </div>
              ))}
            </div>
          )}

          {active === "espacio" && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                {space.map((value) => (
                  <div key={value} className="flex items-center gap-4">
                    <span className="w-10 text-[12px] text-[#7b78a8]">
                      {value}
                    </span>
                    <span
                      className="h-2 rounded-full bg-[#6764f2]"
                      style={{ width: value * 4 }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {radius.map((item) => (
                  <div key={item.name} className="flex flex-col gap-2">
                    <div
                      className="size-20 border border-[rgba(103,100,242,0.4)] bg-[rgba(103,100,242,0.12)]"
                      style={{ borderRadius: item.value }}
                    />
                    <p className="text-[13px] font-semibold">
                      {item.name} · {item.value}px
                    </p>
                    <p className="text-[12px] text-[#7b78a8]">{item.use}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === "button" && (
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <Stage>
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant={variant}
                    disabled={disabled}
                    onClick={() => setClicked((value) => value + 1)}
                  >
                    {variant === "ghost" && (
                      <Github className="size-5" strokeWidth={2} />
                    )}
                    {buttonLabel}
                  </Button>
                  <span className="text-[13px] text-[#7b78a8]">
                    Clicks: {clicked}
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 border-t border-[rgba(103,100,242,0.12)] pt-6">
                  <Button variant="primary">Hablemos</Button>
                  <Button variant="outline">
                    <Mail className="size-3" />
                    Contactar
                  </Button>
                  <Button variant="ghost">
                    <Github className="size-5" />
                    Ir a github
                  </Button>
                </div>
              </Stage>
              <div className="flex flex-col gap-4">
                <Control label="Variante">
                  <select
                    className={controlClass}
                    value={variant}
                    onChange={(event) =>
                      setVariant(event.target.value as ButtonVariant)
                    }
                  >
                    <option value="primary">Primary</option>
                    <option value="outline">Outline</option>
                    <option value="ghost">Ghost</option>
                  </select>
                </Control>
                <Control label="Texto">
                  <input
                    className={controlClass}
                    value={buttonLabel}
                    onChange={(event) => setButtonLabel(event.target.value)}
                  />
                </Control>
                <label className="flex items-center gap-2 text-[14px] text-[#bbb5df]">
                  <input
                    type="checkbox"
                    checked={disabled}
                    onChange={(event) => setDisabled(event.target.checked)}
                  />
                  Deshabilitado
                </label>
              </div>
            </div>
          )}

          {active === "tag" && (
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <Stage>
                <div className="flex flex-wrap gap-2">
                  <Tag label={tagLabel || "Tag"} />
                  {["Claude", "Cursor", "MCP"].map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </Stage>
              <Control label="Texto">
                <input
                  className={controlClass}
                  value={tagLabel}
                  onChange={(event) => setTagLabel(event.target.value)}
                />
              </Control>
            </div>
          )}

          {active === "section" && (
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <Stage>
                <SectionLabel className="mb-0">{section || "Sección"}</SectionLabel>
              </Stage>
              <Control label="Texto">
                <input
                  className={controlClass}
                  value={section}
                  onChange={(event) => setSection(event.target.value)}
                />
              </Control>
            </div>
          )}

          {active === "nav" && (
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <Stage>
                <div className="flex flex-wrap gap-4">
                  <NavLink active={navActive}>{navLabel || "Link"}</NavLink>
                  <NavLink>Proyectos</NavLink>
                  <NavLink>Skills</NavLink>
                </div>
              </Stage>
              <div className="flex flex-col gap-4">
                <Control label="Texto">
                  <input
                    className={controlClass}
                    value={navLabel}
                    onChange={(event) => setNavLabel(event.target.value)}
                  />
                </Control>
                <label className="flex items-center gap-2 text-[14px] text-[#bbb5df]">
                  <input
                    type="checkbox"
                    checked={navActive}
                    onChange={(event) => setNavActive(event.target.checked)}
                  />
                  Activo
                </label>
              </div>
            </div>
          )}

          {active === "status" && (
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <Stage>
                <Status>{statusLabel || "Estado"}</Status>
              </Stage>
              <Control label="Texto">
                <input
                  className={controlClass}
                  value={statusLabel}
                  onChange={(event) => setStatusLabel(event.target.value)}
                />
              </Control>
            </div>
          )}

          {active === "field" && (
            <Stage>
              <div className="max-w-sm">
                <Field
                  label="Nombre"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={setName}
                />
              </div>
              <p className="mt-4 text-[13px] text-[#7b78a8]">
                Valor: {name || "vacío"}
              </p>
            </Stage>
          )}

          {active === "textarea" && (
            <Stage>
              <div className="max-w-lg">
                <Textarea
                  label="Mensaje"
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={message}
                  onChange={setMessage}
                />
              </div>
            </Stage>
          )}

          {active === "experience" && (
            <Stage>
              <ExperienceCard
                company="Humand Technologies"
                role="Product Designer"
                period="Nov 2023 — Presente"
                location="Remote"
                summary="Diseño de producto con foco en problemas complejos. Ahora, un buscador unificado para la plataforma."
                tags={["Figma", "Claude", "Cursor", "UI Design"]}
              />
            </Stage>
          )}

          {active === "timeline" && (
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <Stage>
                <Timeline
                  items={[
                    {
                      title: timelineTitle || "Hito",
                      body: "Diseño de Shift Management: control horario, time tracker, kiosk, horarios laborales, regiones y sedes, y políticas de control horario.",
                    },
                    {
                      title: "Universal Search",
                      body: "Diseño del buscador unificado.",
                    },
                    {
                      title: "Celebraciones y Automations",
                      body: "Diseño de la miniapp de celebraciones y del módulo de Automations.",
                    },
                  ]}
                />
              </Stage>
              <Control label="Primer hito">
                <input
                  className={controlClass}
                  value={timelineTitle}
                  onChange={(event) => setTimelineTitle(event.target.value)}
                />
              </Control>
            </div>
          )}

          {active === "project" && (
            <Stage>
              <ProjectCard
                title="figma-handoff"
                mono
                description="Skill para documentar decisiones de diseño sobre el canvas de Figma."
                tags={["Figma", "MCP", "Notion"]}
                href="https://github.com/gerjimenez21/figma-handoff"
              />
            </Stage>
          )}

          {active === "skill" && (
            <Stage>
              <div className="max-w-xs">
                <SkillCard
                  title="AI"
                  items={["Claude", "MCP", "Creación de Agentes", "Creación de Skills"]}
                />
              </div>
            </Stage>
          )}

          {active === "row" && (
            <Stage>
              <ProjectRow title="Solitaire Home Story" meta="Product Design · Mobile" />
              <ProjectRow title="Billboard" meta="Product Design · Mobile & Web" />
              <ProjectRow title="Habitium" meta="Digital design · Web" />
            </Stage>
          )}

          {active === "social" && (
            <Stage>
              <div className="flex flex-wrap gap-5">
                <SocialLink href="https://github.com/gerjimenez21" icon={<Github className="size-4" />}>
                  GitHub
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/gjjimenez/" icon={<Linkedin className="size-4" />}>
                  LinkedIn
                </SocialLink>
                <SocialLink href="mailto:indiarte@gmail.com" icon={<Mail className="size-4" />}>
                  Email
                </SocialLink>
              </div>
            </Stage>
          )}

          <p className="text-[12px] text-[#3d3a5c]">
            Acento {color.accent} · Fondo {color.bg}
          </p>
        </div>
      </main>
    </div>
  );
}
