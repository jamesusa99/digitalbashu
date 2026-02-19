import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Link from "next/link";
import { ClipboardList } from "lucide-react";

export const metadata = {
  title: "产业联盟 | 巴蜀文化数字研究院",
  description:
    "巴蜀文化创意（数字）产教联盟汇聚文博、文旅、科技、教育等机构，共同推动巴蜀文化数字化转型与产业应用。汇聚产业力量，价值共赢。",
};

export default function IndustryAlliancePage() {
  return (
    <>
      <PageHero
        title="产业联盟"
        subtitle="汇聚产业力量，价值共赢"
      />
      <Section title="联盟介绍" subtitle="巴蜀文化创意（数字）产教联盟">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-lg text-muted">
            产业联盟汇聚文博、文旅、科技、教育等机构，共同推动巴蜀文化数字化转型与产业应用。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-snow p-4 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-bashu-bronze">21+</p>
              <p className="mt-1 text-sm text-muted">四川地市州覆盖</p>
            </div>
            <div className="rounded-xl border border-border bg-snow p-4 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-bashu-bronze">产学研</p>
              <p className="mt-1 text-sm text-muted">一体化生态</p>
            </div>
            <div className="rounded-xl border border-border bg-snow p-4 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-bashu-bronze">供应链</p>
              <p className="mt-1 text-sm text-muted">与标准价值体系</p>
            </div>
            <div className="rounded-xl border border-border bg-snow p-4 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-bashu-bronze">共创</p>
              <p className="mt-1 text-sm text-muted">资源共享与协同</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="联盟章程" subtitle="宗旨与运作规范">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            巴蜀文化创意（数字）产教联盟以「传承、创新、协同、包容、专业」为核心价值观，致力于构建政产学研用协同创新体系，促进巴蜀文化资源向数字资产转化，推动成果全民共享与产业价值共创。
          </p>
          <div className="rounded-xl border border-border bg-paper-warm p-6">
            <p className="text-sm text-muted">
              联盟章程全文及实施细则将根据成员大会决议定期更新，欢迎有意加入的机构通过
              <Link
                href="/contact"
                className="mx-1 text-bashu-bronze underline hover:text-bashu-bronze-light"
              >
                联系我们
              </Link>
              获取最新版本。
            </p>
          </div>
        </div>
      </Section>

      <Section title="成员名单" subtitle="联盟伙伴机构">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-center text-muted">
            联盟成员涵盖地方政府、文博机构、高等院校、科技企业等多方主体，持续扩大中。
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { cat: "文博机构", items: ["三星堆博物馆", "四川省文化产业发展促进中心"] },
              { cat: "高等院校", items: ["北京大学", "四川大学", "电子科技大学", "重庆艺术文化职业学院"] },
              { cat: "科技企业", items: ["浪潮集团", "广东缤果奇迹 AI", "四川萃雅教育科技"] },
              { cat: "地方政府", items: ["巴中市", "成都市温江区", "岳池县"] },
            ].map((group, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-snow p-4 shadow-sm"
              >
                <p className="font-medium text-ink">{group.cat}</p>
                <p className="mt-2 text-sm text-muted">{group.items.join("、")}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            完整成员名单与更新信息可联系研究院获取。
          </p>
        </div>
      </Section>

      <Section title="年度峰会" subtitle="联盟大会与活动">
        <div className="mx-auto max-w-3xl space-y-4 text-muted">
          <p>
            联盟定期举办年度峰会、专题研讨会及项目对接会，促进成员间资源共享、技术协同与成果转化。
          </p>
          <div className="rounded-xl border border-border bg-paper-warm p-6">
            <p className="text-sm text-muted">
              年度峰会日程、议题及报名方式将提前通过研究院官网及联盟成员渠道发布，敬请关注。
            </p>
          </div>
        </div>
      </Section>

      <Section title="加入申请方式" subtitle="从意向到签约">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-muted">
            欢迎符合联盟定位的文博、文旅、科技、教育等机构申请加入。申请流程与
            <Link
              href="/cooperation"
              className="text-bashu-bronze underline hover:text-bashu-bronze-light"
            >
              合作交流
            </Link>
            洽谈流程一致：
          </p>
          <ol className="space-y-3">
            {[
              "意向提交：通过网站「联系我们」或邮件提交加入申请及机构简介",
              "资格初审：研究院对申请机构进行行业匹配与资源互补性评估",
              "方案论证：组织专家座谈，明确合作方向与联盟权益",
              "联盟签约：正式签署联盟协议，纳入成员名录并享受联盟资源",
            ].map((step, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg border border-border bg-snow px-4 py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bashu-bronze/10 text-sm font-medium text-bashu-bronze">
                  {i + 1}
                </span>
                <span className="text-muted">{step}</span>
              </li>
            ))}
          </ol>
          <div className="flex justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-bashu-bronze bg-bashu-bronze px-6 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
            >
              <ClipboardList className="h-4 w-4" />
              提交加入申请
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
