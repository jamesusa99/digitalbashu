import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "联系我们 | 巴蜀文化数字研究院",
  description:
    "巴蜀文化数字研究院联系方式。地址：成都市双流区怡心街道锦江路四段399号。电话：028-85769208。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="联系我们"
        subtitle="欢迎洽谈合作与咨询"
      />
      <Section title="联系方式" subtitle="地址、电话与邮箱">
        <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-border bg-snow p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">地址</p>
              <p className="text-muted">
                成都市双流区怡心街道锦江路四段399号
                <span className="mt-1 block text-sm">（四川文化产业职业学院，地铁5号线骑龙站可达）</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">电话</p>
              <p className="text-muted">
                028-85769208（学校总机）
                <span className="mt-1 block text-sm">028-85769752、028-85766716（招生咨询）</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">邮箱</p>
              <p className="text-muted">contact@digitalbashu.org.cn</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
