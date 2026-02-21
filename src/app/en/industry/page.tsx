import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Landmark, Film, Building2, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Empowerment | Bashu Culture Digital Research Institute",
  description:
    "Bashu Culture Digital Research Institute — Industry Empowerment: Culture + Digital + Industry, driving Bashu cultural resources into development advantage. Covering cultural creative industry, cultural tourism, enterprise digital transformation, IP licensing, and the Industry-Education Alliance.",
};

const SECTORS = [
  {
    id: "wenchuang",
    icon: Film,
    title: "Cultural Creative Industry Empowerment",
    subtitle: "Cultural IP mining · Digital design · IP incubation · Brand promotion",
    desc: "Drawing on the four core Bashu cultural systems (Ancient Shu Civilisation, ICH crafts, Red Culture, and landscape humanities), we provide full-chain services for cultural creative enterprises — from cultural IP mining and digital design through to brand promotion. We deeply incubate IP derivatives for Sanxingdui, Sichuan Opera Face-changing, Shu Brocade, and giant pandas, helping cultural creative enterprises achieve digital upgrading.",
    cta: "Apply for Creative Cooperation",
    cases: [
      { title: "Sanxingdui IP Digitalisation", desc: "Development of Sanxingdui IP digital derivative products covering digital collectibles, AR interactions, and cultural merchandise, driving the transformation of Ancient Shu cultural heritage into modern cultural creativity." },
      { title: "Sichuan Opera Creative Promotion", desc: "Digital reinterpretation and omni-channel promotion of iconic elements such as face-changing and fire-spitting, enhanced by AIGC-assisted creation to reach younger audiences." },
      { title: "Shu Brocade Pattern Design", desc: "Using AI to unlock the thousand-year Shu brocade pattern system, developing digital design tools and pattern asset libraries to empower modern fashion and craft brands." },
    ],
  },
  {
    id: "wenlv",
    icon: Landmark,
    title: "Cultural Tourism Industry Empowerment",
    subtitle: "Digital cultural-tourism solutions · Scenic area VR · ICH event digital operations",
    desc: "We provide digital upgrading services to cultural tourism bureaux and scenic areas across the Bashu region — including scenic area VR panoramas, cultural scene restoration, and ICH event digital operations — delivering a complete suite of 'Digital Cultural Tourism' solutions to enhance destination appeal and visitor experience.",
    cta: "Apply for Cultural-Tourism Cooperation",
    cases: [
      { title: "Scenic Area VR Panoramas", desc: "Immersive VR panoramas for key cultural scenic areas such as Mount Emei, Qingcheng Mountain, and the Sanxingdui site, enabling 'cloud travel across Bashu' to extend cultural tourism reach beyond geographic boundaries." },
      { title: "ICH Event Live Streaming", desc: "Full-panorama live streaming operations for Sichuan Opera performances, Shu embroidery showcases, and ICH craft exhibitions, expanding the reach of ICH activities across online and offline channels." },
      { title: "Red Cultural Tourism Digitalisation", desc: "Drawing on the Cloud-view Long March project, AR/VR/AI technology reconstructs historical Long March scenes to create immersive red cultural-tourism experiences and support digital upgrades for Long March heritage sites." },
    ],
  },
  {
    id: "qiye",
    icon: Building2,
    title: "Enterprise Digital Transformation",
    subtitle: "Digital consulting · Technical support · Talent training",
    desc: "We provide digital transformation consulting, technical support, and talent training for traditional cultural enterprises — Sichuan Opera troupes, ICH studios, cultural dining establishments, and cultural creative organisations — helping traditional culture combine with digital technology to achieve a new lease of life.",
    cta: "Enquire About Transformation Solutions",
    cases: [
      { title: "ICH Studio Digitalisation", desc: "Helping ICH inheritors build digital archives, online exhibition channels, and brand communication systems, enabling the modern transmission and commercial transformation of traditional skills." },
      { title: "AIGC Empowerment for Cultural Institutions", desc: "Introducing AIGC technology to museums, cultural centres, and ICH protection centres to improve content production efficiency and develop digital exhibition and interactive experience projects." },
      { title: "Bashu Culinary Brand Upgrading", desc: "Digital transformation and IP content operations for Sichuan tea-house, hot-pot culture, and Ba Ba Yan (outdoor banquet) cultural brands, creating new cultural dining business models." },
    ],
  },
  {
    id: "ip",
    icon: Award,
    title: "IP Licensing Services",
    subtitle: "Cultural IP incubation · Licensing cooperation · Multi-scenario applications",
    desc: "We integrate the Bashu cultural IPs incubated by the Institute — Ancient Shu Civilisation IP, Sichuan Opera Art IP, Giant Panda Cultural IP, and Tibetan-Qiang-Yi Ethnic Cultural IP — offering IP licensing cooperation across cultural creative, cultural tourism, film & TV, and digital product sectors, with clear licensing procedures and cooperation models to maximise IP value.",
    cta: "Learn About IP Licensing",
    cases: [
      { title: "Sanxingdui Cultural IP Licensing", desc: "Licensing cooperation for the Bronze Tree, Vertical-eye Mask, and Golden Staff in cultural creative products, games, film & TV, and other sectors, driving the transformation of cultural-heritage resources into cultural industry." },
      { title: "Giant Panda Cultural IP Development", desc: "Digital development and commercial licensing of the giant panda cultural landmark IP, covering emoji packs, digital collectibles, IP collaborations, and diverse application scenarios." },
    ],
  },
];

const ALLIANCE_MEMBERS = [
  "Xinhua Wenxuan", "Sichuan New Media Group", "Chengdu Media Group",
  "Bingo AI College", "Sichuan University", "UESTC",
  "Peking University", "Sichuan Fine Arts Institute", "Chongqing Arts & Culture Vocational College",
  "Inspur Group", "ShenYiJiao Platform", "Local ICH Protection Centres",
];

export default function IndustryENPage() {
  return (
    <>
      <PageHero
        title="Industry Empowerment"
        subtitle="Culture + Digital + Industry — Driving Bashu Cultural Resources into Development Advantage"
        desc="Leveraging academic research and Industry-Education Alliance resources to provide full-chain empowerment services across cultural creative, cultural tourism, enterprise digital transformation, and IP licensing."
      />

      {SECTORS.map((sector, si) => {
        const Icon = sector.icon;
        return (
          <Section
            key={sector.id}
            title={sector.title}
            subtitle={sector.subtitle}
            bg={si % 2 === 1 ? "paper" : undefined}
          >
            <div className="mx-auto max-w-4xl">
              <p className="text-muted leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                {sector.desc}
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {sector.cases.map((c) => (
                  <div key={c.title} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
                    <Icon className="h-7 w-7 text-bashu-bronze mb-2" />
                    <h4 className="font-semibold text-sm text-ink">{c.title}</h4>
                    <p className="mt-2 text-xs text-muted leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="/en/contact" className="inline-block rounded-full bg-bashu-bronze px-8 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze/85">
                  {sector.cta}
                </a>
              </div>
            </div>
          </Section>
        );
      })}

      <Section title="Industry-Education Alliance" subtitle="Bashu Culture Creative (Digital) Industry-Education Alliance — building a cultural digitalisation ecosystem" bg="paper">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-muted mb-8">
            Uniting major cultural institutions, technology enterprises, and universities across the Bashu region to build a government-industry-university-enterprise multi-stakeholder cultural digitalisation ecosystem, connecting 21 cities and prefectures in Sichuan and bridging academic research, talent cultivation, and outcomes transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {ALLIANCE_MEMBERS.map((name) => (
              <span key={name} className="rounded-xl border border-border bg-snow px-5 py-2.5 text-sm font-medium text-ink shadow-sm">
                {name}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/en/contact" className="inline-block rounded-full border border-bashu-bronze px-8 py-3 text-sm font-medium text-bashu-bronze transition hover:bg-bashu-bronze hover:text-snow">
              Join the Alliance
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
