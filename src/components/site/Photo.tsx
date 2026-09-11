import type { CSSProperties } from "react";

type Props = {
  /** Describes the real photo that belongs here, e.g. "[PHOTO: seat before/after]". */
  label: string;
  /** When provided, renders the actual photo instead of a labelled placeholder. */
  src?: string | undefined;
  tone?: "light" | "dark" | "darker";
  className?: string;
  style?: CSSProperties | undefined;
  labelStyle?: CSSProperties | undefined;
};

/** Labelled placeholder until M BROS uploads real photos of their work. */
export function Photo({ label, src, tone = "light", className = "", style, labelStyle }: Props) {
  const text = label.replace(/^\[PHOTO:\s*/i, "").replace(/\]$/, "");
  if (src) {
    return (
      <div className={`photo ${className}`} style={style}>
        <img
          src={src}
          alt={text}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }
  const toneClass =
    tone === "light" ? "" : tone === "dark" ? "photo-dark" : "photo-dark photo-darker";
  return (
    <div role="img" aria-label={text} className={`photo ${toneClass} ${className}`} style={style}>
      <span className="photo-label" style={labelStyle}>
        Photo: {text}
      </span>
    </div>
  );
}
