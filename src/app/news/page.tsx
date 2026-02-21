import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "资讯动态 | 巴蜀文化数字研究院",
  description:
    "巴蜀文化数字研究院最新资讯动态：学术研究进展、数字项目落地、非遗传承活动、人才培养成果、产教联盟学术研讨、缤果AI学院实训动态及非遗数字研学实践成果。",
};

const NEWS_ITEMS = [
  {
    date: "2025-06",
    tag: "学术成果",
    title: "三星堆数字复原项目入选省级文化数字化示范案例",
    desc: "研究院主导的三星堆文物数字化建模与确权项目，经四川省文化和旅游厅评审，正式入选省级文化数字化示范案例，为文博资源向数字资产转化提供标杆参考。",
  },
  {
    date: "2025-05",
    tag: "产教融合",
    title: "研究院与缤果AI学院联合启动AI教育实训新一期招募",
    desc: "依托缤果AI学院·AI教育实践基地，面向联盟内院校及社会学员开放新一期AI文化创意实训名额，重点培育AI+文化数字化复合型人才，实现定向产业输送。",
  },
  {
    date: "2025-05",
    tag: "非遗传承",
    title: "非遗传承人数字化培育项目结项，师生结对传承成果展示",
    desc: "研究院联合产教联盟与非遗数字研学开展的传承人数字化培育项目正式结项，多位国家级、省级非遗传承人参与，师生结对传承成果在院内集中展示。",
  },
  {
    date: "2025-04",
    tag: "学术交流",
    title: "产教联盟学术论坛举办，聚焦非遗数字化传承与产业落地",
    desc: "巴蜀文化创意（数字）产教联盟学术论坛在成都召开，来自北京大学、四川大学、电子科技大学等院校专家与联盟成员代表共同探讨非遗数字化传承与产业落地路径。",
  },
  {
    date: "2025-04",
    tag: "合作动态",
    title: "研究院与四川美术学院共建数字艺术设计实训基地",
    desc: "研究院与四川美术学院正式签署合作协议，共建巴蜀文化数字艺术设计实训基地，联合开展文创原型研发与非遗美学研究，推动学术成果向产业落地转化。",
  },
  {
    date: "2025-03",
    tag: "项目进展",
    title: "「云景长征」数字化交互项目阶段性成果发布",
    desc: "利用AR/VR/AI融合技术打造的「云景长征」数字化交互平台完成阶段性建设，构建「构建-融合-交互-呈现-评价」全链条技术引擎，为长征红色文化传承提供数字化新路径。",
  },
  {
    date: "2025-03",
    tag: "人才培养",
    title: "缤果课堂非遗数字研学覆盖四大区域，规模化落地",
    desc: "依托AI与数字技术推动传统文化创新活化，项目实现跨区域、多场景规模化落地，覆盖四川、北京、广东、新疆等地区，深入中小学、社区、研学基地、文旅景区等场所。",
  },
  {
    date: "2025-02",
    tag: "学术成果",
    title: "《中国少数民族服饰文化与传统技艺·羌族》正式出版",
    desc: "列入「十四五」国家重点图书出版规划的《中国少数民族服饰文化与传统技艺·羌族》正式出版，系研究院在融合出版与学术研究领域的重要成果。",
  },
];

const TAGS = ["全部", "学术成果", "产教融合", "非遗传承", "学术交流", "合作动态", "项目进展", "人才培养"];

const tagColors: Record<string, string> = {
  学术成果: "bg-bashu-teal/15 text-bashu-teal",
  产教融合: "bg-bashu-bronze/10 text-bashu-bronze",
  非遗传承: "bg-brocade-gold/20 text-brocade-gold",
  学术交流: "bg-bashu-teal/10 text-bashu-teal",
  合作动态: "bg-bashu-bronze/10 text-bashu-bronze",
  项目进展: "bg-brocade-gold/15 text-brocade-gold",
  人才培养: "bg-bashu-teal/15 text-bashu-teal",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="资讯动态"
        subtitle="学术进展 · 项目动态 · 非遗传承 · 人才培养"
        desc="聚焦研究院学术研究进展、数字项目落地、非遗传承活动、产教联盟学术研讨及缤果AI学院实训动态，记录巴蜀文化数字化传承的每一步。"
      />

      {/* 分类标签 */}
      <Section>
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {TAGS.map((t) => (
            <span
              key={t}
              className={`rounded-full px-4 py-1.5 text-sm font-medium cursor-default ${
                t === "全部"
                  ? "bg-bashu-bronze text-snow"
                  : "border border-border bg-snow text-muted hover:border-bashu-bronze/50 hover:text-bashu-bronze"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* 动态列表 */}
      <Section bg="paper">
        <div className="mx-auto max-w-4xl space-y-6">
          {NEWS_ITEMS.map((item, i) => (
            <article
              key={i}
              className="rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-medium ${tagColors[item.tag] ?? "bg-paper text-muted"}`}
                >
                  <Tag size={10} className="inline mr-1 mb-0.5" />
                  {item.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Calendar size={12} />
                  {item.date}
                </span>
              </div>
              <h3 className="font-serif text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        {/* 更多动态占位 */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted">更多资讯动态持续更新中，敬请关注……</p>
        </div>
      </Section>
    </>
  );
}
