import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Send, QrCode } from "lucide-react";

export const metadata: Metadata = {
  title: "联系我们 | 巴蜀文化数字研究院",
  description:
    "诚邀校企合作、产教融合项目、学术交流及文化数字化创新伙伴。地址：成都市双流区怡心街道锦江路四段399号（四川文化产业职业学院）。",
};

const COOPERATION_ITEMS = [
  { no: "1", text: "校企合作与产教融合项目（市域产教联合体、AIGC实训平台共建等）" },
  { no: "2", text: "巴蜀文化创意（数字）产教联盟加入与资源对接" },
  { no: "3", text: "文化数字化、数字藏品、沉浸式文旅等技术研发与项目合作" },
  { no: "4", text: "学术交流、联合课题及成果出版" },
  { no: "5", text: "红色文化、非遗文化、民族文化数字化保护与传播合作" },
];

const CHANNELS = [
  {
    icon: "🎓",
    title: "学术合作对接",
    desc: "联合研究、课程共建、实训基地合作、学术交流申请",
    contact: "academic@digitalbashu.org.cn",
  },
  {
    icon: "🎭",
    title: "非遗传承对接",
    desc: "非遗传承人培育、非遗数字化记录、非遗研学合作",
    contact: "feiyi@digitalbashu.org.cn",
  },
  {
    icon: "🤖",
    title: "AI实训对接",
    desc: "缤果AI学院·AI教育实践基地实训申请与课程咨询",
    contact: "aitraining@digitalbashu.org.cn",
  },
  {
    icon: "🏛",
    title: "产教联盟对接",
    desc: "联盟加入申请、联盟资源共享与学术联络咨询",
    contact: "alliance@digitalbashu.org.cn",
  },
  {
    icon: "🔬",
    title: "人才培养咨询",
    desc: "高校联合培养、社会专业人才培训、研学课程咨询",
    contact: "talent@digitalbashu.org.cn",
  },
  {
    icon: "🌐",
    title: "研学实践对接",
    desc: "非遗数字研学项目合作、研学课程定制与实践指导",
    contact: "studytour@digitalbashu.org.cn",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-paper to-snow py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">联系我们</h1>
          <p className="mt-3 text-lg text-muted">
            诚邀校企合作、产教融合项目、学术交流及文化数字化创新伙伴
          </p>
        </div>
      </section>

      {/* 合作与咨询 */}
      <section className="bg-snow py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-2">
            <h2 className="font-serif text-2xl font-bold text-ink">合作与咨询</h2>
            <p className="mt-1 text-muted">我们欢迎以下方向的洽谈</p>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-paper p-8">
            <p className="text-muted leading-relaxed">
              研究院致力于巴蜀文化全景呈现与数字化成果全民共享，诚挚欢迎各方在以下领域与我们开展合作：
            </p>
            <ul className="mt-6 space-y-3">
              {COOPERATION_ITEMS.map((item) => (
                <li key={item.no} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bashu-bronze/10 text-xs font-bold text-bashu-bronze">
                    {item.no}
                  </span>
                  <span className="text-muted leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="bg-paper py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-ink mb-8">联系方式</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 地址 */}
            <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-bashu-bronze/10 p-2.5">
                  <MapPin className="h-5 w-5 text-bashu-bronze" />
                </div>
                <p className="font-semibold text-ink">地址</p>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                成都市双流区怡心街道锦江路四段399号
              </p>
              <p className="mt-1 text-xs text-muted/70">
                四川文化产业职业学院 · 地铁5号线骑龙站可达
              </p>
            </div>

            {/* 电话 */}
            <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-bashu-bronze/10 p-2.5">
                  <Phone className="h-5 w-5 text-bashu-bronze" />
                </div>
                <p className="font-semibold text-ink">电话</p>
              </div>
              <p className="text-muted text-sm">028-85769208</p>
              <p className="mt-1 text-xs text-muted/70">学校总机（周一至周五 9:00–18:00）</p>
              <p className="mt-2 text-muted text-sm">028-85769752 / 028-85766716</p>
              <p className="mt-1 text-xs text-muted/70">招生咨询专线</p>
            </div>

            {/* 邮箱 */}
            <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-bashu-bronze/10 p-2.5">
                  <Mail className="h-5 w-5 text-bashu-bronze" />
                </div>
                <p className="font-semibold text-ink">邮箱</p>
              </div>
              <p className="text-muted text-sm break-all">contact@digitalbashu.org.cn</p>
              <p className="mt-1 text-xs text-muted/70">一般咨询与合作洽谈</p>
            </div>
          </div>
        </div>
      </section>

      {/* 六大专业对接通道 */}
      <section className="bg-snow py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-ink mb-2">专业对接通道</h2>
          <p className="text-muted mb-8">
            按需选择对应通道，快速对接相关负责人
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHANNELS.map((ch) => (
              <div
                key={ch.title}
                className="group rounded-2xl border border-border bg-paper p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="mb-3 text-2xl">{ch.icon}</div>
                <h3 className="font-serif text-base font-semibold text-ink">{ch.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{ch.desc}</p>
                <p className="mt-3 break-all text-xs text-bashu-bronze">{ch.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 在线咨询 & 意见反馈 & 关注我们 */}
      <section className="bg-paper py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* 在线咨询 */}
            <div className="rounded-2xl border border-border bg-snow p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-bashu-bronze/10 p-2.5">
                  <MessageCircle className="h-5 w-5 text-bashu-bronze" />
                </div>
                <h3 className="font-serif font-semibold text-ink">在线咨询</h3>
              </div>
              <p className="text-sm text-muted">工作时间实时响应</p>
              <p className="text-xs text-muted/70 mt-1">周一至周五 9:00–18:00</p>
              <button
                type="button"
                className="mt-5 rounded-full bg-bashu-bronze px-5 py-2 text-sm font-medium text-snow transition hover:bg-bashu-bronze/85"
              >
                发起在线咨询
              </button>
            </div>

            {/* 意见反馈 */}
            <div className="rounded-2xl border border-border bg-snow p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-bashu-bronze/10 p-2.5">
                  <Send className="h-5 w-5 text-bashu-bronze" />
                </div>
                <h3 className="font-serif font-semibold text-ink">意见反馈</h3>
              </div>
              <p className="text-sm text-muted">
                欢迎提交您对研究院网站、服务与活动的意见与建议，帮助我们持续改进。
              </p>
              <button
                type="button"
                className="mt-5 rounded-full border border-bashu-bronze px-5 py-2 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
              >
                提交反馈
              </button>
            </div>

            {/* 关注我们 */}
            <div className="rounded-2xl border border-border bg-snow p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-bashu-bronze/10 p-2.5">
                  <QrCode className="h-5 w-5 text-bashu-bronze" />
                </div>
                <h3 className="font-serif font-semibold text-ink">关注我们</h3>
              </div>
              <p className="text-sm text-muted">扫描二维码关注官方账号</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["微信公众号", "微博", "抖音"].map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted hover:border-bashu-bronze/50 hover:text-bashu-bronze cursor-pointer transition"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted/60">扫描二维码关注官方账号</p>
            </div>
          </div>
        </div>
      </section>

      {/* 地图区 */}
      <section className="bg-snow py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-ink mb-6">地图导航</h2>
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <div className="flex items-center justify-center bg-paper px-6 py-16 text-center">
              <div className="space-y-3">
                <MapPin className="mx-auto h-8 w-8 text-bashu-bronze" />
                <p className="font-semibold text-ink">成都市双流区怡心街道锦江路四段399号</p>
                <p className="text-sm text-muted">四川文化产业职业学院 · 地铁5号线骑龙站可达</p>
                <a
                  href="https://map.baidu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-bashu-bronze px-5 py-2 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
                >
                  打开地图导航
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
