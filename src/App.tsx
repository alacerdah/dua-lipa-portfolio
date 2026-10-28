import { sampleContent } from "./data/sampleContent";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Videos from "./components/Videos";
import Fotos from "./components/Fotos";
import Trabalho from "./components/Trabalho";
import Marcas from "./components/Marcas";
import Contato from "./components/Contato";
import type { PortfolioContent } from "./types";

function PortfolioTemplate({ content }: { content: PortfolioContent }) {
  useScrollReveal();

  return (
    <div className="relative w-full overflow-x-hidden bg-cream text-ink">
      <Nav brandInitials={content.brandInitials} links={content.nav} />
      <Hero name={content.name} tagline={content.tagline} photo={content.heroPhoto} />
      <Sobre
        heading={content.about.heading}
        text={content.about.text}
        photo={content.about.photo}
        stats={content.stats}
        niche={content.niche}
      />
      <Videos items={content.videos} />
      <Fotos items={content.photos} />
      <Trabalho steps={content.process} />
      <Marcas brands={content.brands} />
      <Contato
        heading={content.contact.heading}
        email={content.contact.email}
        instagram={content.contact.instagram}
        whatsapp={content.contact.whatsapp}
        ctaLabel={content.contact.ctaLabel}
        footerName={content.name}
      />
    </div>
  );
}

export default function App() {
  return <PortfolioTemplate content={sampleContent} />;
}
