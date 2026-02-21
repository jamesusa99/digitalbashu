import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "About Us | Bashu Culture Digital Research Institute",
  description:
    "Guardian of the Digital Cultural Vein & Engine of the Twin-City Economy. Established under the Sichuan and Chongqing Propaganda Departments to advance the Chengdu-Chongqing Dual-City Economic Circle and China's National Cultural Digitization Strategy.",
};

export default function AboutPageEN() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Guardian of the Digital Cultural Vein & Engine of the Twin-City Economy"
      />

      {/* I. Strategic Positioning */}
      <Section title="Strategic Positioning" subtitle="Serving the National Strategic Hinterland, Building a New Digital Stronghold">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            The Bashu Culture Digital Research Institute was established under the joint guidance of the Sichuan Provincial Committee Publicity Department and the Chongqing Municipal Committee Publicity Department. It serves as a core vehicle for deeply implementing the national strategies of the{" "}
            <strong className="text-ink">"Chengdu-Chongqing Dual-City Economic Circle"</strong>{" "}
            and the{" "}
            <strong className="text-ink">"National Cultural Digitization Strategy."</strong>
          </p>
          <p>
            Sichuan is a strategically vital province and a cornerstone of China's national rejuvenation. The Institute is deeply aware of the cultural resilience behind the saying "as long as Sichuan stands, China endures." Rooted in this strategically significant, populous province, we are committed to leveraging cutting-edge digital technology to transform the cultural DNA of this heroic land into{" "}
            <strong className="text-ink">new quality productive forces</strong>
            , providing lasting digital cultural momentum for high-quality development in western China.
          </p>
        </div>
      </Section>

      {/* II. Cultural Foundation */}
      <Section title="Cultural Foundation" subtitle="A Lens on Every Mountain and River — Documenting a Millennium of Cultural Heritage">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>Bashu culture, as a vital component of Chinese civilization, has nurtured:</p>
          <ul className="space-y-4">
            <li className="rounded-xl border border-border bg-snow p-5">
              <p className="font-medium text-ink">Brilliant Civilization</p>
              <p className="mt-2">From the mysterious relics of Sanxingdui and Jinsha, to the waterway trade and navigation culture born at the confluence of great rivers.</p>
            </li>
            <li className="rounded-xl border border-border bg-snow p-5">
              <p className="font-medium text-ink">Red Cultural Legacy</p>
              <p className="mt-2">Sichuan was a key turning point of the Long March, carrying the heroic epic of "crossing the snow mountains and the grasslands."</p>
            </li>
            <li className="rounded-xl border border-border bg-snow p-5">
              <p className="font-medium text-ink">Masterful Intangible Heritage</p>
              <p className="mt-2">Millennia-old Shu brocade, lacquerware, and carvings — embodying the rich abundance and dynamic ingenuity of the Land of Abundance.</p>
            </li>
          </ul>
          <p>
            The Institute upholds the philosophy of{" "}
            <strong className="text-ink">"A Panoramic Lens on Bashu Culture — Digital Heritage, Shared by All,"</strong>{" "}
            using AI and VR/AR technology to "awaken" the cultural vein and breathe new life into millennia of history in the digital world.
          </p>
        </div>
      </Section>

      {/* III. Industry Synergy */}
      <Section title="Industry Synergy" subtitle="Gathering the Strength of the Fourth Pole — Co-creating Shared Value">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            By establishing a{" "}
            <strong className="text-ink">"government-industry-school-enterprise" multi-stakeholder governance model</strong>
            , the Institute founded the{" "}
            <strong className="text-ink">"Bashu Cultural Creativity (Digital) Industry-Education Alliance,"</strong>{" "}
            deeply connecting industry leaders and academic institutions:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 rounded-xl border border-border bg-snow p-4">
              <span className="shrink-0 rounded-full bg-bashu-bronze/10 px-2.5 py-0.5 text-xs font-medium text-bashu-bronze">Media</span>
              <span>Partnering with Sichuan New Media Group and Chengdu Media Group to build a new media traffic matrix and IP incubation base.</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-border bg-snow p-4">
              <span className="shrink-0 rounded-full bg-bashu-bronze/10 px-2.5 py-0.5 text-xs font-medium text-bashu-bronze">Publishing</span>
              <span>Collaborating with Xinhua Wenxuan to advance digital integrated publishing and efficient distribution of educational resources.</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-border bg-snow p-4">
              <span className="shrink-0 rounded-full bg-bashu-bronze/10 px-2.5 py-0.5 text-xs font-medium text-bashu-bronze">Education</span>
              <span>Partnering with Sichuan Cuiya Education (Bingo Classroom) to bring AI digital curricula to homes across the country.</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-border bg-snow p-4">
              <span className="shrink-0 rounded-full bg-bashu-bronze/10 px-2.5 py-0.5 text-xs font-medium text-bashu-bronze">Research</span>
              <span>Relying on leading institutions such as Sichuan University and UESTC to tackle immersive experience and AIGC core technology challenges.</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* IV. Future Vision */}
      <Section title="Future Vision" subtitle="Building a Model Digital Cultural Industry Cluster">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            Backed by the daily movement of millions of people between Chengdu and Chongqing and a combined GDP exceeding 10 trillion yuan, the Institute is accelerating major initiatives including{" "}
            <strong className="text-ink">"Cloud View Long March"</strong>{" "}
            and the Cultural Digital Asset Key Laboratory. We are not only recording history — we are using "digital technology to awaken Bashu's cultural vein," infusing the soul of innovation into this strategic cornerstone, and writing the digital chapter of the great rejuvenation of the Chinese nation.
          </p>
        </div>
      </Section>
    </>
  );
}
