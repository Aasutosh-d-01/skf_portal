export type CatalogItem = {
  id: string;
  name: string;
  series: "Aura Series" | "Ethnic Series" | "Sovereign Series";
  seriesId: "aura" | "ethnic" | "sovereign";
  kind: "Gift Set" | "Individual Attar";
  size: string;
  price: number;
  mrp?: number;
  amazon?: string;
  image: string;
  gallery: string[];
  scent: string;
  character: [number, number, number];
  mood: string;
  occasion: string;
  description: string;
  stockStatus?: "available" | "limited" | "paused";
};

const auraGallery = [
  "/media/square/aura-primary-sq.webp",
  "/media/square/aura-inside-v2-sq.webp",
  "/media/square/aura-purple-sq.webp",
  "/media/square/aura-royal-sq.webp",
  "/media/square/aura-amber-sq.webp",
];

const ethnicGallery = [
  "/media/square/ethnic-primary-sq.webp",
  "/media/square/ethnic-sandal-sq.webp",
  "/media/square/ethnic-trio-sq.webp",
  "/media/square/ethnic-box-v2-sq.webp",
  "/media/square/ethnic-rose-sq.webp",
];

const sovereignGallery = [
  "/media/square/sovereign-primary-sq.webp",
  "/media/square/sovereign-nazaqat-sq.webp",
  "/media/square/sovereign-trio-sq.webp",
  "/media/square/sovereign-description-sq.webp",
  "/media/square/sovereign-box-v2-sq.webp",
];

export const catalog: CatalogItem[] = [
  {id:"aura-series",name:"Aura Series",series:"Aura Series",seriesId:"aura",kind:"Gift Set",size:"3 × 6 ml",price:799,mrp:1599,amazon:"https://www.amazon.in/dp/B0H6GN2V5D",image:auraGallery[0],gallery:auraGallery,scent:"Amber Oud · Purple Oud · Royal Oud",character:[42,76,66],mood:"Modern magnetism",occasion:"Daily signature · Evening",description:"Three modern oud expressions moving from luminous warmth to a deeper, regal finish."},
  {id:"ethnic-series",name:"Ethnic Series",series:"Ethnic Series",seriesId:"ethnic",kind:"Gift Set",size:"3 × 6 ml",price:899,mrp:1799,amazon:"https://www.amazon.in/dp/B0H8XYKNW1",image:ethnicGallery[0],gallery:ethnicGallery,scent:"Regal Sandal · Majestic Mogra · Imperial Rose",character:[82,58,48],mood:"Heritage, reimagined",occasion:"Festive · Gifting",description:"A sensorial journey through sandalwood, mogra blossoms and timeless Indian rose rituals."},
  {id:"sovereign-series",name:"Sovereign Series",series:"Sovereign Series",seriesId:"sovereign",kind:"Gift Set",size:"3 × 6 ml",price:1049,mrp:2199,amazon:"https://www.amazon.in/dp/B0H6JQH9YL",image:sovereignGallery[0],gallery:sovereignGallery,scent:"Majestic Mogra · Royal Nazaqat · Humnava",character:[68,88,38],mood:"Quiet distinction",occasion:"Celebration · Evening",description:"Our most expressive trio, crafted for presence, memory and the quiet confidence of distinction."},
  {id:"amber-oud",name:"Amber Oud",series:"Aura Series",seriesId:"aura",kind:"Individual Attar",size:"6 ml",price:326,image:"/media/square/aura-amber-sq.webp",gallery:["/media/square/aura-amber-sq.webp","/media/square/aura-inside-v2-sq.webp"],scent:"Amber · Agarwood · Sandalwood",character:[30,74,74],mood:"Warm confidence",occasion:"Office · Evening",description:"A warm, resinous oud with amber depth and a poised woody trail."},
  {id:"purple-oud",name:"Purple Oud",series:"Aura Series",seriesId:"aura",kind:"Individual Attar",size:"6 ml",price:326,image:"/media/square/aura-purple-sq.webp",gallery:["/media/square/aura-purple-sq.webp","/media/square/purple-oud-sq.webp"],scent:"Saffron · Musk · Oud",character:[58,84,74],mood:"Mysterious elegance",occasion:"Evening · Special occasions",description:"A mysterious oud expression softened by saffron and sensual musk."},
  {id:"royal-oud",name:"Royal Oud",series:"Aura Series",seriesId:"aura",kind:"Individual Attar",size:"6 ml",price:326,image:"/media/square/aura-royal-sq.webp",gallery:["/media/square/aura-royal-sq.webp","/media/square/royal-oud-sq.webp"],scent:"Oud · Florals · Woods",character:[40,86,64],mood:"Regal composure",occasion:"Festive · Gatherings",description:"A polished composition with a timeless woody character."},
  {id:"regal-sandal",name:"Regal Sandal",series:"Ethnic Series",seriesId:"ethnic",kind:"Individual Attar",size:"6 ml",price:360,image:"/media/square/ethnic-sandal-sq.webp",gallery:["/media/square/ethnic-sandal-sq.webp","/media/square/regal-sandal-sq.webp"],scent:"Sandalwood · Musk · Woods",character:[20,76,54],mood:"Grounded warmth",occasion:"Prayer · Daily ritual",description:"Creamy Indian sandalwood with grounding musk and oriental woods."},
  {id:"ethnic-majestic-mogra",name:"Majestic Mogra",series:"Ethnic Series",seriesId:"ethnic",kind:"Individual Attar",size:"6 ml",price:360,image:"/media/square/majestic-mogra-sq.webp",gallery:["/media/square/majestic-mogra-sq.webp","/media/square/ethnic-trio-sq.webp"],scent:"Mogra · Jasmine · Florals",character:[92,42,52],mood:"Soft radiance",occasion:"Day · Festive",description:"A graceful floral ritual inspired by freshly gathered desi mogra."},
  {id:"imperial-rose",name:"Imperial Rose",series:"Ethnic Series",seriesId:"ethnic",kind:"Individual Attar",size:"6 ml",price:360,image:"/media/square/ethnic-rose-sq.webp",gallery:["/media/square/ethnic-rose-sq.webp","/media/square/ethnic-primary-sq.webp"],scent:"Rose · Florals · Musk",character:[96,56,62],mood:"Romantic grace",occasion:"Gifting · Celebration",description:"A romantic Rosa damascena character resting on elegant woods."},
  {id:"sovereign-majestic-mogra",name:"Majestic Mogra",series:"Sovereign Series",seriesId:"sovereign",kind:"Individual Attar",size:"6 ml",price:410,image:"/media/square/sovereign-mogra-sq.webp",gallery:["/media/square/sovereign-mogra-sq.webp","/media/square/sovereign-trio-sq.webp"],scent:"Ruh Attar · Mogra · Florals",character:[88,66,62],mood:"Opulent bloom",occasion:"Celebration · Evening",description:"A richer sovereign interpretation of radiant mogra blossoms."},
  {id:"royal-nazaqat",name:"Royal Nazaqat",series:"Sovereign Series",seriesId:"sovereign",kind:"Individual Attar",size:"6 ml",price:410,image:"/media/square/sovereign-nazaqat-sq.webp",gallery:["/media/square/sovereign-nazaqat-sq.webp","/media/square/royal-nazaqat-sq.webp"],scent:"Florals · Musk · Warm Woods",character:[54,90,50],mood:"Measured luxury",occasion:"Evening · Gifting",description:"Sweet freshness, graceful musk and woods composed with refinement."},
  {id:"humnava",name:"Humnava",series:"Sovereign Series",seriesId:"sovereign",kind:"Individual Attar",size:"6 ml",price:410,image:"/media/square/sovereign-humnava-sq.webp",gallery:["/media/square/sovereign-humnava-sq.webp","/media/square/humnava-sq.webp"],scent:"Fresh Florals · Citrus · Woods",character:[72,64,30],mood:"Vivid freshness",occasion:"Day · Travel",description:"A vivid green signature with luminous freshness and warm depth."},
];

export const giftSets = catalog.filter((item) => item.kind === "Gift Set");
export const individualAttars = catalog.filter((item) => item.kind === "Individual Attar");
export const money = (value:number) => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(value);
export const getItem = (id:string) => catalog.find((item) => item.id === id);
