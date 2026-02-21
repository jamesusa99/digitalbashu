import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Link from "next/link";
import { ClipboardList, FileText, Download } from "lucide-react";

export const metadata = {
  title: "Industry Alliance | Bashu Culture Digital Research Institute",
  description:
    "The Bashu Cultural Creativity (Digital) Industry-Education Alliance unites cultural heritage, tourism, technology, and education institutions to drive digital transformation of Bashu culture. Gathering industrial strength, creating shared value.",
};

const charterItems = [
  { title: "Collaborative Governance", desc: "Establishing a council with multi-party participation from government, enterprise, schools, and research institutions, implementing a diversified collaborative governance model." },
  { title: "Unified Standards", desc: "Jointly establishing a unified standards value system covering planning, supply chain, content production, data storage, and settlement." },
  { title: "Resource Sharing", desc: "Alliance members enjoy access to the Bashu Cultural Digital Resource Library and technical support from the digital interactive platform." },
  { title: "Value Co-creation", desc: 'Driving multi-dimensional integration of "agri-cultural-tourism + esports + e-commerce + cultural creativity" to jointly build new digital cultural business formats.' },
];

const memberCategories = [
  { cat: "Academic & Research", items: ["Peking University (immersive cultural tourism technology support)", "University of Electronic Science and Technology (AIGC training platform R&D)", "Sichuan Vocational College of Cultural Industries"] },
  { cat: "Cultural Heritage Institutions", items: ["Sanxingdui Museum", "Sichuan Cultural Industry Development Promotion Center", "Sidu Chishui Memorial Hall", "Red Army Long March Qionglai Memorial Hall"] },
  { cat: "Technology & Operations Enterprises", items: ["Tencent Esports ('Village Gaming Tech' event collaboration)", "Inspur Group", "Sichuan Chuanbo Mingchang Cultural Art Development Co.", "City-level state-owned platform companies"] },
  { cat: "Education & Training Platforms", items: ["Sichuan Provincial Cadre Correspondence College", "Sichuan Provincial Party School", "Bingo Classroom"] },
];

const events = [
  { title: '"Agri-Cultural-Tourism+" Brand Integration Development Summit', desc: "Gathering quality resources to discuss market trends and brand cluster development strategies." },
  { title: "Digital Interactive Project Launch", desc: 'Milestone launches and stage-result presentations for major projects like "Cloud View Long March".' },
  { title: '"Village Gaming Tech" Esports Tournament', desc: "Regularly hosting nationally influential esports events to attract young audiences to Bashu culture." },
  { title: "New Media Talent Training Camp", desc: "Conducting agri-cultural-tourism IP brand incubation and short-video live streaming matrix marketing training across 21 city-level regions." },
];

const joinSteps = [
  { title: "Online Application", desc: "Submit your organization's profile and cooperation intent via the form below or the Contact Us page" },
  { title: "Qualification Review", desc: "The Alliance council conducts an initial assessment based on member admission criteria" },
  { title: "Sign the Charter", desc: "Upon approval, both parties formally sign the 'Bashu Cultural Creativity (Digital) Industry-Education Alliance Charter'" },
  { title: "Official Presentation", desc: "Member unit plaque presentation ceremony held at the annual alliance meeting or thematic events" },
];

export default function IndustryAlliancePageEN() {
  return (
    <>
      <PageHero title="Bashu Cultural Creativity (Digital) Industry-Education Alliance" subtitle="Gathering industrial strength, creating shared value" />

      <Section title="Alliance Overview" subtitle="Bashu Cultural Creativity (Digital) Industry-Education Alliance">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-center text-lg text-muted">
            The Bashu Cultural Creativity (Digital) Industry-Education Alliance is a cross-sector organization founded by the Bashu Culture Digital Research Institute, uniting cultural heritage, cultural tourism, technology, and education institutions. The Alliance is committed to driving Bashu culture's digital transformation, building a "government-industry-school-enterprise" multi-stakeholder city-level industry-education consortium, and achieving deep integration of industrial innovation and cultural value.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "21", label: "Sichuan city-level regions covered" },
              { stat: "G·I·S·E", label: "Multi-stakeholder governance" },
              { stat: "City-Level", label: "Industry-Education Consortium" },
              { stat: "Value Co-Win", label: "Industry meets culture" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-snow p-4 text-center shadow-sm">
                <p className="font-serif text-2xl font-semibold text-bashu-bronze">{item.stat}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Alliance Charter Overview" subtitle="Shared principles ensuring a healthy ecosystem">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-center text-muted">Alliance members are expected to follow these shared principles:</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {charterItems.map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <h3 className="font-serif font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Member Organizations" subtitle="Partial member list">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-center text-muted">The Alliance connects 21 city-level regions across Sichuan and key cultural tourism and intangible heritage resources nationwide.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {memberCategories.map((group, i) => (
              <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <h3 className="font-serif font-semibold text-ink">{group.cat}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bashu-bronze/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Annual Summit & Key Events" subtitle="High-profile events enhancing brand influence">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {events.map((event, i) => (
              <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <h3 className="font-serif font-semibold text-ink">{event.title}</h3>
                <p className="mt-3 text-sm text-muted">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="How to Join" subtitle="From interest to membership">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="rounded-xl border border-border bg-paper-warm p-6">
            <h3 className="font-medium text-ink">Eligibility</h3>
            <p className="mt-2 text-muted">Enterprises, public institutions, and social organizations with cultural heritage resources, digital technology capabilities, cultural tourism operations, or industry-education integration needs.</p>
          </div>
          <div>
            <h3 className="mb-4 font-medium text-ink">Membership Process</h3>
            <ol className="space-y-3">
              {joinSteps.map((step, i) => (
                <li key={i} className="flex gap-4 rounded-xl border border-border bg-snow px-4 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bashu-bronze/10 font-serif font-semibold text-bashu-bronze">{i + 1}</span>
                  <div>
                    <p className="font-medium text-ink">{step.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex justify-center">
            <Link href="/en/contact" className="inline-flex items-center gap-2 rounded-full border border-bashu-bronze bg-bashu-bronze px-6 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light">
              <ClipboardList className="h-4 w-4" />
              Apply to Join
            </Link>
          </div>
        </div>
      </Section>

      <Section title="Resource Downloads" subtitle="Alliance charter and white paper">
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Bashu Cultural Creativity (Digital) Industry-Education Alliance Charter", sub: "PDF Download" },
              { label: "Bashu Culture Digitization White Paper", sub: "Preview / Download" },
            ].map((item, i) => (
              <a key={i} href="#" className="group flex items-center gap-4 rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md">
                <div className="rounded-xl bg-bashu-bronze/10 p-3">
                  <FileText className="h-8 w-8 text-bashu-bronze" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-ink group-hover:text-bashu-bronze">{item.label}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted">
                    <Download className="h-4 w-4" />{item.sub}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">Full documents available via <Link href="/en/contact" className="text-bashu-bronze underline hover:text-bashu-bronze-light">Contact Us</Link>.</p>
        </div>
      </Section>
    </>
  );
}
