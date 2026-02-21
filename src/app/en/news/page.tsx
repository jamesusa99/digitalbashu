import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Bashu Culture Digital Research Institute",
  description:
    "Latest news from Bashu Culture Digital Research Institute: academic research progress, digital project implementation, ICH inheritance activities, talent cultivation outcomes, Alliance academic forums, and Bingo AI College training updates.",
};

const NEWS_ITEMS = [
  {
    date: "2025-06",
    tag: "Academic",
    title: "Sanxingdui Digital Restoration Project Named Provincial Cultural Digitalisation Model Case",
    desc: "The Institute's Sanxingdui artefact digital modelling and rights-verification project was officially designated a provincial cultural digitalisation model case by the Sichuan Department of Culture and Tourism, setting a benchmark for converting cultural-heritage resources into digital assets.",
  },
  {
    date: "2025-05",
    tag: "Talent",
    title: "Institute and Bingo AI College Launch New AI Education Training Cohort",
    desc: "Through the Bingo AI College · AI Education Practice Base, a new cohort of AI cultural-creativity training places has been opened to Alliance universities and social learners, focusing on cultivating AI + Cultural Digitalisation composite talent for directed industry placement.",
  },
  {
    date: "2025-05",
    tag: "ICH",
    title: "ICH Inheritor Digital Cultivation Project Concludes — Paired Inheritance Outcomes on Display",
    desc: "The ICH Inheritor Digital Cultivation Project, conducted in partnership with the Alliance and ICH Digital Study Tours, has concluded. Multiple national- and provincial-level inheritors participated; paired teacher–student inheritance outcomes are now on display at the Institute.",
  },
  {
    date: "2025-04",
    tag: "Academic Exchange",
    title: "Alliance Academic Forum Held, Focusing on ICH Digital Inheritance and Industry Implementation",
    desc: "The Bashu Culture Creative (Digital) Industry-Education Alliance Academic Forum was convened in Chengdu. Experts from Peking University, Sichuan University, UESTC, and Alliance member representatives jointly explored pathways for ICH digital inheritance and industry implementation.",
  },
  {
    date: "2025-04",
    tag: "Cooperation",
    title: "Institute and Sichuan Fine Arts Institute Co-establish Digital Art Design Training Base",
    desc: "The Institute and Sichuan Fine Arts Institute formally signed a cooperation agreement to co-establish a Bashu Cultural Digital Art Design Training Base, conducting joint creative prototype development and ICH aesthetics research to transform academic outcomes into industry applications.",
  },
  {
    date: "2025-03",
    tag: "Project",
    title: "Cloud-view Long March Digital Interactive Project Releases Phase Results",
    desc: "The Cloud-view Long March digital interactive platform, built with AR/VR/AI integrated technology, has completed its phase-one construction, establishing a full-chain technology engine for constructing, integrating, interacting, presenting, and evaluating immersive red-culture experiences.",
  },
  {
    date: "2025-03",
    tag: "Talent",
    title: "Bingo Classroom ICH Digital Study Tours Scale to Four Regions",
    desc: "Leveraging AI and digital technology to innovate traditional-culture activation, the programme achieved cross-regional, multi-scenario large-scale implementation across Sichuan, Beijing, Guangdong, and Xinjiang, reaching schools, communities, study-tour bases, and scenic areas.",
  },
  {
    date: "2025-02",
    tag: "Academic",
    title: "Chinese Ethnic Minority Clothing Culture & Craft · Qiang Officially Published",
    desc: "Listed in the 14th Five-Year National Key Book Publishing Plan, this volume is an important achievement of the Institute in the field of integrated publishing and academic research.",
  },
];

const tagColors: Record<string, string> = {
  Academic: "bg-bashu-teal/15 text-bashu-teal",
  Talent: "bg-bashu-bronze/10 text-bashu-bronze",
  ICH: "bg-brocade-gold/20 text-brocade-gold",
  "Academic Exchange": "bg-bashu-teal/10 text-bashu-teal",
  Cooperation: "bg-bashu-bronze/10 text-bashu-bronze",
  Project: "bg-brocade-gold/15 text-brocade-gold",
};

export default function NewsENPage() {
  return (
    <>
      <PageHero
        title="News"
        subtitle="Academic Progress · Project Updates · ICH Inheritance · Talent Development"
        desc="Tracking the Institute's academic research, digital projects, ICH activities, Alliance forums, and Bingo AI College training updates — every step of Bashu culture's digital transformation."
      />

      <Section bg="paper">
        <div className="mx-auto max-w-4xl space-y-6">
          {NEWS_ITEMS.map((item, i) => (
            <article
              key={i}
              className="rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-medium ${tagColors[item.tag] ?? "bg-paper text-muted"}`}
                >
                  <Tag size={10} className="inline mr-1 mb-0.5" />
                  {item.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Calendar size={12} />
                  {item.date}
                </span>
              </div>
              <h3 className="font-serif text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-muted">More updates coming soon — stay tuned.</p>
        </div>
      </Section>
    </>
  );
}
