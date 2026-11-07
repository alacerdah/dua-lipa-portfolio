// Busca vídeos (por nicho), fotos de galeria e carrosséis do admin central (ugc-admin), pelo slug
// deste projeto. Sem slug ou URL configurados, ou se a chamada falhar, retorna null — quem chama
// cai pro conteúdo estático de `data/`, então o site nunca quebra por causa do admin estar fora.

export type ApiVideo = {
  id: string;
  platform: "instagram" | "tiktok" | "youtube" | "outro";
  url: string;
  title: string;
  tag: string;
  position: number;
};

export type ApiNiche = {
  id: string;
  name: string;
  position: number;
  videos: ApiVideo[];
};

export type ApiGalleryPhoto = {
  id: string;
  platform: "instagram" | "tiktok" | "canva";
  url: string;
  title: string;
  tag: string;
  position: number;
};

export type ApiCarouselPost = {
  id: string;
  instagram_url: string;
  canva_url: string | null;
  title: string;
  position: number;
};

export type ApiProjectContent = {
  niches: ApiNiche[];
  gallery: ApiGalleryPhoto[];
  carousels: ApiCarouselPost[];
};

export async function fetchProjectContent(): Promise<ApiProjectContent | null> {
  const slug = import.meta.env.VITE_PROJECT_SLUG;
  const apiUrl = import.meta.env.VITE_VIDEOS_API_URL;
  if (!slug || !apiUrl) return null;

  try {
    const res = await fetch(`${apiUrl}/api/videos?slug=${encodeURIComponent(slug)}`);
    if (!res.ok) return null;
    const data = (await res.json()) as Partial<ApiProjectContent>;
    if (!data.niches) return null;
    return { niches: data.niches, gallery: data.gallery ?? [], carousels: data.carousels ?? [] };
  } catch {
    return null;
  }
}
