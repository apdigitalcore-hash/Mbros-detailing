import type { CSSProperties } from "react";

type Props = {
  /** Describes the real photo that belongs here, e.g. "[PHOTO: seat before/after]". */
  label: string;
  tone?: "light" | "dark" | "darker";
  className?: string;
  style?: CSSProperties | undefined;
  labelStyle?: CSSProperties | undefined;
};

/** Labelled placeholder until M BROS uploads real photos of their work. */
export function Photo({ label, tone = "light", className = "", style, labelStyle }: Props) {
  const toneClass =
    tone === "light" ? "" : tone === "dark" ? "photo-dark" : "photo-dark photo-darker";
  const text = label.replace(/^\[PHOTO:\s*/i, "").replace(/\]$/, "");
  return (
    <div role="img" aria-label={text} className={`photo ${toneClass} ${className}`} style={style}>
      <span className="photo-label" style={labelStyle}>
        Photo: {text}
      </span>
    </div>
  );
}
