import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Outcomes | Bashu Culture Digital Research Institute",
  description:
    "Core outputs across digital projects, integrated publishing, industry-education integration, and social service — including the Cloud View Long March, Shenyi Exchange, and Bingo Classroom.",
};

export default function OutcomesPageEN() {
  return (
    <>
      <PageHero title="Outcomes" subtitle="Digital achievements and landmark cases" />

      <Section title="Major Digital Project Outcomes" subtitle="Digital Projects · Core hard-power outputs presenting Bashu culture in full panorama">
        <div className="mx-auto max-w-4xl space-y-6">
          {[
            { title: '"Cloud View Long March" Digital Interactive Project', desc: 'Using AR/VR/AI fusion technology to build an integrated Long March cultural digital interactive platform for education, exhibition, and experience — driving a full-chain technical engine of "build-fuse-interact-present-evaluate".' },
            { title: 'Cultural Digital Artwork Trading Platform (Shenyi Exchange)', desc: 'Phase one construction completed and operational, incorporated into the key support scope of the National Cultural Big Data Trading Center.' },
            { title: 'Bashu Cultural Digital Resource Library', desc: 'Conducting cultural data annotation and asset rights confirmation, transforming Bashu intangible cultural heritage digital resources into cultural digital assets.' },
            { title: 'Bashu Cultural Creativity District', desc: 'Building an open industry-education integration practice base, including an urban agri-cultural-tourism brand release center, "Village Gaming Tech" esports event center, and other new digital cultural formats.' },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Integrated Publishing & Academic Research" subtitle="Publications & Research · Professional depth in cultural content digitization">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">National Key Publications</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="rounded-xl border border-border bg-paper-warm p-4"><em>Costumes and Crafts of China's Ethnic Minorities: The Qiang People</em> (included in the 14th Five-Year National Key Book Publishing Plan)</li>
              <li className="rounded-xl border border-border bg-paper-warm p-4"><em>Series on Traditional Chinese Handicraft Techniques</em> (Vol. 1 & 2)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">Academic Exchange & Think-Tank Development</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li>Publishing the <em>Bashu Culture Digital Research Institute Work Bulletin</em>, systematically documenting the digital transformation practice journey.</li>
              <li>Participating in national Ministry of Culture and Tourism derivative research topics such as "Immersive Cultural Tourism Experience Technology Integration and Scene Innovation."</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Digital Education & Industry-Education Integration" subtitle="Education & Integration · Unified ecosystem of research, education, industry, and application">
        <div className="mx-auto max-w-4xl space-y-6">
          {[
            { title: 'Digital Featured Curriculum Development', desc: 'Completed 4 digital courses in the intangible heritage handicraft series (30 class hours): "Jewelry in Ancient Texts", "Vermillion Lacquerware", "The Carpenter\'s Intent", and "Brushstrokes of Ink".' },
            { title: 'AI-Empowered Training Platform', desc: 'Co-developed an AIGC general elective course and training platform with the University of Electronic Science and Technology, enhancing student AI literacy.' },
            { title: 'Industry-Education Alliance Ecosystem', desc: 'Founded the "Bashu Cultural Creativity (Digital) Industry-Education Alliance", connecting 21 city-level regions across Sichuan, and building a unified supply chain and standards value system.' },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Social Service & Cultural Outreach" subtitle="Social Service · Universal access to digital cultural achievements">
        <div className="mx-auto max-w-4xl space-y-6">
          {[
            { title: '"Air Classroom" Educational Support Service', desc: 'Bringing digital cultural courses to Liangshan Prefecture and other areas, supporting balanced educational development.' },
            { title: 'Community & Campus Outreach', desc: 'Digital courses have entered 8 primary and secondary schools and 5 communities in Chengdu (including Jinfeng Community and Donganhu Community), with cumulative online learners exceeding 3,000.' },
            { title: 'Silver Economy Research', desc: 'Developing specialized digital study-tour courses targeting elderly care needs, driving digital transformation in aging education.' },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
