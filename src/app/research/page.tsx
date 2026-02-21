import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Image from "next/image";
import { Package, Globe, LayoutGrid, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "数字成果 | 巴蜀文化数字研究院",
  description:
    "巴蜀文化数字研究院数字成果：数字藏品展示、3D/VR沉浸式体验、重大数字化项目、融合出版与学术研究、数字化教育与产教融合、社会服务与文化传播。",
};

const DIGITAL_COLLECTIONS = [
  {
    id: "sanxingdui",
    title: "三星堆数字藏品",
    desc: "青铜神树、纵目面具、黄金权杖等古蜀文物数字化建模与确权，推动文博资源向数字资产转化。",
    image: "https://img2.baidu.com/it/u=770521053,1233159494&fm=253&app=138&f=JPEG?w=800&h=1200",
    category: "古蜀文明",
  },
  {
    id: "chuanju",
    title: "川剧数字藏品",
    desc: "变脸脸谱、戏服纹样、经典剧目片段等川剧元素数字化收藏与展示。",
    image: "https://gips1.baidu.com/it/u=2122084108,243822367&fm=3074&app=3074&f=JPEG?w=800&h=1109",
    category: "川剧",
  },
  {
    id: "shujin",
    title: "蜀锦纹样数字藏品",
    desc: "传统蜀锦纹样、织造技艺与非遗手工系列数字化课程衍生产品。",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
    category: "非遗民艺",
  },
  {
    id: "qiang",
    title: "羌族服饰数字藏品",
    desc: "《中国少数民族服饰文化与传统技艺·羌族》数字资源，民族服饰纹样与文化内涵的数字化呈现。",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    category: "民族文化",
  },
  {
    id: "panda",
    title: "大熊猫文创数字藏品",
    desc: "大熊猫IP与巴蜀自然生态主题的数字艺术品，传递人与自然和谐共生的理念。",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
    category: "自然生态",
  },
];

const VR_EXHIBITIONS = [
  {
    id: "yunjing",
    title: "「云景长征」沉浸式体验",
    desc: "AR/VR/AI融合技术打造的红色文化数字化交互平台，全链条技术引擎，沉浸式体验长征精神。",
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
    desc: "三星堆3D文物漫游、川剧虚拟剧场、蜀道沉浸式体验等项目持续建设中，敬请期待。",
    type: "建设中",
    href: "#",
    status: "筹备中",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="数字成果"
        subtitle="数字藏品 · 沉浸体验 · 学术成果 · 社会服务"
        desc="汇聚研究院数字化重大项目、数字藏品、3D/VR沉浸式体验、融合出版与社会服务等全维度成果，展示巴蜀文化数字化的完整图景。"
      />

      {/* 数字藏品 */}
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
      <Section title="3D / VR 展示入口" subtitle="沉浸式体验与虚拟展陈" bg="paper">
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
            更多数字藏品与3D/VR项目将陆续上线，敬请关注研究院动态。
          </p>
        </div>
      </Section>

      {/* 数字化重大项目成果 */}
      <Section title="数字化重大项目成果" subtitle="Digital Projects · 全景呈现巴蜀文化的核心产出">
        <div className="mx-auto max-w-4xl grid gap-5 sm:grid-cols-2">
          {[
            { title: "「云景长征」数字化交互项目", desc: "利用AR/VR/AI融合技术，打造集教育、展示、体验于一体的长征文化数字化交互平台，构建「构建-融合-交互-呈现-评价」全链条技术引擎。" },
            { title: "文化数字艺术品交易平台（深艺交）", desc: "第一阶段建设已完成并上线运营，纳入全国文化大数据交易中心重点支持范围。" },
            { title: "巴蜀文化数字资源库", desc: "开展文化数据标注、资产确权评估，推动巴蜀优秀传统文化数字资源转化为文化数字资产。" },
            { title: "巴蜀文化创意街区", desc: "建设开放型产教融合实践教学基地，涵盖城市农文旅品牌发布中心、「村游技」电竞赛事中心等数字化新型文化业态。" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
              <h3 className="font-serif text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 融合出版与学术研究 */}
      <Section title="融合出版与学术研究" subtitle="Publications & Research · 文化内容数字化的专业深度" bg="paper">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">国家级重点图书项目</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="rounded-xl border border-border bg-snow p-4 text-sm">
                《中国少数民族服饰文化与传统技艺·羌族》（列入「十四五」国家重点图书出版规划）
              </li>
              <li className="rounded-xl border border-border bg-snow p-4 text-sm">
                《中国传统手工技艺丛书》（第一辑、第二辑）
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">学术交流与智库建设</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>· 编发《巴蜀文化数字研究院工作简报》，系统记录数字化转型实践历程</li>
              <li>· 参与「沉浸式文旅体验技术集成与场景创新」等国家文旅部衍生课题研究</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 数字化教育与产教融合 */}
      <Section title="数字化教育与产教融合" subtitle="Education & Integration · 产学研用一体化成果">
        <div className="mx-auto max-w-4xl grid gap-5 sm:grid-cols-3">
          {[
            { title: "数字化精品课程研发", desc: "开发完成《典籍里的首饰》《丹漆成器》《木意匠心》《妙笔丹青》等非遗手工系列数字化课程共4门（30课时）。" },
            { title: "AI赋能实训平台", desc: "联合电子科技大学研发AIGC公选课及实训平台，提升学生人工智能素养，每年开放2000名实训名额。" },
            { title: "产教联盟生态构建", desc: "发起成立「巴蜀文化创意（数字）产教联盟」，连接四川21个地市州，构建统一的供应链与标准价值体系。" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
              <h3 className="font-serif text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 社会服务与文化传播 */}
      <Section title="社会服务与文化传播" subtitle="Social Service · 数字化成果全民共享" bg="paper">
        <div className="mx-auto max-w-4xl grid gap-5 sm:grid-cols-3">
          {[
            { value: "3000+", label: "在线学习人数", note: "覆盖成都市8所中小学及5个社区，累计在线学习人数超3000人" },
            { value: "4地区", label: "研学覆盖范围", note: "四川、北京、广东、新疆，深入中小学、社区、研学基地、文旅景区" },
            { value: "21", label: "联盟覆盖地市州", note: "连接四川21个地市州，「空中课堂」引入凉山州等地助力教育均衡发展" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-snow p-6 text-center shadow-sm">
              <div className="font-serif text-3xl font-bold text-bashu-bronze">{item.value}</div>
              <div className="mt-1 font-semibold text-sm text-ink">{item.label}</div>
              <p className="mt-2 text-xs text-muted leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 mx-auto max-w-4xl grid gap-5 sm:grid-cols-3">
          {[
            { title: "「空中课堂」支教服务", desc: "将数字化文化课程引入凉山州等地区，助力教育均衡发展。" },
            { title: "社区与校园推广", desc: "数字化课程已进入成都市8所中小学及5个社区（如金凤社区、东安湖社区等）。" },
            { title: "银发经济专题研究", desc: "针对养老需求研发数字化特色研学课程，推动文化助老、赋能老龄产业发展。" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
              <h3 className="font-serif text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
