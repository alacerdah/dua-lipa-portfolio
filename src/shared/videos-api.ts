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

export async function fetchProjectNiches(): Promise<ApiNiche[] | null> {
  const slug = import.meta.env.VITE_PROJECT_SLUG;
  const apiUrl = import.meta.env.VITE_VIDEOS_API_URL;
  if (!slug || !apiUrl) return null;

  try {
    const res = await fetch(`${apiUrl}/api/videos?slug=${encodeURIComponent(slug)}`);
    if (!res.ok) return null;
    const data = (await res.json()) as { niches?: ApiNiche[] };
    return data.niches ?? null;
  } catch {
    return null;
  }
}
