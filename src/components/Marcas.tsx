import type { Brand } from "../types";

function BrandSlot({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-[76px] w-[160px] shrink-0 items-center justify-center rounded-[12px] bg-paper p-4">
      <img src={brand.logoSrc} alt={brand.label} className="max-h-full max-w-full object-contain" />
    </div>
  );
}

export default function Marcas({ brands }: { brands: Brand[] }) {
  return (
    <section id="marcas" className="reveal w-full overflow-hidden bg-ink py-12 sm:py-20">
      <h2 className="mb-8 px-6 text-center text-[clamp(22px,3vw,34px)] text-paper">Marcas que já confiaram em mim</h2>
      <div className="w-full overflow-hidden">
        <div className="marquee-track gap-14">
          {brands.map((b) => (
            <BrandSlot key={b.id} brand={b} />
          ))}
          {brands.map((b) => (
            <BrandSlot key={`${b.id}-dup`} brand={b} />
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-[11px] text-[#8a8069] italic">a faixa rola sozinha e pausa quando o mouse passa por cima</p>
    </section>
  );
}
