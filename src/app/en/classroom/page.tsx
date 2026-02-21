import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Sparkles, Cpu, Globe, Building2, FileText, Users, Briefcase, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Culture Classroom | Bashu Culture Digital Research Institute",
  description:
    "Bingo Classroom intangible heritage digital courses, AIGC training, VR/AR experience design. Partnering with Xinhua Wenxuan, UESTC, and others. 2,000 open training places available annually.",
};

const binngoCourses = [
  { id: "dianji", title: '"Jewelry in Ancient Texts"', desc: "Exploring the historical texts behind traditional jewelry, combining digital design tools to simulate the making process.", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80" },
  { id: "danqi", title: '"Vermillion Lacquerware"', desc: "Digitally presenting the traditional processes of Chengdu lacquer art, experiencing the modern transformation of da-qi culture.", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&q=80" },
  { id: "muyi", title: '"The Carpenter\'s Intent"', desc: "Using digital modeling to analyze traditional woodworking structures, discovering the ingenuity of Bashu architecture and furniture.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { id: "miaobi", title: '"Brushstrokes of Ink"', desc: "Using digital painting tools to transmit the brushwork and spirit of Bashu traditional calligraphy and painting.", image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80" },
];

const techCourses = [
  { title: "AIGC Cultural Creativity Training", desc: "Co-developed with UESTC, covering AIGC applications in Bashu cultural creativity design and digital character development.", icon: Cpu },
  { title: "VR/AR Experience Design Training", desc: 'Based on major projects like "Cloud View Long March", teaching immersive scene construction and multimodal interaction technology.', icon: Globe },
  { title: "Cultural Big Data Practice", desc: "Learning cultural resource data annotation, rights assessment, and digital asset management workflows.", icon: FileText },
];

const baseInfo = [
  { title: "Sichuan New Media Group & Chengdu Media Group", desc: "The Institute partners with major media groups through social media operations training bases, conducting agri-cultural-tourism IP short-video live streaming matrix marketing training to support high-quality graduate employment." },
  { title: "Xinhua Wenxuan", desc: "Partnering with Sichuan's leading publishing enterprise for deep collaboration in integrated publishing, cultural content digitization, and textbook development, driving Bashu cultural resources into high-quality publications." },
  { title: "Sichuan Fine Arts Institute", desc: "Collaborating with this renowned Chengdu-Chongqing arts institution to co-develop training courses in intangible heritage art transmission, cultural creativity design, and digital art creation, nurturing composite cultural industry talent." },
  { title: "Open Industry-Education Integration Base", desc: "Building a 14,000 sqm training district in Shuangliu District, Chengdu — including a 'Village Gaming Tech' esports event center and a new media operations base." },
];

export default function ClassroomPageEN() {
  return (
    <>
      <PageHero title="Culture Classroom" subtitle="Curriculum & Training Platform" />

      <Section title="Education & Training Resources" subtitle="Education & Training">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-center text-muted">
            <strong className="text-ink">Bashu Culture Digital Research Institute</strong> fully leverages its <strong className="text-ink">industry-education integration</strong> mechanism advantages, partnering with <strong className="text-ink">Xinhua Wenxuan</strong>, <strong className="text-ink">Sichuan New Media Group</strong>, <strong className="text-ink">Chengdu Media Group</strong>, and <strong className="text-ink">Sichuan Cuiya Education (Bingo Classroom)</strong> as core strategic partners to build a comprehensive, multi-tiered digital cultural curriculum — from foundational digital literacy and intangible heritage digital transmission to high-end industry project training.
          </p>
          <p className="text-center text-muted">
            The system draws on <strong className="text-ink">Xinhua Wenxuan's</strong> deep cultural publishing and educational service foundation, combines the communication matrix and social media operations capabilities of <strong className="text-ink">Sichuan New Media Group</strong> and <strong className="text-ink">Chengdu Media Group</strong>, and integrates <strong className="text-ink">Sichuan Cuiya Education's</strong> mature AI digital study-tour curriculum model — aiming to build a nationally leading digital cultural talent development hub and promote universal access to Bashu cultural digital achievements.
          </p>
        </div>
      </Section>

      <Section title="Strategic Partners" subtitle="Integrating industry-leading resources under the national cultural digitization strategy">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { type: "Cultural Education & Publishing", org: "Xinhua Wenxuan", fields: "Digital publishing, education resource distribution & textbook development" },
              { type: "Media & Communications", org: "Sichuan New Media / Chengdu Media", fields: "New media matrix operations, IP monetization, employment training" },
              { type: "Digital Technology Education", org: "Sichuan Cuiya Education (Bingo Classroom)", fields: "AIGC intangible heritage courses, AI digital study tours, youth digital literacy" },
              { type: "Academic & Technical Support", org: "Peking University / UESTC", fields: "Immersive interaction technology, AIGC training platform infrastructure" },
            ].map(({ type, org, fields }, i) => (
              <div key={i} className="rounded-2xl border border-border bg-snow p-5 shadow-sm transition hover:border-bashu-bronze/30 hover:shadow-md">
                <p className="text-xs font-medium uppercase tracking-wider text-brocade-gold">{type}</p>
                <p className="mt-1 font-serif font-semibold text-ink">{org}</p>
                <p className="mt-2 text-sm text-muted">{fields}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Bingo Classroom Series" subtitle="Intangible Heritage Digital Courses · Developed by Sichuan Cuiya Education Technology">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-muted">Leveraging AI and digital technology to drive creative revitalization of traditional culture. The project has scaled across regions and scenarios, covering Sichuan, Beijing, Guangdong, Xinjiang and beyond — entering primary schools, communities, study-tour bases, cultural tourism venues, and off-campus institutions, building a replicable, scalable new model for digital cultural heritage transmission.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {binngoCourses.map((course) => (
              <article key={course.id} className="group overflow-hidden rounded-2xl border border-border bg-snow shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={course.image} alt={course.title} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                    <span className="rounded-full border border-snow bg-snow/20 px-4 py-2 text-sm font-medium text-snow backdrop-blur">Preview Course</span>
                  </div>
                  <div className="absolute left-3 top-3 rounded-full bg-brocade-gold/90 px-2.5 py-0.5 text-xs font-medium text-ink">Bingo Classroom</div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-ink">{course.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{course.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Advanced Technology & Practice Courses" subtitle="High-end training and project-driven learning">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {techCourses.map((course, i) => (
              <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md">
                <div className="w-fit rounded-xl bg-bashu-bronze/10 p-3">
                  <course.icon className="h-6 w-6 text-bashu-bronze" />
                </div>
                <h3 className="mt-4 font-serif font-semibold text-ink">{course.title}</h3>
                <p className="mt-2 text-sm text-muted">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Student Work Exhibition" subtitle="AIGC Creations & Training Outcomes">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-center text-muted">Showcasing digital artworks, 3D models, and cultural creativity designs produced by students through AIGC during training.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-border bg-paper-warm/50 text-muted">
                <span className="text-sm">Work display slot</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted">More works will be added. Stay tuned.</p>
        </div>
      </Section>

      <Section title="Training Bases & Partnership Background" subtitle="Industry-education integration ecosystem">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {baseInfo.map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper-warm p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-bashu-bronze" />
                  <h3 className="font-serif font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="mt-4 text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">The training base is located in Shuangliu District, Chengdu — accessible via Metro Line 5 Qilong Station.</p>
        </div>
      </Section>

      <Section title="Learning Resources & Enrollment" subtitle="Resources & Enrollment">
        <div className="mx-auto max-w-4xl space-y-10">
          <div>
            <h3 className="mb-4 font-medium text-ink">Learning Resources</h3>
            <div className="space-y-3">
              {[
                { title: "Bingo Classroom Online Platform", desc: "Provides 4 intangible heritage handicraft digital courses, supporting 30+ class hours of self-study." },
                { title: "AIGC Training Platform", desc: "Co-developed by the Institute and UESTC, providing a generative AI creation environment for faculty and students." },
                { title: "Digital Study-Tour Handbook", desc: "Documents including the 'Bingo Digital Study-Tour Solution' available for download, with virtual study routes and case studies." },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-snow p-4">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-brocade-gold" />
                  <div>
                    <p className="font-medium text-ink">{r.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-medium text-ink">Enrollment</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Student Training Application", desc: "Open to students at partner institutions. Approximately 2,000 open industry-education integration practice places are available annually.", icon: Users },
                { title: "Social Training Enrollment", desc: "Specialized training for government officials and corporate staff in digital cultural trade and urban aesthetics.", icon: Briefcase },
              ].map((opt, i) => (
                <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                  <opt.icon className="h-6 w-6 text-bashu-bronze" />
                  <h4 className="mt-3 font-serif font-semibold text-ink">{opt.title}</h4>
                  <p className="mt-2 text-sm text-muted">{opt.desc}</p>
                  <Link href="/en/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-bashu-bronze hover:underline">
                    Apply Now <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-bashu-bronze/30 bg-paper-warm p-8 text-center">
            <p className="font-medium text-ink">Enquiries & Enrollment</p>
            <p className="mt-2 text-sm text-muted">Visit <Link href="/en/contact" className="mx-1 text-bashu-bronze underline hover:text-bashu-bronze-light">Contact Us</Link> to submit a training application or enquire about Bingo Classroom.</p>
            <div className="mt-6 flex justify-center">
              <Link href="/en/contact" className="inline-flex items-center gap-2 rounded-full border border-bashu-bronze bg-bashu-bronze px-6 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light">
                <BookOpen className="h-4 w-4" />
                Submit Enquiry / Apply
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
