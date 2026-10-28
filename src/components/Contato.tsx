import Sunburst from "./Sunburst";

export default function Contato({
  heading,
  email,
  instagram,
  whatsapp,
  ctaLabel,
  footerName,
}: {
  heading: string;
  email: string;
  instagram: string;
  whatsapp?: string;
  ctaLabel: string;
  footerName: string;
}) {
  return (
    <section id="contato" className="reveal relative w-full overflow-hidden bg-pink px-6 py-20 text-center sm:px-10 sm:py-36">
      <div className="animate-float-a absolute top-[12%] left-[7%] hidden sm:block">
        <Sunburst size={58} spin={false} className="text-yellow" />
      </div>
      <div className="animate-float-b absolute right-[9%] bottom-[14%] hidden size-[90px] rounded-full bg-green sm:block" />

      <div className="relative mx-auto max-w-2xl">
        <h2 className="mb-5 text-[clamp(32px,5vw,58px)] leading-tight text-paper">{heading}</h2>
        <p className="mb-7 text-[17px] text-paper/95">
          {email} · {instagram}
          {whatsapp ? ` · ${whatsapp}` : ""}
        </p>
        <a
          href="#"
          className="animate-pulse-ring inline-block rounded-full bg-ink px-9 py-4 text-base font-bold text-paper"
        >
          {ctaLabel}
        </a>
      </div>

      <div className="relative mt-20 flex flex-wrap justify-between gap-3 border-t-[1.5px] border-ink/30 pt-6.5 text-xs font-semibold text-ink">
        <span>© {footerName} — portfólio UGC</span>
        <span>Instagram · TikTok · Pinterest</span>
      </div>
    </section>
  );
}
