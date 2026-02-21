import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Bashu Culture Digital Research Institute",
  description:
    "Contact the Bashu Culture Digital Research Institute. Address: No. 399 Jinjiang Road Section 4, Yixin Street, Shuangliu District, Chengdu. Tel: 028-85769208.",
};

export default function ContactPageEN() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We welcome school-enterprise partnerships, industry-education projects, academic exchange, and digital cultural innovation partners"
      />
      <Section title="Cooperation & Enquiries" subtitle="We welcome enquiries in the following areas">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-3 rounded-xl border border-border bg-paper-warm p-6">
            <p className="text-muted">
              The Institute is committed to the panoramic presentation of Bashu culture and universal access to digital achievements. We warmly welcome cooperation in the following areas:
            </p>
            <ul className="list-inside list-disc space-y-1.5 text-muted">
              <li>School-enterprise collaboration and industry-education integration projects (city-level consortiums, AIGC training platform co-development, etc.)</li>
              <li>Joining the Bashu Cultural Creativity (Digital) Industry-Education Alliance and resource matchmaking</li>
              <li>Cultural digitization, digital collectibles, immersive cultural tourism R&D and project partnerships</li>
              <li>Academic exchange, joint research topics, and publication collaboration</li>
              <li>Red culture and ethnic minority cultural heritage protection and dissemination partnerships</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section title="Contact Information" subtitle="Address, Phone & Email">
        <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-border bg-snow p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">Address</p>
              <p className="text-muted">
                No. 399 Jinjiang Road Section 4, Yixin Street, Shuangliu District, Chengdu
                <span className="mt-1 block text-sm">(Sichuan Vocational College of Cultural Industries — accessible via Metro Line 5 Qilong Station)</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">Phone</p>
              <p className="text-muted">
                028-85769208 (Main switchboard)
                <span className="mt-1 block text-sm">028-85769752, 028-85766716 (Admissions enquiries)</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">Email</p>
              <p className="text-muted">contact@digitalbashu.org.cn</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
