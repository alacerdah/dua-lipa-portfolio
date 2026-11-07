import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
  }
}

function ensureScript(src: string) {
  if (document.querySelector(`script[src="${src}"]`)) return false;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.body.appendChild(s);
  return true;
}

function processInstagram() {
  if (window.instgrm?.Embeds) window.instgrm.Embeds.process();
  else ensureScript("https://www.instagram.com/embed.js");
}

function processTiktok() {
  document.querySelector('script[src="https://www.tiktok.com/embed.js"]')?.remove();
  ensureScript("https://www.tiktok.com/embed.js");
}

// embed oficial do Instagram/TikTok — mesmo mecanismo usado pelo template-laisduarte (Astro),
// adaptado pra React: o post nasce no tamanho natural dele (mín. 326px), sem forçar aspecto.
export default function SocialEmbed({ platform, url }: { platform: "instagram" | "tiktok" | "canva" | "youtube" | "outro"; url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (platform === "tiktok") processTiktok();
    else if (platform === "instagram") processInstagram();
  }, [platform, url]);

  if (platform === "canva") {
    // o Canva só libera ser embutido em iframe na rota /watch?embed — garantimos o parâmetro
    // aqui mesmo que o link colado não tenha. O iframe nasce com pointer-events:none pra não
    // capturar o toque e travar o scroll no mobile; um clique na capa libera o iframe.
    const embedSrc = /[?&]embed(=|&|$)/.test(url) ? url : url + (url.includes("?") ? "&embed" : "?embed");
    return (
      <div className="social-embed relative aspect-[3/4] w-full overflow-hidden rounded-lg">
        <iframe
          loading="lazy"
          src={embedSrc}
          title="Canva"
          allow="fullscreen"
          allowFullScreen
          className="absolute border-0"
          style={{
            pointerEvents: unlocked ? "auto" : "none",
            left: "50%",
            top: 0,
            width: "140%",
            height: "calc(100% + 70px)",
            transform: "translateX(-50%)",
          }}
        />
        {!unlocked && (
          <div
            className="absolute inset-0 cursor-pointer"
            role="button"
            aria-label="Tocar"
            tabIndex={0}
            onClick={() => setUnlocked(true)}
            onKeyDown={(e) => e.key === "Enter" && setUnlocked(true)}
          />
        )}
      </div>
    );
  }

  if (platform === "tiktok") {
    return (
      <div ref={ref} className="social-embed w-full overflow-hidden rounded-lg">
        <blockquote className="tiktok-embed" cite={url} style={{ maxWidth: 605, minWidth: 325 }}>
          <section />
        </blockquote>
      </div>
    );
  }

  return (
    <div ref={ref} className="social-embed w-full overflow-hidden rounded-lg">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: 1,
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          Ver este post no Instagram
        </a>
      </blockquote>
    </div>
  );
}
