import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Building2, Landmark, GraduationCap, Factory } from "lucide-react";

export const metadata = {
  title: "Cooperation & Exchange | Bashu Culture Digital Research Institute",
  description:
    "Cooperation cases with local government, cultural heritage institutions, universities and enterprises. Fields: red culture digitization, intangible heritage asset conversion, AI+cultural creativity training, industry-education integration.",
};

const partners = [
  {
    icon: Building2,
    title: "Local Government & Cultural Tourism Departments",
    subtitle: "School-government synergy driving rural revitalization",
    objects: "Bazhong Municipal Committee/Government, Wenjiang Cultural Creativity Zone, Yuechi County Committee Organization Department",
    cases: [
      { name: "Bazhong Cultural Tourism Research Forum", desc: "Executive Dean Prof. Chen Jianwen led a team of experts from the National Radio and Television Administration laboratory to Bazhong, providing decision-making consultation for integrating local red cultural resources with virtual reality audio-visual technology." },
      { name: '"Urban Cultural Aesthetics" Training', desc: "Conducted thematic training for newly appointed Yuechi County officials, delivering digital urban management and aesthetic construction solutions from foundational principles." },
    ],
    outcomes: "Industry-government research reports, digital literacy enhancement programs for local officials",
  },
  {
    icon: Landmark,
    title: "Cultural Heritage Institutions",
    subtitle: "Digital technology empowering 'living heritage'",
    objects: "Sanxingdui Museum, Sichuan Cultural Industry Development Promotion Center, local intangible heritage centers",
    cases: [
      { name: "Sanxingdui Digital Rights & Artwork Development", desc: "Advancing the transformation of Sanxingdui cultural heritage resources into digital assets through digital modeling and rights confirmation." },
      { name: '"International Museum Day" Joint Exhibition', desc: "Co-hosting digital intangible heritage experience exhibitions with internal and external cultural heritage units through the Bashu Cultural Experience Space." },
    ],
    outcomes: "Digital collectibles, digital exhibition solutions, intangible heritage data annotation systems",
  },
  {
    icon: GraduationCap,
    title: "Higher Education Institutions",
    subtitle: "Cross-institutional collaboration on core technologies",
    objects: "Peking University, Sichuan University, UESTC, Chongqing College of Arts and Culture",
    cases: [
      { name: "AIGC Training Platform R&D", desc: "Co-developed an AI general education curriculum with UESTC, building a digital art creation platform serving faculty and students." },
      { name: "Chengdu-Chongqing Industry-Education Alliance", desc: 'Co-founded the "Bashu Cultural Creativity (Digital) Industry-Education Alliance" with Chongqing Arts & Culture Vocational Institute, achieving resource sharing within the Chengdu-Chongqing Twin-City Economic Circle.' },
    ],
    outcomes: "Joint research topics, credit-transfer courses, digital textbooks",
  },
  {
    icon: Factory,
    title: "Enterprises & Industry Alliance",
    subtitle: "Technology driving new productive forces",
    objects: "Inspur Group, Guangdong Bingo Miracle AI, Sichuan Cuiya Education Technology",
    cases: [
      { name: '"Cloud View Long March" Technology Integration', desc: "Deep collaboration with technology companies to advance AI+VR+AR fusion technology, building an immersive red cultural experience." },
      { name: "Digital Intangible Heritage into Communities", desc: 'Co-developed AI digital courses like "Jewelry in Ancient Texts" with partner enterprises, now operational in Donganhu Community, Jinfeng Community, and other locations.' },
    ],
    outcomes: "Digital course packages, software copyrights, commercialized cultural tourism IPs",
  },
];

const cooperationFields = [
  { title: "Project Planning", desc: "Red culture / intangible heritage digital interactive project application and construction" },
  { title: "Resource Transformation", desc: "Cultural resource digitization and assetization, rights assessment, and platform integration" },
  { title: "Talent Development", desc: "AI+cultural creativity specialized training, industry-education integration base construction" },
  { title: "Social Service", desc: "Digital study-tour product development, silver economy digital course package customization" },
];

const processSteps = [
  { step: 1, title: "Submit Interest", desc: "Submit initial requirements via the website contact form or email" },
  { step: 2, title: "Expert Review", desc: "The Institute's academic committee assesses the cultural value and technical feasibility of the project" },
  { step: 3, title: "Proposal Development", desc: "Organizing a cross-disciplinary expert team (covering universities, cultural creativity, and tech sectors) for field research and proposal writing" },
  { step: 4, title: "Alliance Signing", desc: "Formally sign a cooperation agreement and apply to join the 'Bashu Cultural Creativity (Digital) Industry-Education Alliance'" },
];

export default function CooperationPageEN() {
  return (
    <>
      <PageHero
        title="Cooperation & Exchange"
        subtitle="Government-enterprise co-construction, museum collaboration, school-enterprise partnerships — co-creating the Bashu digital cultural ecosystem"
      />

      <Section title="Partners & Landmark Cases" subtitle="Multi-party collaboration across government, industry, research, and academia">
        <div className="mx-auto max-w-4xl space-y-10">
          {partners.map((partner, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border bg-snow shadow-sm">
              <div className="border-b border-border bg-paper-warm px-6 py-4 sm:px-8">
                <div className="flex items-center gap-3">
                  <partner.icon className="h-6 w-6 text-bashu-bronze" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink">{partner.title}</h3>
                    <p className="text-sm text-muted">{partner.subtitle}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted">
                  <span className="font-medium text-ink">Partners: </span>{partner.objects}
                </p>
              </div>
              <div className="space-y-4 p-6 sm:p-8">
                <div>
                  <p className="mb-2 text-sm font-medium text-ink">Landmark Cases</p>
                  <ul className="space-y-3">
                    {partner.cases.map((c, j) => (
                      <li key={j} className="text-muted">
                        <span className="font-medium text-ink">{c.name}: </span>{c.desc}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="rounded-lg border border-border/60 bg-paper-warm/50 px-4 py-2 text-sm text-muted">
                  <span className="font-medium text-ink">Outcomes: </span>{partner.outcomes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Cooperation Guide" subtitle="From expression of interest to formal partnership">
        <div className="mx-auto max-w-4xl space-y-12">
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">Cooperation Fields</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {cooperationFields.map((field, i) => (
                <div key={i} className="rounded-xl border border-border bg-snow p-4 shadow-sm">
                  <p className="font-medium text-ink">{field.title}</p>
                  <p className="mt-1 text-sm text-muted">{field.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">Cooperation Process</h3>
            <ol className="mt-4 space-y-4">
              {processSteps.map((item) => (
                <li key={item.step} className="flex gap-4 rounded-xl border border-border bg-snow p-4 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bashu-bronze/10 font-serif text-lg font-semibold text-bashu-bronze">{item.step}</span>
                  <div>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-border bg-paper-warm p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">Contact</h3>
            <p className="mt-2 text-sm text-muted">
              Welcome to reach us via the methods below, or visit the{" "}
              <Link href="/en/contact" className="text-bashu-bronze underline hover:text-bashu-bronze-light">Contact Us</Link>{" "}
              page to submit a cooperation enquiry.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
                <div>
                  <p className="text-sm font-medium text-ink">Address</p>
                  <p className="text-sm text-muted">No. 399 Jinjiang Road Section 4, Shuangliu District, Chengdu<span className="block">(Sichuan Vocational College of Cultural Industries)</span></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
                <div>
                  <p className="text-sm font-medium text-ink">Phone</p>
                  <p className="text-sm text-muted">028-85769208 (Main switchboard)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
                <div>
                  <p className="text-sm font-medium text-ink">Email</p>
                  <p className="text-sm text-muted">contact@digitalbashu.org.cn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
