import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Research Directions | Bashu Culture Digital Research Institute",
  description:
    "Under the National Cultural Digitization Strategy, the Institute focuses on cultural big data, AI-powered cultural production, and digital cultural consumption scenarios — structured across four research panels.",
};

const charterItems = [
  {
    title: "1. Cultural Big Data Systems & Standardization Research",
    note: "The 'foundation' of the digitization strategy",
    items: [
      { label: "Cultural Data Identification & Linkage Technology", desc: "Researching how to link fragmented Bashu cultural resources (folk intangible heritage, regional heritage data) through a unified identification system, breaking down data silos." },
      { label: "Cultural Data Rights & Value Assessment", desc: "Studying digital copyright protection, technical rights confirmation, and the logic of value generation as cultural resources are transformed into 'data assets'." },
      { label: "Industry Standard Formulation", desc: "Using the Institute's leadership within the industry-education alliance to lead or participate in setting standards for Bashu cultural digital art and digital courses." },
    ],
  },
  {
    title: "2. 'AI+' Cultural Productivity Research",
    note: "Responding to national 'AI-empowered new industrialization' and Sichuan's 'Smart Transformation & Digital Upgrade' initiative",
    items: [
      { label: "Vertical Domain LLM Applications", desc: "Developing multimodal large language models tailored for Bashu culture and cultural heritage, supporting automated data annotation and creative content generation." },
      { label: "'Living Heritage' in the Digital Context", desc: "Researching how digital technology can 'reconstruct context' to convert the virtual nature of technology into cultural 'presence', resolving the contradiction between technical tools and cultural values in intangible heritage transmission." },
      { label: "AIGC-Assisted Artistic Design", desc: "Exploring deep integration of AI in Shu brocade pattern design, Sichuan opera script creation assistance, and digital human teacher guidance." },
    ],
  },
  {
    title: "3. Digital Cultural Consumption Scenarios & Experience Research",
    note: "Driving demand-side transformation toward intelligent, immersive cultural industry formats",
    items: [
      { label: "Immersive Cultural Tourism Integration Technology", desc: "Partnering with institutions like Peking University to advance the full-chain technical engine of 'build-fuse-interact-present-evaluate'." },
      { label: "Physical-Digital Merged Consumption Scenarios", desc: "Studying the multi-dimensional integration model of 'agri-cultural-tourism + esports + e-commerce + cultural creativity' to build new urban cultural consumption landmarks." },
    ],
  },
];

const panels = [
  {
    title: "Panel 1: Cultural Resource Digitization & Asset Platform",
    items: [
      { label: "Data Collection & Processing", desc: "Building an integrated provincial cultural data system, leveraging cultural survey outcomes for high-quality acquisition and data cleaning." },
      { label: "Cultural Asset Key Laboratory", desc: "Focusing on cultural data annotation, digital artwork authentication, and driving the transformation of cultural resources into 'digital capital'." },
    ],
  },
  {
    title: "Panel 2: Deep Industry-Education Integration & Talent Ecosystem",
    items: [
      { label: "City-Level Industry-Education Consortium", desc: "Leveraging multi-stakeholder 'government-industry-school-enterprise' collaboration to apply for national-level consortiums and resolve the disconnect between talent cultivation and industry needs." },
      { label: "Digital Teaching Reform", desc: "Co-building AIGC training platforms, developing digital textbook series, and cultivating composite cultural industry talent with strong digital literacy." },
    ],
  },
  {
    title: "Panel 3: Red Culture & Ethnic Cultural Heritage Protection",
    items: [
      { label: "Red Gene Repository", desc: "Projects like 'Cloud View Long March' that use digital methods to transmit the spirit of the Long March, commemorating its 90th anniversary." },
      { label: "Zang-Qiang-Yi Corridor Cultural Tourism Integration", desc: "Studying cross-ethnic digital cultural representation to promote ethnic exchange and high-quality regional development." },
    ],
  },
  {
    title: "Panel 4: Cultural Accessibility & Social Service Scenarios",
    items: [
      { label: "Silver Economy Digitization", desc: "Developing 'Senior Study Tours' digital courses targeting aging-society needs, driving the digital transformation of elderly education." },
      { label: "Smart Museums & Community Empowerment", desc: "Bringing digital achievements into communities and primary schools via platforms like 'Bingo Classroom', enabling universal access to cultural outcomes." },
    ],
  },
];

export default function ResearchPageEN() {
  return (
    <>
      <PageHero title="Research Directions" subtitle="Strategy-driven, four-panel collaboration" />

      <Section title="Strategic Research Directions" subtitle="The National Cultural Digitization Strategy envisions a new system from resource creation to production, dissemination, and consumption">
        <div className="mx-auto max-w-4xl space-y-12">
          {charterItems.map((section, i) => (
            <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
              <h3 className="font-serif text-xl font-semibold text-ink">{section.title}</h3>
              <p className="mt-1 text-sm text-muted">{section.note}</p>
              <ul className="mt-4 space-y-3 text-muted">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <strong className="text-ink">{item.label}: </strong>{item.desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Four Core Research Panels" subtitle="Expanded research architecture">
        <div className="mx-auto max-w-4xl space-y-10">
          {panels.map((panel, i) => (
            <div key={i} className="rounded-2xl border border-bashu-bronze/30 bg-paper-warm p-6 sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-ink">{panel.title}</h3>
              <ul className="mt-4 space-y-2 text-muted">
                {panel.items.map((item, j) => (
                  <li key={j}>
                    <strong className="text-ink">{item.label}: </strong>{item.desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
