export const fontSans = "'Open Sans', sans-serif";

export const color = {
  bg: "#09090f",
  surface: "#0f0e1a",
  input: "#1a1828",
  fg: "#f0eff8",
  fgSoft: "#c8c6f0",
  lavender: "#BBB5DF",
  muted: "#7b78a8",
  nav: "#8f86d4",
  label: "#8276ca",
  dim: "#3d3a5c",
  accent: "#6764f2",
  accentHover: "#5553d4",
  available: "#4df150",
  danger: "#f07178",
  focus: "#c4c2ff",
  white: "#ffffff",
} as const;

export const colorRole: { name: string; token: string; value: string; use: string }[] = [
  { name: "Fondo", token: "color-bg", value: color.bg, use: "Página" },
  { name: "Superficie", token: "color-surface", value: color.surface, use: "Cards" },
  { name: "Input", token: "color-input", value: color.input, use: "Campos" },
  { name: "Texto", token: "color-fg", value: color.fg, use: "Títulos" },
  { name: "Texto suave", token: "color-fg-soft", value: color.fgSoft, use: "Títulos de proyecto" },
  { name: "Lavanda", token: "color-lavender", value: color.lavender, use: "Tags y outline" },
  { name: "Muted", token: "color-muted", value: color.muted, use: "Cuerpo" },
  { name: "Nav", token: "color-nav", value: color.nav, use: "Links del menú" },
  { name: "Label", token: "color-label", value: color.label, use: "Etiquetas de sección" },
  { name: "Tenue", token: "color-dim", value: color.dim, use: "Meta secundaria" },
  { name: "Acento", token: "color-accent", value: color.accent, use: "Acción principal" },
  { name: "Acento hover", token: "color-accent-hover", value: color.accentHover, use: "Hover del botón" },
  { name: "Disponible", token: "color-available", value: color.available, use: "Estado" },
  { name: "Peligro", token: "color-danger", value: color.danger, use: "Error de formulario" },
  { name: "Foco", token: "color-focus", value: color.focus, use: "Anillo de foco" },
];

export const typeScale: {
  name: string;
  size: number;
  weight: number;
  tracking?: string;
  leading: string;
  sample: string;
  color: string;
}[] = [
  {
    name: "Display",
    size: 64,
    weight: 800,
    tracking: "-1.6px",
    leading: "0.95",
    sample: "Sobre mí",
    color: color.fg,
  },
  {
    name: "Título",
    size: 36,
    weight: 800,
    leading: "1.25",
    sample: "¿Tienes un proyecto en mente?",
    color: color.fg,
  },
  {
    name: "Lead",
    size: 18,
    weight: 400,
    leading: "1.66",
    sample: "Diseñador de producto. UX, sistemas e inteligencia artificial.",
    color: color.muted,
  },
  {
    name: "Cuerpo",
    size: 16,
    weight: 400,
    leading: "1.62",
    sample: "Texto de sección y descripciones largas.",
    color: color.muted,
  },
  {
    name: "UI",
    size: 14,
    weight: 600,
    tracking: "0.3px",
    leading: "1.4",
    sample: "Botones, links y títulos de card",
    color: color.fg,
  },
  {
    name: "Etiqueta",
    size: 16,
    weight: 400,
    tracking: "2.4px",
    leading: "1.2",
    sample: "EXPERIENCIA",
    color: color.label,
  },
  {
    name: "Caption",
    size: 12,
    weight: 400,
    leading: "1.33",
    sample: "Labels de campo, footer, listas",
    color: color.muted,
  },
  {
    name: "Micro",
    size: 11,
    weight: 400,
    tracking: "2px",
    leading: "1.5",
    sample: "OTROS PROYECTOS",
    color: color.muted,
  },
];

export const space = [4, 8, 12, 16, 20, 24, 32, 40] as const;

export const radius = [
  { name: "xs", value: 4, use: "Tags" },
  { name: "sm", value: 8, use: "Botones, inputs, iconos" },
  { name: "md", value: 10, use: "Logo de experiencia" },
  { name: "lg", value: 12, use: "Cards" },
  { name: "xl", value: 16, use: "Foto del hero" },
] as const;
