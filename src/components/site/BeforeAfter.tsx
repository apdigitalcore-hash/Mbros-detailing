import { useId, useState } from "react";
import { Photo } from "./Photo";

type Props = {
  before: string;
  after: string;
  caption?: string | undefined;
  className?: string;
};

/** Drag (or arrow-key) slider comparing a before and after shot. */
export function BeforeAfter({ before, after, caption, className = "" }: Props) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <figure className={className}>
      <div className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-lg">
        <Photo
          label={after}
          tone="dark"
          className="absolute inset-0 !rounded-none"
          labelStyle={{ left: "54%", textAlign: "right" }}
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Photo
            label={before}
            tone="darker"
            className="absolute inset-0 !rounded-none"
            labelStyle={{ right: "54%" }}
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-medium text-paper">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 text-xs font-medium text-ink">
          After
        </span>

        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare before and after"
          className="peer absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-paper peer-focus-visible:w-1"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-[0_2px_8px_rgb(0_0_0/0.25)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path
                d="M7 4 2 9l5 5M11 4l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      {caption ? <figcaption className="small mt-3">{caption}</figcaption> : null}
    </figure>
  );
}
