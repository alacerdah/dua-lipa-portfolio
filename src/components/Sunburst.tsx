/** Estrela de 8 pontas (dois quadrados sobrepostos a 45°) — usa a cor de texto herdada (currentColor). */
export default function Sunburst({ size = 64, spin = true, className = "" }: { size?: number; spin?: boolean; className?: string }) {
  return (
    <div
      className={`sunburst ${spin ? "animate-spin-slow" : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}
