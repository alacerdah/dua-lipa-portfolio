import type { PhotoItem } from "../types";

export default function Fotos({ items }: { items: PhotoItem[] }) {
  return (
    <section id="fotos" className="reveal w-full px-6 py-16 sm:px-10 sm:py-24">
      <h2 className="mb-8 text-center text-[clamp(28px,4vw,44px)] text-blue">Fotos</h2>
      <div className="mx-auto grid max-w-6xl auto-rows-[170px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {items.map((p) => (
          <div
            key={p.id}
            className="relative flex items-center justify-center overflow-hidden rounded-[14px] transition-transform duration-300 hover:-translate-y-1.5"
            style={{
              gridRow: p.tall ? "span 2" : "span 1",
              background: p.src ? undefined : "repeating-linear-gradient(45deg,#ECE4CE,#ECE4CE 14px,#E2D6B4 14px,#E2D6B4 28px)",
            }}
          >
            {p.src ? (
              <img src={p.src} alt={p.tag} className="size-full object-cover" />
            ) : (
              <span className="p-4 text-center text-sm font-semibold text-[#6b6354]">[FOTO: {p.tag}]</span>
            )}
            <span className="absolute top-2.5 left-2.5 rounded-full bg-paper px-2.5 py-1 text-[10px] font-bold text-ink">
              {p.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
