import Sunburst from "./Sunburst";

export default function Hero({ name, tagline, photo }: { name: string; tagline: string; photo?: string }) {
  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");

  return (
    <section
      id="capa"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center px-6 py-20 text-center sm:px-10"
      style={{
        backgroundImage: photo
          ? `linear-gradient(0deg, rgb(20 17 13 / 0.55), rgb(20 17 13 / 0.25)), url(${photo})`
          : "linear-gradient(0deg, rgb(20 17 13 / 0.5), rgb(20 17 13 / 0.2)), repeating-linear-gradient(135deg, #8a7a5c, #8a7a5c 22px, #7c6d52 22px, #7c6d52 44px)",
      }}
    >
      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <h1 className="text-left text-[clamp(48px,10vw,130px)] leading-[0.95] tracking-wide text-paper">
          <span className="block pl-[0.55em] sm:pl-[0.9em]">{first}</span>
          <span className="inline-flex items-center gap-2">
            {last}
            <Sunburst size={56} className="text-blue sm:size-[72px]" />
          </span>
        </h1>

        <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-paper bg-paper/15 px-5 py-2.5 text-xs font-bold tracking-[0.08em] text-paper uppercase">
          {tagline}
        </div>
      </div>

      <div className="animate-bounce-arrow absolute bottom-8 flex flex-col items-center gap-1.5 text-paper">
        <span className="text-lg">↓</span>
      </div>
    </section>
  );
}
