import type { PortfolioContent } from "../types";

/** Conteúdo de exemplo — placeholders entre [colchetes] até entrar o conteúdo real. */
export const sampleContent: PortfolioContent = {
  brandInitials: "DL",
  name: "Dua Lipa",
  tagline: "UGC Creator",
  heroPhoto: "/images/sections/capa.jpg",
  nav: [
    { label: "sobre", href: "#sobre" },
    { label: "vídeos", href: "#videos" },
    { label: "fotos", href: "#fotos" },
    { label: "contato", href: "#contato" },
  ],
  about: {
    heading: "Sobre mim",
    text: "[Parágrafo curto: quem você é, seu tom de voz, há quanto tempo cria conteúdo, o que te diferencia. 3–4 linhas, bem pessoal.]",
    photo: "/images/sections/about.jpg",
  },
  stats: [
    { number: "18K", label: "Instagram" },
    { number: "9K", label: "TikTok" },
    { number: "300K", label: "Alcance médio" },
    { number: "9,3%", label: "Engajamento" },
  ],
  niche: {
    heading: "Nichos & Público",
    left: [{ label: "beleza" }, { label: "lifestyle" }, { label: "moda" }, { label: "skincare" }, { label: "dicas rápidas" }],
    right: [
      { label: "mães em casa" },
      { label: "jovens profissionais" },
      { label: "freelancers" },
      { label: "empreendedoras" },
      { label: "criadores de conteúdo" },
    ],
  },
  videos: [
    { id: "v1", label: "[VÍDEO: unboxing produto]" },
    { id: "v2", label: "[VÍDEO: get ready with me]" },
    { id: "v3", label: "[VÍDEO: resenha sincera]" },
    { id: "v4", label: "[VÍDEO: tutorial de uso]" },
    { id: "v5", label: "[VÍDEO: antes & depois]" },
    { id: "v6", label: "[VÍDEO: bastidores de gravação]" },
  ],
  photos: [
    { id: "p1", tag: "campanha", tall: true, src: "/images/sections/campanha.jpg" },
    { id: "p2", tag: "lifestyle", tall: false, src: "/images/sections/lifestyle.jpg" },
    { id: "p3", tag: "still", tall: false, src: "/images/sections/still.jpg" },
    { id: "p4", tag: "uso do produto", tall: true, src: "/images/sections/uso-produto.jpg" },
    { id: "p5", tag: "bastidores", tall: false, src: "/images/sections/bastidores.jpg" },
    { id: "p6", tag: "editorial", tall: true, src: "/images/sections/editorial.jpg" },
    { id: "p7", tag: "detalhe", tall: false, src: "/images/sections/detalhe.jpg" },
    { id: "p8", tag: "retrato", tall: false, src: "/images/sections/retrato.jpg" },
  ],
  process: [
    { n: "01", title: "Briefing", desc: "Entendo a marca, o produto e o objetivo da campanha." },
    { n: "02", title: "Roteiro", desc: "Crio o roteiro autêntico, no meu tom de voz." },
    { n: "03", title: "Gravação", desc: "Produzo o conteúdo com boa luz, som e várias tomadas." },
    { n: "04", title: "Entrega", desc: "Edito e entrego os arquivos no prazo combinado." },
  ],
  brands: [
    { id: "nivea", label: "Nivea", logoSrc: "/images/brands/nivea.webp" },
    { id: "dove", label: "Dove", logoSrc: "/images/brands/dove.png" },
    { id: "chanel", label: "Chanel", logoSrc: "/images/brands/chanel.png" },
    { id: "philips", label: "Philips", logoSrc: "/images/brands/philips.png" },
    { id: "cea", label: "C&A", logoSrc: "/images/brands/cea.svg" },
    { id: "fenty", label: "Fenty Beauty", logoSrc: "/images/brands/fenty-beauty.jpg" },
    { id: "loreal-istar", label: "Loreal iStar", logoSrc: "/images/brands/loreal-istar.jpg" },
    { id: "beyoung", label: "Beyoung", logoSrc: "/images/brands/beyoung.jpg" },
    { id: "weza", label: "Weza", logoSrc: "/images/brands/weza.jpg" },
  ],
  contact: {
    heading: "Vamos criar juntos?",
    email: "[email@exemplo.com]",
    instagram: "[@seu.instagram]",
    whatsapp: "[WhatsApp]",
    ctaLabel: "Fechar uma parceria →",
  },
};
