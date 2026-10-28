import type { Stat, Tag } from "../types";

function CurveArrow({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="46"
      height="60"
      viewBox="0 0 46 60"
      aria-hidden="true"
      className={`absolute hidden opacity-80 sm:block ${flip ? "right-[-46px] bottom-[-18px] -scale-x-100" : "top-[-18px] left-[-46px]"}`}
    >
      <path d="M40 4C30 14 12 16 6 32" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M6 32L2 24M6 32L15 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Sobre({
  heading,
  text,
  photo,
  stats,
  niche,
}: {
  heading: string;
  text: string;
  photo?: string;
  stats: Stat[];
  niche: { heading: string; left: Tag[]; right: Tag[] };
}) {
  return (
    <section id="sobre" className="w-full">
      {/* bloco rosa — sobre mim */}
      <div className="reveal bg-pink px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-12">
          <div className="max-w-[420px] flex-1 basis-[340px]">
            {photo ? (
              <img
                src={photo}
                alt="Retrato da criadora"
                className="aspect-[4/5] w-full rounded-[14px] border-[5px] border-yellow object-cover transition-transform duration-300 hover:-translate-y-1.5"
              />
            ) : (
              <div
                className="flex aspect-[4/5] w-full items-center justify-center rounded-[14px] border-[5px] border-yellow p-5 text-center text-sm font-semibold text-[#7a3242] transition-transform duration-300 hover:-translate-y-1.5"
                style={{
                  background: "repeating-linear-gradient(45deg,#f6c9d1,#f6c9d1 16px,#eeb7c1 16px,#eeb7c1 32px)",
                }}
              >
                [FOTO: retrato tranquilo, close]
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1 basis-[420px] text-paper">
            <h2 className="mb-4 text-[clamp(34px,4.5vw,56px)] text-yellow">{heading}</h2>
            <p className="max-w-[540px] text-[17px] leading-relaxed">{text}</p>
          </div>
        </div>
      </div>

      {/* barra verde — stats, colada direto no bloco rosa */}
      <div className="grid grid-cols-2 bg-green sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-4 py-6 text-center ${i < stats.length - 1 ? "border-r border-ink/20" : ""}`}
          >
            <div className="font-display text-[clamp(24px,3vw,34px)] text-paper">{stat.number}</div>
            <div className="mt-1 text-xs font-semibold tracking-[0.05em] text-[#3a4a2e] uppercase">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* bloco creme — nichos & público */}
      <div className="reveal bg-cream px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-7">
          <div className="flex flex-1 basis-[220px] flex-col items-end gap-3">
            {niche.left.map((t) => (
              <span
                key={t.label}
                className="tag-pill rounded-full border-2 border-pink-deep bg-paper px-4.5 py-2 text-sm font-semibold text-pink-deep"
              >
                {t.label}
              </span>
            ))}
          </div>

          <div className="relative flex-none px-3 text-center">
            <CurveArrow />
            <h2 className="max-w-[320px] rotate-[-4deg] text-[clamp(26px,3.6vw,42px)] leading-snug text-pink-deep">
              {niche.heading}
            </h2>
            <CurveArrow flip />
          </div>

          <div className="flex flex-1 basis-[220px] flex-col items-start gap-3">
            {niche.right.map((t) => (
              <span
                key={t.label}
                className="tag-pill rounded-full border-2 border-pink-deep bg-paper px-4.5 py-2 text-sm font-semibold text-pink-deep"
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
