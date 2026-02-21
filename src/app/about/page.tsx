import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "关于我们 | 巴蜀文化数字研究院",
  description:
    "巴蜀文化数字研究院：数字文脉的守护者与双城经济的驱动引擎。服务国家大后方，构建数字化新高地，联合新华文轩、四川新传媒集团等，共创价值共赢。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="关于我们"
        subtitle="数字文脉的守护者与双城经济的驱动引擎"
      />

      {/* 一、战略定位 */}
      <Section title="战略定位" subtitle="服务国家大后方，构建数字化新高地">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            巴蜀文化数字研究院是在四川省委宣传部、重庆市委宣传部的共同指导下，为深入贯彻落实「成渝地区双城经济圈」国家战略及「国家文化数字化战略」而成立的高层次学术创新与产业融合平台。研究院立足于国家级产教融合实践教学基地，致力于通过前沿数字技术挖掘、重构与传播巴蜀文化的深厚底蕴。
          </p>
          <p>
            巴蜀文化作为中华优秀传统文化的重要组成部分，孕育了神秘璀璨的三星堆金沙文明、浩瀚壮阔的长征红色文化、巧夺天工的非遗手工技艺以及开放包容的藏羌彝文脉。研究院不仅承担着数字化语境下传承保护巴蜀文脉的学术使命，更发挥着「政行校企」多主体协同优势，引领文化资源向数字资产的价值转化。
          </p>
        </div>
      </Section>

      {/* 二、文化根基 */}
      <Section title="文化根基" subtitle="一镜一山河，影像记录千年文脉">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>巴蜀文化作为中华文明的重要组成部分，孕育了：</p>
          <ul className="space-y-4">
            <li className="rounded-xl border border-border bg-snow p-5">
              <p className="font-medium text-ink">璀璨文明</p>
              <p className="mt-2">从三星堆、金沙的神秘遗迹，到江河交错衍生的航运与商贸文化。</p>
            </li>
            <li className="rounded-xl border border-border bg-snow p-5">
              <p className="font-medium text-ink">红色基因</p>
              <p className="mt-2">四川作为长征途中的关键转折地，承载着「翻雪山、过草地」的英雄史诗。</p>
            </li>
            <li className="rounded-xl border border-border bg-snow p-5">
              <p className="font-medium text-ink">匠心非遗</p>
              <p className="mt-2">千年流传的蜀锦、漆艺与雕刻，象征着天府之国的物产丰盈与灵动智慧。</p>
            </li>
          </ul>
          <p>
            研究院秉承
            <strong className="text-ink">「巴蜀文化全景呈现，数字化成果全民共享」</strong>
            的理念，通过 AI、VR/AR 等技术「唤醒」文脉，让千年历史在数字世界中焕发新生。
          </p>
        </div>
      </Section>

      {/* 三、产业协同 */}
      <Section title="产业协同" subtitle="汇聚第四极力量，共创价值共赢">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            研究院通过构建
            <strong className="text-ink">「政行校企」多主体协同的治理模式</strong>
            ，发起了
            <strong className="text-ink">「巴蜀文化创意（数字）产教联盟」</strong>
            ，深度联合行业巨头与学术高地：
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 rounded-xl border border-border bg-snow p-4">
              <span className="shrink-0 rounded-full bg-bashu-bronze/10 px-2.5 py-0.5 text-xs font-medium text-bashu-bronze">媒体驱动</span>
              <span>联合四川新传媒集团、成都传媒集团，打造新媒体流量矩阵与 IP 孵化基地。</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-border bg-snow p-4">
              <span className="shrink-0 rounded-full bg-bashu-bronze/10 px-2.5 py-0.5 text-xs font-medium text-bashu-bronze">出版创新</span>
              <span>携手新华文轩，推动数字化融合出版与教育资源的高效流转。</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-border bg-snow p-4">
              <span className="shrink-0 rounded-full bg-bashu-bronze/10 px-2.5 py-0.5 text-xs font-medium text-bashu-bronze">教育赋能</span>
              <span>联合四川萃雅教育（缤果课堂），将 AI 数字课程推向千家万户。</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-border bg-snow p-4">
              <span className="shrink-0 rounded-full bg-bashu-bronze/10 px-2.5 py-0.5 text-xs font-medium text-bashu-bronze">产研融合</span>
              <span>依托四川大学、电子科技大学等顶尖学府，攻关沉浸式体验与 AIGC 核心技术。</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* 四、未来愿景 */}
      <Section title="未来愿景" subtitle="打造数字文化产业集群范式">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            在成渝双城每日百万级的人员流转与超 10 万亿 GDP 的加持下，研究院正加速推进
            <strong className="text-ink">「云景长征」</strong>
            、文化数字资产重点实验室等重大项目。我们不仅在记录历史，更在利用「数字科技唤醒巴蜀文脉」，为这片战略基石注入创新的灵魂，书写中华民族伟大复兴的数字篇章。
          </p>
        </div>
      </Section>
    </>
  );
}
