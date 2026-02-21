import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Cpu, BookOpen, Award, Users, School, Microscope, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent Development | Bashu Culture Digital Research Institute",
  description:
    "Talent development at BCDRI: leveraging the Bashu Culture Creative (Digital) Industry-Education Alliance, Bingo AI College (AI Education Practice Base), and ICH Digital Study Tours to build a comprehensive training system.",
};

const trainingTypes = [
  {
    icon: School,
    title: "University Collaborative Training",
    desc: "Co-build practical training bases with Alliance universities and Bingo AI College; jointly cultivate graduate/undergraduate students; offer AI + Cultural Digitalization electives.",
    tags: ["Alliance universities", "Credit exchange", "Joint supervision", "AI + Cultural Digitalization"],
  },
  {
    icon: Globe,
    title: "ICH Inheritor Development",
    desc: "In partnership with the Alliance and ICH Digital Study Tours, deliver digital-skills training for ICH inheritors, organise study-tour lectures, and promote teacher–student paired inheritance.",
    tags: ["Digital capability training", "Paired inheritance", "Study-tour practice", "Digital archive building"],
  },
  {
    icon: Users,
    title: "Professional & Social Talent Training",
    desc: "Targeted training for cultural tourism, museum, and creative industries professionals, building talent pipelines with the Alliance, Bingo AI College, and ICH Digital Study Tours.",
    tags: ["Cultural tourism", "Museums", "Creative enterprises", "Talent placement"],
  },
  {
    icon: Award,
    title: "Alliance Special Training",
    desc: "Through the Alliance, implement the 'Bashu Culture Young Scholars Programme' and 'ICH Inheritor-Student Paired Training Project' among other specialised talent initiatives.",
    tags: ["Young scholars", "Paired training", "Alliance collaboration", "Cross-campus resources"],
  },
  {
    icon: Cpu,
    title: "AI Training Special Track",
    desc: "Leveraging Bingo AI College · AI Education Practice Base to deliver AI education training and cultivate AI + Cultural Digitalization composite talent for industry placement.",
    tags: ["AI cultural creativity", "AIGC applications", "Curriculum development", "Directed placement"],
  },
];

const bingoCourses = [
  { title: "Jewellery in Classical Texts", desc: "Exploring the historical texts behind traditional jewellery and simulating the production process with digital design tools." },
  { title: "Red Lacquerware Craft", desc: "Digital presentation of Chengdu lacquer craft processes, experiencing the modern transformation of traditional lacquer culture." },
  { title: "The Artisan's Woodwork", desc: "Digital modelling of traditional wooden structures to appreciate the ingenuity of Bashu architecture and furniture." },
  { title: "Brushstroke & Ink", desc: "Using digital painting tools to inherit the brushwork spirit of Bashu traditional calligraphy and painting." },
];

const ichInheritors = [
  { craft: "Sichuan Opera Face-changing", level: "National", desc: "National ICH representative inheritor; participates in the Institute's Sichuan Opera digital recording and AI demonstration project." },
  { craft: "Shu Brocade Weaving", level: "Provincial", desc: "Provincial ICH representative inheritor; leads digitisation of Shu brocade patterns and AI-assisted design research." },
  { craft: "Chengdu Lacquer Art", level: "Provincial", desc: "Provincial ICH representative inheritor; involved in Lacquerware Craft digital course development and practical instruction." },
  { craft: "Bamboo Weaving", level: "Municipal", desc: "Municipal ICH representative inheritor; participates in ICH digital study-tour curriculum design and field instruction." },
  { craft: "Sichuan Shadow Puppetry", level: "Provincial", desc: "Provincial ICH representative inheritor; participates in 3D digital restoration and immersive exhibition of shadow puppetry." },
  { craft: "Tibetan-Qiang-Yi Embroidery", level: "National", desc: "National ICH representative inheritor; contributed to the compilation and digital recording of Chinese Ethnic Minority Clothing Culture & Craft." },
];

const trainingBases = [
  { name: "Xinhua Wenxuan", role: "Cultural & Education Publishing", desc: "Deep expertise in digital publishing and educational resource distribution; co-developing digital textbooks and curriculum resource packages." },
  { name: "Sichuan New Media Group", role: "Media & Communication", desc: "Joint new-media operations training; building agri-cultural-tourism IP short-video matrices to improve student employment prospects." },
  { name: "Chengdu Media Group", role: "Media & Communication", desc: "Collaborative media training base; conducting digital cultural communication and IP incubation joint training." },
  { name: "Bingo AI College (AI Education Practice Base)", role: "Digital Technology Education", desc: "The Institute's designated AI Education Practice Base for AIGC ICH courses, AI digital study tours, and youth digital literacy training." },
  { name: "Peking University", role: "Academic & Technical Support", desc: "Provides technical support for immersive cultural-tourism interaction, participating in the full-chain technology-engine research." },
  { name: "UESTC", role: "Academic & Technical Support", desc: "Co-developing AIGC general-education courses and training platforms, providing generative AI creative environments for students and faculty." },
  { name: "Sichuan Fine Arts Institute", role: "Art & Design", desc: "Joint Bashu cultural digital art design training; providing artistic expertise for creative prototype R&D and ICH aesthetics research." },
  { name: "Sichuan University", role: "Academic Research", desc: "Collaborative research on Bashu cultural studies and digital humanities; advancing cultural research cooperation across the Chengdu-Chongqing region." },
];

export default function TalentCultivationENPage() {
  return (
    <>
      <PageHero
        title="Talent Development"
        subtitle="Academic Leadership · Industry-Education Integration · ICH Inheritance · AI Empowerment"
        desc="Drawing on the Bashu Culture Creative (Digital) Industry-Education Alliance, Bingo AI College (AI Education Practice Base), and ICH Digital Study Tours, we have built a six-in-one talent cultivation system encompassing academic research, digital technology, industry-education practice, Alliance collaboration, AI empowerment, and study-tour implementation."
      />

      <Section title="Six-in-One Training System" subtitle="Academic standards as the guide; practical implementation as the goal">
        <div className="mx-auto max-w-3xl space-y-4 text-muted text-center mb-10">
          <p>
            The Institute's talent cultivation system is anchored in academic research, supported by the industry-education Alliance, delivered through Bingo AI College as the AI Education Practice Base, and grounded in ICH Digital Study Tours as a practical carrier.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainingTypes.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <Icon className="h-9 w-9 text-bashu-bronze" />
                <h3 className="mt-3 font-serif text-base font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{t.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-bashu-bronze/10 px-3 py-1 text-xs font-medium text-bashu-bronze">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Bingo AI College · AI Education Practice Base" subtitle="Designated AI Education Practice Base of Bashu Culture Digital Research Institute" bg="paper">
        <div className="mx-auto max-w-3xl space-y-4 text-muted mb-10">
          <p>
            Bingo AI College, operated by Sichuan Cuiya Education Technology, is the Institute&apos;s designated <strong className="text-ink">AI Education Practice Base</strong>. The Institute provides academic leadership, curriculum development guidance, and resource support, driving AI training implementation, talent placement, and technology transfer at the base.
          </p>
          <p>
            Leveraging AI and digital technology to innovate traditional cultural activation, the programme has achieved cross-regional, multi-scenario large-scale implementation across Sichuan, Beijing, Guangdong, and Xinjiang — reaching primary and secondary schools, communities, study-tour bases, cultural-tourism attractions, and off-campus institutions.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-serif text-lg font-semibold text-ink mb-4">Bingo Classroom · ICH Digital Premium Courses</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bingoCourses.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
                <BookOpen className="h-7 w-7 text-bashu-bronze mb-2" />
                <h4 className="font-semibold text-sm text-ink">{c.title}</h4>
                <p className="mt-2 text-xs text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-serif text-lg font-semibold text-ink mb-4">Advanced Technology & Practice Courses</h3>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { title: "AIGC Cultural Creativity Training", desc: "Co-developed with UESTC, covering AIGC applications in Bashu cultural creative design and digital character development. 2,000 open placements per year." },
              { title: "VR/AR Experience Design Training", desc: "Based on major projects such as Cloud-view Long March, teaching immersive scene construction and multi-modal interaction technology." },
              { title: "Cultural Big-Data Practice", desc: "Learning cultural resource data annotation, rights verification, and digital asset management, interfacing with the cultural digital art trading platform." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
                <Cpu className="h-7 w-7 text-bashu-bronze mb-2" />
                <h4 className="font-semibold text-sm text-ink">{c.title}</h4>
                <p className="mt-2 text-xs text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Bashu ICH Inheritors" subtitle="Digital inheritance · Academic cultivation · Practical implementation">
        <div className="mx-auto max-w-3xl space-y-4 text-muted mb-10">
          <p>
            In partnership with the Alliance and ICH Digital Study Tours, the Institute places ICH inheritor digital cultivation at the core of its talent development programme, encompassing digital-skills training, teacher–student paired inheritance, ICH arts in campus activities, and study-tour instruction.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ichInheritors.map((person, i) => (
            <div key={i} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Microscope className="h-7 w-7 text-bashu-bronze shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm text-ink">{person.craft}</h4>
                  <span className="rounded-full bg-bashu-teal/15 px-2 py-0.5 text-xs font-medium text-bashu-teal">{person.level}</span>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">{person.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Training Bases & Strategic Partners" subtitle="Government-industry-university-enterprise collaboration" bg="paper">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainingBases.map((b, i) => (
            <div key={i} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
              <span className="inline-block rounded-full bg-bashu-bronze/10 px-3 py-0.5 text-xs font-medium text-bashu-bronze mb-2">{b.role}</span>
              <h4 className="font-semibold text-sm text-ink">{b.name}</h4>
              <p className="mt-2 text-xs text-muted leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Training Outcomes" subtitle="Industry implementation under academic guidance">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Digital Premium Courses", value: "4 courses / 30 hrs", note: "Jewellery in Classical Texts, Red Lacquerware Craft, The Artisan's Woodwork, Brushstroke & Ink — all available online." },
            { label: "Cumulative Online Learners", value: "3,000+", note: "Covering 8 primary/secondary schools and 5 communities in Chengdu, including Jinfeng and Donghu Lake communities." },
            { label: "AI Training Placements", value: "2,000/year", note: "Open to Alliance universities and partner institutions; directed talent placement for industry." },
            { label: "Study-Tour Regions", value: "4 regions", note: "Sichuan, Beijing, Guangdong, Xinjiang — reaching schools, communities, bases, and scenic areas." },
            { label: "Alliance Coverage", value: "21 cities in Sichuan", note: "Unified supply chain and standard value system, driving talent cultivation across the province." },
            { label: "Online Classroom Aid Teaching", value: "Liangshan & beyond", note: "Digital cultural courses deployed in Liangshan Prefecture and other areas to support balanced education." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-snow p-6 shadow-sm text-center">
              <div className="font-serif text-2xl font-bold text-bashu-bronze">{item.value}</div>
              <div className="mt-1 font-semibold text-sm text-ink">{item.label}</div>
              <p className="mt-2 text-xs text-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Collaboration & Contact Channels" subtitle="Academic review first · Professional liaison" bg="paper">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: School, title: "University Collaboration", desc: "For Alliance universities and partner institutions seeking joint cultivation, shared training bases, or co-curriculum development. Please submit institutional credentials and a letter of intent for review." },
            { icon: Globe, title: "ICH Inheritor Development", desc: "For ICH inheritors and protection units seeking digital training, paired inheritance, or study-tour instruction. Certification documents required." },
            { icon: Cpu, title: "AI Training Track", desc: "Training placements via Bingo AI College · AI Education Practice Base open to partner institution students and social learners. Apply through official channels for review and scheduling." },
            { icon: Award, title: "Alliance Special Programmes", desc: "Young Scholars Programme and AI + Cultural Digitalization Training projects open to Alliance member institutions. Welcome applications for special training placements." },
            { icon: Users, title: "Professional Training", desc: "Specialised training for government officials, cultural-tourism enterprises, and museum institutions on digital cultural trade and urban aesthetics." },
            { icon: Microscope, title: "ICH Digital Study Tour", desc: "Providing ICH digital study-tour curricula and practice solutions for schools, communities, study-tour bases, and scenic areas." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <Icon className="h-9 w-9 text-bashu-bronze" />
                <h3 className="mt-3 font-serif text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 rounded-2xl border border-bashu-bronze/30 bg-bashu-bronze/5 p-6 text-center">
          <p className="text-sm text-muted">
            All collaboration applications undergo academic review. Engagements involving the Alliance, ICH inheritance, Bingo AI training, and ICH digital study tours require additional academic-credential verification.
          </p>
          <p className="mt-2 text-sm font-medium text-ink">
            Email: contact@digitalbashu.org.cn　Tel: 028-85769208
          </p>
        </div>
      </Section>
    </>
  );
}
