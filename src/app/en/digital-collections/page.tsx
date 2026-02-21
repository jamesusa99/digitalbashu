import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Image from "next/image";
import { Package, Globe, LayoutGrid, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Digital Collections | Bashu Culture Digital Research Institute",
  description:
    "Explore Sanxingdui, Sichuan opera, intangible heritage and other Bashu cultural digital collections and virtual exhibitions. 3D/VR exhibition entries — Cloud View Long March, Shenyi Exchange, and more.",
};

const DIGITAL_COLLECTIONS = [
  { id: "sanxingdui", title: "Sanxingdui Digital Collections", desc: "Digital modeling and rights confirmation for ancient Shu relics including the Bronze Sacred Tree, wide-eyed masks, and gold scepters — driving the transformation of cultural heritage into digital assets.", image: "https://img2.baidu.com/it/u=770521053,1233159494&fm=253&app=138&f=JPEG?w=800&h=1200", category: "Ancient Shu Civilization" },
  { id: "chuanju", title: "Sichuan Opera Digital Collections", desc: "Digital preservation and exhibition of Bian Lian (face-changing) masks, costume patterns, and classic performance fragments.", image: "https://gips1.baidu.com/it/u=2122084108,243822367&fm=3074&app=3074&f=JPEG?w=800&h=1109", category: "Sichuan Opera" },
  { id: "shujin", title: "Shu Brocade Pattern Digital Collections", desc: "Traditional Shu brocade patterns, weaving techniques, and digital derivatives from the 'Jewelry in Ancient Texts' intangible heritage curriculum series.", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80", category: "Intangible Heritage" },
  { id: "qiang", title: "Qiang Ethnic Costume Digital Collections", desc: 'Digital resources from "Costumes and Crafts of China\'s Ethnic Minorities: The Qiang People", digitally presenting ethnic costume patterns and their cultural significance.', image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", category: "Ethnic Culture" },
  { id: "panda", title: "Giant Panda Cultural Creativity Digital Collections", desc: "Digital artworks with giant panda IP and Bashu natural ecology themes, conveying the philosophy of harmony between humanity and nature.", image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80", category: "Natural Ecology" },
];

const VR_EXHIBITIONS = [
  { id: "yunjing", title: '"Cloud View Long March" Immersive Experience', desc: "A red culture digital interactive platform built with AR/VR/AI fusion technology — a full-chain technical engine for an immersive experience of the Long March spirit.", type: "VR/AR", href: "#", status: "Operational" },
  { id: "bashu-space", title: "Bashu Cultural Experience Space", desc: "Offline digital intangible heritage exhibition, linked with International Museum Day and other events, supporting virtual guided tours and interaction.", type: "Offline + Online", href: "#", status: "Operational" },
  { id: "shenyijiao", title: "Cultural Digital Artwork Trading Platform (Shenyi Exchange)", desc: "Supported by the National Cultural Big Data Trading Center — Bashu cultural digital collectible issuance, rights confirmation, and trading.", type: "Trading Platform", href: "#", status: "Launched" },
  { id: "future", title: "More 3D / VR Exhibitions", desc: "Sanxingdui 3D artifact tour, Sichuan opera virtual theater, immersive Shu road experience — under active development.", type: "In Development", href: "#", status: "Coming Soon" },
];

export default function DigitalCollectionsPageEN() {
  return (
    <>
      <PageHero title="Digital Collections" subtitle="Digital artifacts & immersive experiences" />

      <Section title="Digital Exhibition" subtitle="Explore Bashu cultural digital achievements">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted">Bringing together digital collections and virtual exhibitions of Sanxingdui, Sichuan opera, intangible heritage and other Bashu cultural forms — providing online immersive browsing and interactive experiences.</p>
        </div>
      </Section>

      <Section title="Digital Collections" subtitle="A curated selection of Bashu cultural digital assets">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIGITAL_COLLECTIONS.map((item) => (
              <article key={item.id} className="group overflow-hidden rounded-2xl border border-border bg-snow shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-0.5 text-xs text-snow">{item.category}</div>
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                    <span className="rounded-full border border-snow bg-snow/20 px-4 py-2 text-sm font-medium text-snow backdrop-blur">View Collection</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section title="3D / VR Exhibition Entries" subtitle="Immersive experiences & virtual exhibitions">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {VR_EXHIBITIONS.map((item) => (
              <a key={item.id} href={item.href} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-snow shadow-sm transition hover:border-brocade-gold/50 hover:shadow-lg">
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-lg bg-bashu-bronze/10 p-2">
                        {item.type.includes("VR") ? <Globe className="h-5 w-5 text-bashu-bronze" /> : item.type === "Trading Platform" ? <Package className="h-5 w-5 text-bashu-bronze" /> : <LayoutGrid className="h-5 w-5 text-bashu-bronze" />}
                      </div>
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">{item.type}</span>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs ${item.status === "Operational" || item.status === "Launched" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{item.status}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-ink group-hover:text-bashu-bronze">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-bashu-bronze">
                    Enter Experience <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">More digital collections and 3D/VR projects will be launched progressively. Stay tuned for updates.</p>
        </div>
      </Section>
    </>
  );
}
