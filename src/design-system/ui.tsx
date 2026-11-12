import { useState, type ReactNode } from "react";
import { ChevronDown, Github } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { fontSans } from "@/design-system/tokens";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4c2ff]";

const buttonStyles = {
  primary:
    "inline-flex items-center gap-2 px-6 py-3 rounded-[8px] bg-[#6764f2] text-white font-semibold text-[14px] transition-all hover:bg-[#5553d4] hover:shadow-[0_0_30px_rgba(103,100,242,0.4)] disabled:opacity-60 disabled:hover:bg-[#6764f2] disabled:hover:shadow-none",
  outline:
    "inline-flex items-center justify-center gap-1.5 px-[17px] py-[9px] rounded-[8px] border border-[rgba(103,100,242,0.3)] text-[#bbb5df] text-[14px] font-semibold leading-5 transition-colors hover:bg-[rgba(103,100,242,0.08)] hover:border-[rgba(103,100,242,0.5)] hover:text-white disabled:opacity-60",
  ghost:
    "inline-flex items-center gap-2 py-1 text-[#8276ca] text-[14px] font-bold transition-colors hover:text-[#a89cf5] disabled:opacity-60",
} as const;

export type ButtonVariant = keyof typeof buttonStyles;

type ButtonCommon = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonCommon & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonAsLink = ButtonCommon & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className, children } = props;
  const classNames = cn(buttonStyles[variant], focus, className);

  if (props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        className={classNames}
        style={{ fontFamily: fontSans }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={classNames}
      style={{ fontFamily: fontSans }}
    >
      {children}
    </button>
  );
}

export function Tag({ label }: { label: string }) {
  return (
    <span
      className="text-[14px] tracking-[0.275px] px-[11px] py-[5px] rounded-[4px] border border-[rgba(103,100,242,0.3)] text-[#BBB5DF] bg-[rgba(103,100,242,0.05)]"
      style={{ fontFamily: fontSans }}
    >
      {label}
    </span>
  );
}

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 mb-12", className)}>
      <span
        className="text-[#8276ca] text-[16px] tracking-[2.4px] whitespace-nowrap"
        style={{ fontFamily: fontSans }}
      >
        {children}
      </span>
      <span className="flex-1 h-px bg-[rgba(103,100,242,0.2)]" />
    </div>
  );
}

export function NavLink({
  children,
  href = "#",
  active = false,
}: {
  children: ReactNode;
  href?: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center text-[14px] font-semibold tracking-[0.3px] rounded-sm transition-colors hover:text-[#f0eff8]",
        focus,
        active ? "text-[#f0eff8]" : "text-[#8f86d4]",
      )}
      style={{ fontFamily: fontSans }}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </a>
  );
}

export function Status({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="size-2 rounded-full bg-[#4df150]" />
      <span
        className="text-[#7b78a8] text-[16px] tracking-[1.2px]"
        style={{ fontFamily: fontSans }}
      >
        {children}
      </span>
    </div>
  );
}

const fieldControl =
  "w-full rounded-[8px] bg-[#1a1828] text-[#f0eff8] text-[14px] placeholder:text-[rgba(123,120,168,0.5)] outline-none border border-[rgba(103,100,242,0.15)] focus:border-[rgba(103,100,242,0.5)] transition-colors disabled:opacity-60";

export function Field({
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  disabled = false,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  type?: string;
  disabled?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-[12px] text-[#7b78a8]"
        style={{ fontFamily: fontSans }}
      >
        {label}
      </span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.value)}
        className={cn(fieldControl, "h-[46px] px-[17px]")}
        style={{ fontFamily: fontSans }}
      />
    </label>
  );
}

export function Textarea({
  label,
  value,
  placeholder,
  onChange,
  disabled = false,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-[12px] text-[#7b78a8]"
        style={{ fontFamily: fontSans }}
      >
        {label}
      </span>
      <textarea
        rows={5}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.value)}
        className={cn(fieldControl, "px-[17px] py-[13px] resize-none")}
        style={{ fontFamily: fontSans }}
      />
    </label>
  );
}

export function SocialLink({
  icon,
  children,
  href = "#",
}: {
  icon: ReactNode;
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-[#7b78a8] text-[14px] hover:text-[#6764f2] transition-colors",
        focus,
      )}
      style={{ fontFamily: fontSans }}
    >
      {icon}
      {children}
    </a>
  );
}

export type TimelineItem = {
  title: string;
  body: string;
  period?: string;
};

export function TimelineGroups({
  groups,
}: {
  groups: TimelineItem[][];
}) {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((group, groupIndex) => (
        <ol
          key={groupIndex}
          className="rounded-[8px] bg-[#151529] px-4 py-4"
        >
          {group.map((item, index) => {
            const isLast = index === group.length - 1;
            return (
              <li
                key={`${item.title}-${index}`}
                className="grid grid-cols-[16px_1fr] gap-x-4"
              >
                <div className="relative self-stretch">
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-4 w-px -translate-x-1/2 bg-[rgba(103,100,242,0.35)]"
                      style={{ height: "calc(100% - 6px)" }}
                    />
                  )}
                  <span className="absolute left-1/2 top-2 size-2 -translate-x-1/2 rounded-full bg-[#6764f2]" />
                </div>
                <div className={isLast ? undefined : "pb-6"}>
                  <h4
                    className="font-bold text-[16px] leading-6 text-[#f0eff8]"
                    style={{ fontFamily: fontSans }}
                  >
                    {item.title}
                  </h4>
                  {item.period ? (
                    <p
                      className="mt-1 text-[14px] italic leading-[18px] text-[#7b78a8]"
                      style={{ fontFamily: fontSans }}
                    >
                      {item.period}
                    </p>
                  ) : null}
                  <p
                    className="mt-2 text-[#7b78a8] text-[14px] leading-[22.75px]"
                    style={{ fontFamily: fontSans }}
                  >
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      ))}
    </div>
  );
}

export function Timeline({
  items,
}: {
  items: TimelineItem[];
}) {
  return (
    <ol className="flex flex-col">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li
            key={`${item.title}-${index}`}
            className="grid grid-cols-[16px_1fr] gap-x-4"
          >
            <div className="relative self-stretch">
              {!isLast && (
                <span
                  aria-hidden
                  className="absolute left-1/2 top-[29px] w-px -translate-x-1/2 bg-[rgba(103,100,242,0.35)]"
                  style={{ height: "calc(100% - 4px)" }}
                />
              )}
              <span className="absolute left-1/2 top-[23px] size-2 -translate-x-1/2 rounded-full bg-[#6764f2]" />
            </div>
            <div className={isLast ? undefined : "pb-4"}>
              <div className="flex flex-col gap-2 rounded-[8px] bg-[#151529] p-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h4
                    className="font-bold text-[16px] leading-6 text-[#f0eff8]"
                    style={{ fontFamily: fontSans }}
                  >
                    {item.title}
                  </h4>
                  {item.period ? (
                    <span
                      className="shrink-0 text-[14px] leading-[18px] text-[#7b78a8]"
                      style={{ fontFamily: fontSans }}
                    >
                      {item.period}
                    </span>
                  ) : null}
                </div>
                <p
                  className="text-[#7b78a8] text-[14px] leading-[22.75px]"
                  style={{ fontFamily: fontSans }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function ExperienceCard({
  company,
  role,
  period,
  location,
  summary,
  tags,
}: {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="border border-[rgba(103,100,242,0.1)] rounded-[12px] bg-[#0f0e1a] px-5 py-4 transition-colors hover:border-[rgba(103,100,242,0.25)]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="w-full text-left"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 min-w-0">
            <div className="size-12 shrink-0 rounded-[10px] border border-[rgba(103,100,242,0.14)] bg-[#09090f] flex items-center justify-center text-[#8276ca] font-bold text-[14px]">
              {company.slice(0, 1)}
            </div>
            <div className="min-w-0">
              <p
                className="font-bold text-[16px] leading-7 text-[#f0eff8]"
                style={{ fontFamily: fontSans }}
              >
                {company}
              </p>
              <p
                className="font-semibold text-[14px] leading-5 text-[#8276ca]"
                style={{ fontFamily: fontSans }}
              >
                {role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-start sm:items-end gap-1">
              <span
                className="text-[14px] leading-[18px] text-[#7b78a8]"
                style={{ fontFamily: fontSans }}
              >
                {period}
              </span>
              <span
                className="text-[14px] leading-[18px] text-[#7b78a8]"
                style={{ fontFamily: fontSans }}
              >
                {location}
              </span>
            </div>
            <ChevronDown
              className={cn(
                "size-6 shrink-0 text-[#6764f2] transition-transform",
                open && "rotate-180",
              )}
            />
          </div>
        </div>
      </button>
      {open && (
        <div className="flex flex-col gap-4 pt-4">
          <p
            className="text-[#7b78a8] text-[14px] leading-[22.75px]"
            style={{ fontFamily: fontSans }}
          >
            {summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  mono = false,
}: {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  mono?: boolean;
}) {
  return (
    <article className="relative flex gap-4 items-start rounded-[12px] bg-[#0f0e1a] p-5 sm:p-6">
      <div
        aria-hidden
        className="absolute border border-[rgba(103,100,242,0.1)] inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="rounded-[8px] size-10 flex items-center justify-center shrink-0 bg-[rgba(103,100,242,0.1)] text-[#8276ca]">
        <Github className="size-5" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1 flex flex-col gap-2">
        <h3
          className="font-semibold text-[16px] leading-[24px] text-[#c8c6f0]"
          style={{
            fontFamily: mono
              ? "ui-monospace, Menlo, Monaco, monospace"
              : fontSans,
          }}
        >
          {title}
        </h3>
        <p
          className="text-[#7b78a8] text-[14px] leading-[22px]"
          style={{ fontFamily: fontSans }}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        {href ? (
          <Button variant="ghost" href={href} className="self-start">
            <Github className="size-5" strokeWidth={2} />
            Ir a github
          </Button>
        ) : null}
      </div>
    </article>
  );
}

export function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="relative h-full bg-[#0f0e1a] rounded-[12px] p-[21px]">
      <div
        aria-hidden
        className="absolute border border-[rgba(103,100,242,0.1)] inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex items-center gap-[10px] mb-5">
        <div className="bg-[rgba(103,100,242,0.1)] rounded-[8px] size-8" />
        <span
          className="font-bold text-[14px] leading-[20px] text-[#f0eff8]"
          style={{ fontFamily: fontSans }}
        >
          {title}
        </span>
      </div>
      <ul className="flex flex-col gap-[10px]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="size-1 rounded-full bg-[rgba(103,100,242,0.5)] shrink-0 mt-[7px]" />
            <span
              className="text-[12px] leading-[16px] text-[#7b78a8]"
              style={{ fontFamily: fontSans }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectRow({
  title,
  meta,
}: {
  title: string;
  meta: string;
}) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-[rgba(103,100,242,0.08)] last:border-b-0">
      <div className="size-16 shrink-0 rounded-[9px] bg-[rgba(103,100,242,0.12)]" />
      <div>
        <p
          className="font-semibold leading-[21px] text-[#bbb5df] text-[14px]"
          style={{ fontFamily: fontSans }}
        >
          {title}
        </p>
        <p
          className="font-normal leading-[16.5px] text-[#3d3a5c] text-[11px]"
          style={{ fontFamily: fontSans }}
        >
          {meta}
        </p>
      </div>
    </div>
  );
}
