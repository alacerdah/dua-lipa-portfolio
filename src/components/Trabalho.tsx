import type { ProcessStep } from "../types";

export default function Trabalho({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="trabalho" className="reveal w-full bg-sand px-6 py-16 sm:px-10 sm:py-24">
      <h2 className="mb-11 text-center text-[clamp(28px,4vw,44px)] text-pink-deep">Como eu trabalho</h2>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5">
        {steps.map((step) => (
          <div
            key={step.n}
            className="max-w-[270px] flex-1 basis-[230px] rounded-2xl bg-paper p-6.5 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="font-display mb-4 flex size-11 items-center justify-center rounded-full bg-blue text-[15px] text-paper">
              {step.n}
            </div>
            <h3 className="mb-2 text-lg text-ink">{step.title}</h3>
            <p className="m-0 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
