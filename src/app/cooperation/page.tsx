import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "合作交流 | 巴蜀文化数字研究院",
  description:
    "产学研用一体化，共建巴蜀文化数字生态。四大合作方向：产学研合作、企业合作、机构合作、国际合作。典型合作案例、行业活动，诚邀各方共建巴蜀文化数字化传承体系。",
};

const DIRECTIONS = [
  {
    icon: "🎓",
    title: "产学研合作",
    desc: "与省内外顶尖高校合作开展巴蜀文化数字化研究、人才培养项目，共建AIGC实训平台与文化数字化课程体系。",
    tags: ["高校合作", "联合科研", "人才培养", "课程共建"],
  },
  {
    icon: "🏢",
    title: "企业合作",
    desc: "与文创、文旅、数字技术企业合作开发项目，共享巴蜀文化资源数据库，开展IP孵化与联合运营。",
    tags: ["项目合作", "IP孵化", "联合运营", "技术对接"],
  },
  {
    icon: "🏛",
    title: "机构合作",
    desc: "与各地文旅局、文化机构、非遗保护中心合作开展文化传承与数字化保护项目，共建文化资源共享平台。",
    tags: ["文旅机构", "文博合作", "非遗保护", "资源共享"],
  },
  {
    icon: "🌐",
    title: "国际合作",
    desc: "与海外巴蜀文化研究机构、国际文化组织合作，推动巴蜀文化国际化传播，讲好中国文化故事。",
    tags: ["海外机构", "国际组织", "文化传播", "跨境合作"],
  },
];

const CASES = [
  {
    category: "产学研",
    partner: "产教联盟高校群",
    title: "巴蜀文化数字化人才培养项目",
    desc: "联合四川大学、电子科技大学、四川师范大学等多所高校，共建巴蜀文化数字化专业课程体系，培养复合型文化产业人才，推动产教融合落地。",
  },
  {
    category: "政企合作",
    partner: "四川省文旅厅",
    title: "数字文旅示范项目",
    desc: "与四川省、市文旅局合作开展景区数字化升级，将三星堆、川剧等巴蜀文化资源转化为沉浸式文旅体验，打造省级文化数字化示范案例。",
  },
  {
    category: "企业合作",
    partner: "缤果AI学院",
    title: "巴蜀文化AI教育实践基地",
    desc: "与缤果AI学院深度合作，建立「巴蜀文化数字研究院AI教育实践基地」，联合研发AI文化创意实训课程，培育AI+文化数字化复合型人才并定向产业输送。",
  },
];

const EVENTS = [
  {
    statusLabel: "论坛即将举办",
    statusColor: "bg-bashu-teal/10 text-bashu-teal",
    timeLabel: "2026年下半年",
    title: "2026巴蜀文化数字化发展论坛",
    desc: "聚焦巴蜀文化数字化前沿趋势，汇聚政产学研各方力量，共探巴蜀文化数字化传承与产业落地新路径。",
  },
  {
    statusLabel: "大赛开放报名",
    statusColor: "bg-brocade-gold/15 text-brocade-gold",
    timeLabel: "常年开放",
    title: "巴蜀文化数字创意大赛",
    desc: "面向全国青年的巴蜀文化数字创意大赛，征集优秀文化IP设计、数字艺术作品与创新解决方案，优秀作品纳入研究院成果库。",
  },
  {
    statusLabel: "研讨定期举办",
    statusColor: "bg-bashu-bronze/10 text-bashu-bronze",
    timeLabel: "季度举办",
    title: "非遗数字化传承研讨会",
    desc: "聚焦巴蜀非遗数字化保护技术与实践，促进政府、学界、业界深度交流，产教联盟成员优先参与。",
  },
];

export default function CooperationPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-paper to-snow py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">合作交流</h1>
          <p className="mt-3 text-lg text-muted">
            产学研用一体化，共建巴蜀文化数字生态
          </p>
        </div>
      </section>

      {/* 合作方向 */}
      <section className="bg-snow py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">合作方向</h2>
            <p className="mt-2 text-muted">四大合作方向，全面开放，快速对接</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIRECTIONS.map((dir) => (
              <div
                key={dir.title}
                className="group flex flex-col rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="mb-4 text-3xl">{dir.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-ink">{dir.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{dir.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {dir.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作案例 */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">合作案例</h2>
            <p className="mt-2 text-muted">已有合作项目，共建巴蜀文化数字生态</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {CASES.map((c) => (
              <div
                key={c.title}
                className="flex flex-col rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-bashu-bronze/10 px-3 py-0.5 text-xs font-medium text-bashu-bronze">
                    {c.category}
                  </span>
                  <span className="text-xs text-muted">{c.partner}</span>
                </div>
                <h3 className="font-serif text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 行业活动 */}
      <section className="bg-snow py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">行业活动</h2>
            <p className="mt-2 text-muted">巴蜀文化数字化论坛、研讨会、文创大赛</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {EVENTS.map((ev) => (
              <div
                key={ev.title}
                className="flex flex-col rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className={`rounded-full px-3 py-0.5 text-xs font-medium ${ev.statusColor}`}>
                    {ev.statusLabel}
                  </span>
                  <span className="text-xs text-muted">{ev.timeLabel}</span>
                </div>
                <h3 className="font-serif text-base font-semibold text-ink">{ev.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{ev.desc}</p>
                <button
                  type="button"
                  className="mt-5 rounded-full border border-bashu-bronze px-5 py-2 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
                >
                  立即报名
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 申请合作 CTA */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-snow sm:text-3xl">申请合作</h2>
          <p className="mt-3 text-snow/70">
            填写合作申请，我们将在3个工作日内与您联系
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="rounded-full bg-brocade-gold px-8 py-3 text-sm font-semibold text-ink transition hover:bg-brocade-gold/85"
            >
              提交合作申请
            </button>
            <Link
              href="/contact"
              className="rounded-full border border-snow/30 px-8 py-3 text-sm font-medium text-snow transition hover:border-snow/60 hover:bg-snow/10"
            >
              联系我们
            </Link>
          </div>
          <p className="mt-6 text-sm text-snow/40">
            或直接联系：contact@digitalbashu.org.cn
          </p>
        </div>
      </section>
    </>
  );
}
