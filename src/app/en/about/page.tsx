import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "About Us | Bashu Culture Digital Research Institute",
  description:
    "The Bashu Culture Digital Research Institute is a high-level academic and industry integration platform established under the guidance of the Sichuan and Chongqing Propaganda Departments to advance China's national cultural digitization strategy.",
};

export default function AboutPageEN() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Where digital technology awakens ancient Bashu culture, and cultural heritage lights the way forward"
      />
      <Section title="Institute Overview" subtitle="Inheritance · Innovation · Collaboration · Inclusiveness · Professionalism">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            The Bashu Culture Digital Research Institute was established under the joint guidance of the Sichuan Provincial Committee Publicity Department and the Chongqing Municipal Committee Publicity Department, in order to implement the national strategies of the "Chengdu-Chongqing Dual-City Economic Circle" and the "National Cultural Digitization Strategy." The Institute is anchored in a national-level industry-education integration practice base, dedicated to excavating, reconstructing, and disseminating the rich heritage of Bashu culture through cutting-edge digital technology.
          </p>
          <p>
            Bashu culture is an integral part of China's excellent traditional culture, encompassing the mysterious and splendid Sanxingdui-Jinsha civilization, the magnificent Red Army Long March culture, the exquisite intangible cultural heritage crafts, and the open and inclusive cultural heritage of the Tibetan, Qiang, and Yi communities. The Institute not only carries the academic mission of preserving and transmitting Bashu culture in a digital context, but also leverages the collaborative advantage of a "government-industry-school-enterprise" multi-stakeholder model to lead the transformation of cultural resources into digital assets.
          </p>
        </div>
      </Section>
      <Section title="Leadership & Framework" subtitle="Research · Digital Projects · Integrated Publishing · Cross-sector Collaboration">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            The Institute is led by Sichuan Vocational College of Cultural Industries, with Professor Chen Jianwen serving as Executive Dean. Building on its academic foundation, the Institute has developed a four-wheel-drive development framework: <strong className="text-ink">Academic Research + Digital Projects + Integrated Publishing + Cross-sector Collaboration</strong>. Key initiatives include the "Cloud View Long March" digital interactive project, Bashu culture AI short drama productions, and the nationally significant publication <em>Costumes and Crafts of China's Ethnic Minorities: The Qiang People</em>.
          </p>
        </div>
      </Section>
      <Section title="Industry-Education Integration & Alliance" subtitle="A Unified Ecosystem of Research, Education, Industry, and Application">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            As a committed driver of the national cultural digitization strategy and industry-education integration, the Institute founded the <strong className="text-ink">"Bashu Cultural Creativity (Digital) Industry-Education Alliance"</strong>, partnering with <strong className="text-ink">Xinhua Wenxuan</strong>, Sichuan New Media Group, Chengdu Media Group, and Sichuan Cuiya Education among other industry leaders, to deepen school-enterprise collaboration.
          </p>
          <p>
            By establishing a <strong className="text-ink">"government-industry-school-enterprise" multi-stakeholder governance model</strong>, the Institute has successfully built a <strong className="text-ink">full-chain ecosystem</strong> integrating academic research, digital projects, training, and social service. Through landmark achievements such as the "Cloud View Long March" interactive platform, the "Bingo Classroom" intangible heritage digital curriculum, and the <strong className="text-ink">Bashu Cultural Creativity District</strong>, the Institute continues converting cultural resources into nationally competitive digital assets and new cultural business formats, amplifying Bashu culture's social reach and supporting high-quality regional economic development.
          </p>
        </div>
      </Section>
    </>
  );
}
