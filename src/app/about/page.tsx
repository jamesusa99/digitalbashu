import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "关于我们 | 巴蜀文化数字研究院",
  description:
    "巴蜀文化数字研究院致力于巴蜀文化全景呈现、数字化成果全民共享，引领数字文化产业发展。学术研究、数字项目、融合出版、跨界合作四轮驱动。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="关于我们"
        subtitle="数字科技唤醒巴蜀文脉，文化遗产照亮未来征程"
      />
      <Section title="研究院简介" subtitle="传承 · 创新 · 协同 · 包容 · 专业">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            巴蜀文化数字研究院是在四川省委宣传部、重庆市委宣传部的共同指导下，为深入贯彻落实「成渝地区双城经济圈」国家战略及「国家文化数字化战略」而成立的高层次学术创新与产业融合平台。研究院立足于国家级产教融合实践教学基地，致力于通过前沿数字技术挖掘、重构与传播巴蜀文化的深厚底蕴。
          </p>
          <p>
            巴蜀文化作为中华优秀传统文化的重要组成部分，孕育了神秘璀璨的三星堆金沙文明、浩瀚壮阔的长征红色文化、巧夺天工的非遗手工技艺以及开放包容的藏羌彝文脉。研究院不仅承担着数字化语境下传承保护巴蜀文脉的学术使命，更发挥着「政行校企」多主体协同优势，引领文化资源向数字资产的价值转化。
          </p>
        </div>
      </Section>
      <Section title="领导与体系" subtitle="学术研究 + 数字项目 + 融合出版 + 跨界合作">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            研究院由四川文化产业职业学院领导，由陈建文教授担任执行院长。在学术研究的基础上，研究院构建了「学术研究 + 数字项目 + 融合出版 + 跨界合作」四轮驱动的发展体系，重点推进包括「云景长征」数字化项目、巴蜀文化 AI 短剧创作，以及《中国少数民族服饰文化与传统技艺·羌族》等国家级重点出版成果。
          </p>
        </div>
      </Section>
      <Section title="产教融合与产业联盟" subtitle="产学研用一体化生态">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            作为国家文化数字化战略与产教融合的坚定推动者，研究院发起并依托
            <strong className="text-ink">「巴蜀文化创意（数字）产教联盟」</strong>
            ，联合
            <strong className="text-ink">新华文轩</strong>
            、四川新传媒集团、成都传媒集团及四川萃雅教育等行业领军力量，深度深化校企协同机制。
          </p>
          <p>
            通过构建
            <strong className="text-ink">「政行校企」多主体协同的治理模式</strong>
            ，研究院成功搭建起集学术研究、数字项目、实训教学与社会服务于一体的
            <strong className="text-ink">「产学研用」全链路生态</strong>
            。依托「云景长征」数字化交互项目、「缤果课堂」非遗数字课程以及
            <strong className="text-ink">巴蜀文化创意街区</strong>
            等标志性成果，研究院正持续将文化资源转化为具有全国竞争力的数字资产与新型文化业态，全方位扩大巴蜀文化的社会影响力与辐射效能，助力区域经济高质量增长。
          </p>
        </div>
      </Section>
    </>
  );
}
