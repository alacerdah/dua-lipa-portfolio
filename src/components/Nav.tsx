import { useState } from "react";
import type { NavLink } from "../types";

const SOCIALS = ["IG", "TT", "PI"];

export default function Nav({ brandInitials, links }: { brandInitials: string; links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute inset-x-0 top-0 z-30">
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-10">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-xs font-bold tracking-[0.1em] text-paper uppercase">UGC Creator</span>
          <div className="hidden gap-2 sm:flex">
            {SOCIALS.map((s) => (
              <span
                key={s}
                className="flex size-[26px] items-center justify-center rounded-full border-[1.5px] border-paper text-[9px] font-bold text-paper"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hidden text-sm font-semibold text-paper transition hover:opacity-70 sm:inline">
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-paper text-base text-paper sm:hidden"
          >
            {open ? "✕" : "☰"}
          </button>

          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-paper text-sm font-bold text-ink">
            {brandInitials}
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-6 flex flex-col gap-1 rounded-2xl bg-ink/95 p-3 sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-paper transition hover:bg-paper/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
