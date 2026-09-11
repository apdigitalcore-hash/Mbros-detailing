import type { ReactNode } from "react";

type SectionProps = {
  tone?: "light" | "tint" | "dark";
  className?: string;
  children: ReactNode;
  id?: string;
  labelledBy?: string;
};

const toneClass = { light: "section-light", tint: "section-tint", dark: "section-dark" };

export function Section({
  tone = "light",
  className = "",
  children,
  id,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${toneClass[tone]} py-16 md:py-24 ${className}`}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

type HeadProps = {
  title: ReactNode;
  id?: string | undefined;
  children?: ReactNode;
  className?: string;
};

/** Section heading with an optional short intro underneath. */
export function SectionHead({ title, id, children, className = "" }: HeadProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 id={id} className="h2">
        {title}
      </h2>
      {children ? <div className="muted mt-4 text-lg">{children}</div> : null}
    </div>
  );
}
