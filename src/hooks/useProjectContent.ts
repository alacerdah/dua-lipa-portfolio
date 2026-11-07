import { useEffect, useState } from "react";
import { fetchProjectContent, type ApiProjectContent } from "../shared/videos-api";

export function useProjectContent() {
  const [content, setContent] = useState<ApiProjectContent | null | undefined>(undefined);

  useEffect(() => {
    fetchProjectContent().then(setContent);
  }, []);

  return content;
}
