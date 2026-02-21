import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Image from "next/image";
import { Package, Globe, LayoutGrid, ExternalLink } from "lucide-react";

export const metadata = {
  title: "巴蜀文化体系 | 巴蜀文化数字研究院",
  description:
    "系统化呈现巴蜀文化核心资源：古蜀文明（三星堆）、巴蜀非遗（川剧变脸、蜀锦、川茶）、大熊猫文化、巴蜀山水，以及数字藏品与3D/VR沉浸式展示入口。",
};

const DIGITAL_COLLECTIONS = [
  {
    id: "sanxingdui",
    title: "三星堆数字藏品",
    desc: "青铜神树、纵目面具、黄金权杖等古蜀文物数字化建模与确权，推动文博资源向数字资产转化。",
    image:
      "https://img2.baidu.com/it/u=770521053,1233159494&fm=253&app=138&f=JPEG?w=800&h=1200",
    category: "古蜀文明",
  },
  {
    id: "chuanju",
    title: "川剧数字藏品",
    desc: "变脸脸谱、戏服纹样、经典剧目片段等川剧元素数字化收藏与展示。",
    image:
      "https://gips1.baidu.com/it/u=2122084108,243822367&fm=3074&app=3074&f=JPEG?w=800&h=1109",
    category: "川剧",
  },
  {
    id: "shujin",
    title: "蜀锦纹样数字藏品",
    desc: "传统蜀锦纹样、织造技艺与《典籍里的首饰》等非遗手工系列数字化课程衍生产品。",
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
    category: "非遗民艺",
  },
  {
    id: "qiang",
    title: "羌族服饰数字藏品",
    desc: "《中国少数民族服饰文化与传统技艺·羌族》数字资源，民族服饰纹样与文化内涵的数字化呈现。",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    category: "民族文化",
  },
  {
    id: "panda",
    title: "大熊猫文创数字藏品",
    desc: "大熊猫 IP 与巴蜀自然生态主题的数字艺术品，传递人与自然和谐共生的理念。",
    image:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
    category: "自然生态",
  },
];

const VR_EXHIBITIONS = [
  {
    id: "yunjing",
    title: "「云景长征」沉浸式体验",
    desc: "AR/VR/AI 融合技术打造的红色文化数字化交互平台，全链条技术引擎，沉浸式体验长征精神。",
    type: "VR/AR",
    href: "#",
    status: "运营中",
  },
  {
    id: "bashu-space",
    title: "巴蜀文化体验空间",
    desc: "线下数字化非遗体验展陈，与「5·18 国际博物馆日」等节点联动，支持虚拟导览与互动。",
    type: "线下+线上",
    href: "#",
    status: "运营中",
  },
  {
    id: "shenyijiao",
    title: "文化数字艺术品交易平台（深艺交）",
    desc: "全国文化大数据交易中心重点支持，巴蜀文化数字藏品发行、确权与交易。",
    type: "交易平台",
    href: "#",
    status: "已上线",
  },
  {
    id: "future",
    title: "更多 3D/VR 展陈",
    desc: "三星堆 3D 文物漫游、川剧虚拟剧场、蜀道沉浸式体验等项目持续建设中，敬请期待。",
    type: "建设中",
    href: "#",
    status: "筹备中",
  },
];

export default function DigitalCollectionsPage() {
  return (
    <>
      <PageHero
        title="巴蜀文化体系"
        subtitle="系统化呈现 · 学术研究基础载体"
        desc="完整呈现古蜀文明、巴蜀非遗、大熊猫文化、巴蜀山水人文等核心文化资源，同步展示数字藏品与3D/VR沉浸式体验成果，作为研究院学术研究与产业落地的文化资源基础。"
      />
      {/* 文化根基 */}
      <Section title="文化根基与历史底蕴" subtitle="研究院开展一切数字化工作的学术母体">
        <div className="mx-auto max-w-3xl space-y-4 text-muted mb-8">
          <p>
            巴蜀文化作为中华文明的重要组成部分，是研究院开展一切数字化工作的学术母体。
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "文明发轫",
              icon: "🏛",
              text: "源自神秘璀璨的三星堆与金沙文明，在江河交错、沃野千里的自然禀赋中，孕育出开放包容、灵动智慧的民系性格。",
            },
            {
              label: "家国情怀",
              icon: "🏔",
              text: "从汉高祖刘邦以巴蜀为基建立大汉，到抗战时期「四川不灭，华夏不亡」的民族脊梁，体现了巴蜀文化深厚的战略地位与民族气节。",
            },
            {
              label: "红色文脉",
              icon: "🌟",
              text: "四川作为长征途中的关键转折地，承载了「翻雪山、过草地」「四渡赤水」等改变中国命运的重要红色记忆。",
            },
            {
              label: "民俗技艺",
              icon: "🎭",
              text: "涵盖蜀锦、漆艺、川剧、羌绣等具有高度审美与工匠精神的非遗文化资源，是巴蜀文化传承活力的重要载体。",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-serif text-base font-semibold text-ink">{item.label}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="数字展示" subtitle="探索巴蜀文化数字化成果" bg="paper">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted">
            汇聚三星堆、川剧、非遗等巴蜀文化数字藏品与虚拟展陈，提供线上沉浸式浏览与互动体验。
          </p>
        </div>
      </Section>

      {/* 数字藏品列表 */}
      <Section title="数字藏品" subtitle="巴蜀文化数字资产精选">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIGITAL_COLLECTIONS.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-border bg-snow shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-0.5 text-xs text-snow">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                    <span className="rounded-full border border-snow bg-snow/20 px-4 py-2 text-sm font-medium text-snow backdrop-blur">
                      查看藏品
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 3D/VR 展示入口 */}
      <Section title="3D / VR 展示入口" subtitle="沉浸式体验与虚拟展陈">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {VR_EXHIBITIONS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-snow shadow-sm transition hover:border-brocade-gold/50 hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-lg bg-bashu-bronze/10 p-2">
                        {item.type.includes("VR") ? (
                          <Globe className="h-5 w-5 text-bashu-bronze" />
                        ) : item.type === "交易平台" ? (
                          <Package className="h-5 w-5 text-bashu-bronze" />
                        ) : (
                          <LayoutGrid className="h-5 w-5 text-bashu-bronze" />
                        )}
                      </div>
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                        {item.type}
                      </span>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs ${
                        item.status === "运营中" || item.status === "已上线"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-ink group-hover:text-bashu-bronze">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-bashu-bronze">
                    进入体验
                    <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            更多数字藏品与 3D/VR 项目将陆续上线，敬请关注研究院动态。
          </p>
        </div>
      </Section>
    </>
  );
}
