import { useEffect, useState } from "react";
import { fetchProjectNiches, type ApiNiche } from "../shared/videos-api";

export function useProjectNiches() {
  const [niches, setNiches] = useState<ApiNiche[] | null | undefined>(undefined);

  useEffect(() => {
    fetchProjectNiches().then(setNiches);
  }, []);

  return niches;
}
