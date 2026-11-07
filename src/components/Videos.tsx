import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { VideoItem } from "../types";
import type { ApiNiche } from "../shared/videos-api";
import SocialEmbed from "./SocialEmbed";

type VideoCard = VideoItem & { platform?: "instagram" | "tiktok" | "youtube" | "outro" };

function cardsFrom(staticItems: VideoItem[], apiNiches: ApiNiche[] | null | undefined): VideoCard[] {
  if (!apiNiches || apiNiches.length === 0) return staticItems;
  const videos = apiNiches.flatMap((n) => n.videos).sort((a, b) => a.position - b.position);
  if (videos.length === 0) return staticItems;
  return videos.map((v) => ({
    id: v.id,
    label: v.title || `[VÍDEO: ${v.tag || v.platform}]`,
    url: v.url,
    platform: v.platform,
  }));
}

export default function Videos({ items, apiNiches }: { items: VideoItem[]; apiNiches?: ApiNiche[] | null }) {
  const cards = cardsFrom(items, apiNiches);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // só o mouse arrasta manualmente; touch/caneta usam o scroll nativo do dedo
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || e.pointerType !== "mouse") return;
    drag.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft };
    setIsDragging(true);
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    track.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (track && drag.current.active) {
      try {
        track.releasePointerCapture(e.pointerId);
      } catch {
        // pointer já liberado
      }
    }
    drag.current.active = false;
    setIsDragging(false);
  };

  return (
    <section id="videos" className="reveal w-full overflow-hidden bg-ink px-0 py-16 text-paper sm:py-24">
      <div className="mx-auto mb-8 flex max-w-6xl flex-wrap items-end justify-between gap-4 px-6 sm:px-10">
        <h2 className="text-[clamp(28px,4vw,44px)] text-yellow">Vídeos &amp; Carrossel</h2>
        <p className="text-xs text-paper/70 italic">arraste pro lado →</p>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        className={`hscroll mx-auto flex max-w-6xl gap-5 overflow-x-auto px-6 pb-5 sm:px-10 ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab snap-x snap-mandatory"
        }`}
      >
        {cards.map((v) => {
          if (v.url && (v.platform === "instagram" || v.platform === "tiktok")) {
            return (
              <div key={v.id} className="w-[270px] shrink-0 snap-start">
                <SocialEmbed platform={v.platform} url={v.url} />
              </div>
            );
          }
          const Tag = v.url ? "a" : "div";
          return (
            <Tag
              key={v.id}
              {...(v.url ? { href: v.url, target: "_blank", rel: "noreferrer" } : {})}
              className="relative flex aspect-[9/16] w-[190px] shrink-0 snap-start items-center justify-center rounded-[14px] p-3.5 text-center text-xs font-semibold text-[#cfc6ae] transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                background: "repeating-linear-gradient(135deg,#3c362c,#3c362c 14px,#332e26 14px,#332e26 28px)",
              }}
            >
              <span className="pointer-events-none">{v.label}</span>
              <div className="pointer-events-none absolute inset-x-0 bottom-3.5 flex justify-center">
                <span className="flex size-[38px] items-center justify-center rounded-full bg-pink text-ink">▶</span>
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
