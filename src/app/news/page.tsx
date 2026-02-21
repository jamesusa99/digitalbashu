import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "资讯动态 | 巴蜀文化数字研究院",
  description:
    "聚焦巴蜀文化数字化最新动态、行业政策、学术成果与活动资讯。研究院动态、产教融合进展、非遗传承成果、缤果AI学院实训动态，尽在资讯动态。",
};

const NEWS_ITEMS = [
  {
    date: "2026-02-18",
    tag: "研究院动态",
    title: "研究院与四川省文旅局签署巴蜀文化数字化战略合作协议",
    desc: "研究院与四川省文化和旅游厅正式签署巴蜀文化数字化战略合作协议，共同推动巴蜀文化资源数字化转型与文旅产业升级，打造全省文化数字化示范标杆。",
  },
  {
    date: "2026-02-10",
    tag: "活动预告",
    title: "2026巴蜀文化数字化发展论坛将于下半年举行",
    desc: "由研究院主办的2026巴蜀文化数字化发展论坛预计于2026年下半年举行，诚邀政产学研各方参与，共探巴蜀文化数字化传承与产业落地新路径。",
  },
  {
    date: "2026-01-28",
    tag: "成果快讯",
    title: "三星堆数字复原项目入选省级文化数字化示范案例",
    desc: "由研究院主导的三星堆文物数字化建模与复原项目正式入选四川省文化数字化示范案例，成为巴蜀古蜀文明数字化保护的标杆项目，为文博资源向数字资产转化提供参考。",
  },
  {
    date: "2026-01-15",
    tag: "行业政策",
    title: "国家文化数字化战略2026年度工作要点发布",
    desc: "文化和旅游部发布2026年度国家文化数字化战略工作要点，重点推进文化数据资产化、数字文旅新场景建设及非遗数字化传承等方向，研究院相关项目纳入重点支持范围。",
  },
  {
    date: "2026-01-08",
    tag: "研究院动态",
    title: "研究院与多所高校共建巴蜀文化数字教育课程体系",
    desc: "研究院与四川大学、电子科技大学、四川师范大学等多所高校签署合作协议，共建巴蜀文化数字化教育课程与AIGC实训平台，推动产教融合人才培养落地。",
  },
  {
    date: "2025-12-20",
    tag: "非遗传承",
    title: "川剧变脸数字化传承项目成果展示，传承人数字档案建设完成",
    desc: "研究院联合非遗传承人完成川剧变脸系列数字化档案建设，包含高清技艺记录视频、3D脸谱建模、传承人口述史等，研究院将持续推进川剧文化的数字化保护与传承。",
  },
  {
    date: "2025-12-05",
    tag: "产教融合",
    title: "缤果AI学院·AI教育实践基地新一期实训招募正式启动",
    desc: "依托缤果AI学院·巴蜀文化数字研究院AI教育实践基地，面向联盟内院校及社会学员开放新一期AI文化创意实训名额，重点培育AI+文化数字化复合型人才，推动定向产业输送。",
  },
  {
    date: "2025-11-18",
    tag: "成果快讯",
    title: "《中国少数民族服饰文化与传统技艺·羌族》正式出版发行",
    desc: "列入「十四五」国家重点图书出版规划的《中国少数民族服饰文化与传统技艺·羌族》正式出版，系研究院在融合出版与学术研究领域的重要成果，填补相关领域学术空白。",
  },
];

const ALL_TAGS = ["全部", "研究院动态", "行业政策", "文化资讯", "成果快讯", "活动预告", "非遗传承", "产教融合"];

const TAG_STYLE: Record<string, string> = {
  研究院动态: "bg-bashu-teal/10 text-bashu-teal",
  行业政策: "bg-bashu-bronze/10 text-bashu-bronze",
  文化资讯: "bg-brocade-gold/15 text-brocade-gold",
  成果快讯: "bg-bashu-teal/15 text-bashu-teal",
  活动预告: "bg-shu-red/10 text-shu-red",
  非遗传承: "bg-brocade-gold/20 text-brocade-gold",
  产教融合: "bg-bashu-bronze/10 text-bashu-bronze",
};

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-paper to-snow py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">资讯动态</h1>
          <p className="mt-3 text-lg text-muted">
            聚焦巴蜀文化数字化最新动态、行业政策与活动资讯
          </p>
        </div>
      </section>

      {/* 分类标签筛选栏 */}
      <section className="sticky top-0 z-20 border-b border-border bg-snow/95 backdrop-blur-sm py-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag) => (
              <span
                key={tag}
                className={`cursor-default rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  tag === "全部"
                    ? "bg-bashu-bronze text-snow"
                    : "border border-border bg-snow text-muted hover:border-bashu-bronze/50 hover:text-bashu-bronze"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 动态列表 */}
      <section className="bg-paper py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {NEWS_ITEMS.map((item, i) => (
              <article
                key={i}
                className="group rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-medium ${TAG_STYLE[item.tag] ?? "bg-paper text-muted"}`}
                  >
                    {item.tag}
                  </span>
                  <time className="text-xs text-muted">{item.date}</time>
                </div>
                <h2 className="font-serif text-base font-semibold text-ink group-hover:text-bashu-bronze transition-colors">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-bashu-bronze/60 transition group-hover:text-bashu-bronze">
                  阅读全文 →
                </span>
              </article>
            ))}
          </div>

          {/* 加载更多 */}
          <div className="mt-10 text-center">
            <button
              type="button"
              className="rounded-full border border-bashu-bronze px-8 py-3 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
            >
              加载更多
            </button>
          </div>
        </div>
      </section>

      {/* 订阅 & 问答 */}
      <section className="bg-snow py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* 订阅资讯 */}
            <div className="rounded-2xl border border-border bg-paper p-8">
              <h3 className="font-serif text-lg font-semibold text-ink">订阅资讯</h3>
              <p className="mt-2 text-sm text-muted">关注官方公众号，获取最新资讯推送</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full border border-bashu-bronze px-5 py-2 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
                >
                  邮件订阅
                </button>
                <button
                  type="button"
                  className="rounded-full bg-bashu-bronze px-5 py-2 text-sm font-medium text-snow transition hover:bg-bashu-bronze/85"
                >
                  关注公众号
                </button>
              </div>
            </div>

            {/* 文化数字化问答 */}
            <div className="rounded-2xl border border-border bg-paper p-8">
              <h3 className="font-serif text-lg font-semibold text-ink">文化数字化问答</h3>
              <p className="mt-2 text-sm text-muted">解答您关于巴蜀文化数字化的各类问题</p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-brocade-gold px-5 py-2 text-sm font-medium text-ink transition hover:bg-brocade-gold/85"
                >
                  提问咨询
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
