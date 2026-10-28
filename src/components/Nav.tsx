import type { NavLink } from "../types";

const SOCIALS = ["IG", "TT", "PI"];

export default function Nav({ brandInitials, links }: { brandInitials: string; links: NavLink[] }) {
  return (
    <div className="absolute inset-x-0 top-0 z-30 flex flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-10">
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

      <div className="flex flex-wrap items-center gap-5">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hidden text-sm font-semibold text-paper transition hover:opacity-70 sm:inline">
            {link.label}
          </a>
        ))}
        <div className="flex size-10 items-center justify-center rounded-full bg-paper text-sm font-bold text-ink">
          {brandInitials}
        </div>
      </div>
    </div>
  );
}
