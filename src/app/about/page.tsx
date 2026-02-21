import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "研究院概况 | 巴蜀文化数字研究院",
  description:
    "巴蜀文化数字研究院：巴蜀文化数字化专业学术研究机构，巴蜀文化创意（数字）产教联盟学术引领单位，缤果AI学院·AI教育实践基地，非遗数字研学·实践合作载体。",
};

const corePanels = [
  { label: "学术研究", desc: "牵头开展巴蜀文化数字化学术研究、制定行业相关学术标准，引领产教融合与产业落地方向。" },
  { label: "数字项目", desc: "推进「云景长征」、文化数字资产重点实验室等重大项目，开展联盟数字资源共建共享、缤果AI技术协同研发。" },
  { label: "产教融合", desc: "共建联盟人才培养体系，联合培育非遗传承人，推动缤果AI教育实训落地与非遗数字研学实践合作。" },
  { label: "社会服务", desc: "为政府、文博机构、非遗保护单位提供AI教育实训服务与非遗研学指导服务，实现数字化成果全民共享。" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="研究院概况"
        subtitle="巴蜀文化数字化专业学术研究机构"
        desc="巴蜀文化创意（数字）产教联盟学术引领单位 · 缤果AI学院·AI教育实践基地 · 非遗数字研学·实践合作载体"
      />

      {/* 一、研究院简介 */}
      <Section title="研究院简介" subtitle="学术引领 · 产业落地">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            巴蜀文化数字研究院是在四川省委宣传部、重庆市委宣传部的共同指导下，为深入贯彻落实「成渝地区双城经济圈」国家战略及「国家文化数字化战略」而成立的高层次学术创新与产业融合平台。研究院立足于国家级产教融合实践教学基地，致力于通过前沿数字技术挖掘、重构与传播巴蜀文化的深厚底蕴。
          </p>
          <p>
            巴蜀文化作为中华优秀传统文化的重要组成部分，孕育了神秘璀璨的三星堆金沙文明、浩瀚壮阔的长征红色文化、巧夺天工的非遗手工技艺以及开放包容的藏羌彝文脉。研究院不仅承担着数字化语境下传承保护巴蜀文脉的学术使命，更发挥着「政行校企」多主体协同优势，引领文化资源向数字资产的价值转化。
          </p>
          <p>
            作为<strong className="text-ink">巴蜀文化创意（数字）产教联盟学术引领单位</strong>，研究院牵头开展联盟学术研究、人才培养、成果转化相关工作，重点推进巴蜀非遗传承人培育与数字化传承；依托缤果AI学院建设「AI教育实践基地」，开展AI技术在文化数字化领域的教育实训与研发应用；联动非遗数字研学，搭建非遗传承实践平台，推动非遗文化活态落地。
          </p>
          <p>
            研究院秉承
            <strong className="text-ink">「巴蜀文化全景呈现，数字化成果全民共享」</strong>
            的理念，通过 AI、VR/AR 等技术「唤醒」文脉，让千年历史在数字世界中焕发新生。
          </p>
        </div>
      </Section>

      {/* 二、核心板块 */}
      <Section title="四大核心板块" subtitle="学术研究 · 数字项目 · 产教融合 · 社会服务" bg="paper">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {corePanels.map((p) => (
            <div key={p.label} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
              <h3 className="font-serif text-base font-semibold text-ink">{p.label}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 四、产教融合 */}
      <Section title="产教融合与联盟赋能" subtitle="政行校企协同 · 学术引领产业落地" bg="paper">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            作为国家文化数字化战略与产教融合的坚定推动者，研究院发起并依托
            <strong className="text-ink">「巴蜀文化创意（数字）产教联盟」</strong>
            ，联合新华文轩、四川新传媒集团、成都传媒集团及四川萃雅教育等行业领军力量，深化校企协同机制。
          </p>
          <p>
            通过构建「政行校企」多主体协同的治理模式，研究院成功搭建起集学术研究、数字项目、实训教学与社会服务于一体的「产学研用」全链路生态。依托「云景长征」数字化交互项目、「缤果课堂」非遗数字课程以及巴蜀文化创意街区等标志性成果，研究院持续将文化资源转化为具有全国竞争力的数字资产与新型文化业态，全方位扩大巴蜀文化的社会影响力与辐射效能，助力区域经济高质量增长。
          </p>
        </div>
        <ul className="mt-6 space-y-3 max-w-3xl mx-auto">
          {[
            { tag: "媒体驱动", text: "联合四川新传媒集团、成都传媒集团，打造新媒体流量矩阵与 IP 孵化基地，为人才培养提供实训就业支撑。" },
            { tag: "出版创新", text: "携手新华文轩，推动数字化融合出版与教育资源的高效流转，共建数字化系列教材。" },
            { tag: "AI教育实践", text: "依托缤果AI学院·AI教育实践基地，开展AI+文化数字化教育实训，培育复合型专业人才，实现定向产业输送。" },
            { tag: "学术技术攻关", text: "依托四川大学、电子科技大学、北京大学等顶尖学府，攻关沉浸式体验与AIGC核心技术，为产业落地提供学术支撑。" },
            { tag: "非遗传承实践", text: "联动非遗数字研学，搭建非遗传承实践平台，推动非遗传承人数字化培育与文化活态落地。" },
          ].map((item) => (
            <li key={item.tag} className="flex gap-3 rounded-xl border border-border bg-snow p-4">
              <span className="shrink-0 rounded-full bg-bashu-bronze/10 px-2.5 py-0.5 text-xs font-medium text-bashu-bronze">
                {item.tag}
              </span>
              <span className="text-sm">{item.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 五、核心价值观 */}
      <Section title="核心价值观" subtitle="传承 · 创新 · 协同 · 包容 · 专业">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-5 sm:grid-cols-5">
            {[
              { value: "传承", desc: "守护巴蜀文脉，推动非遗传承人数字化培育，让传统文化在数字时代焕发新生。" },
              { value: "创新", desc: "以AI、VR/AR、AIGC等前沿技术驱动文化数字化创新，开拓学术研究与产业落地新范式。" },
              { value: "协同", desc: "通过「政行校企」联盟治理模式，实现学术引领与产业落地的协同共进。" },
              { value: "包容", desc: "融汇汉藏羌彝等多元文化，构建开放包容的巴蜀文化数字化研究生态。" },
              { value: "专业", desc: "坚守学术规范，以高水平研究团队、严格学术标准，保障学术引领的权威性与公信力。" },
            ].map((v) => (
              <div key={v.value} className="rounded-xl border border-border bg-snow p-5 text-center shadow-sm">
                <div className="font-serif text-xl font-bold text-bashu-bronze">{v.value}</div>
                <p className="mt-2 text-xs text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 六、未来愿景 */}
      <Section title="未来愿景" subtitle="打造数字文化产业集群范式" bg="paper">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            在成渝双城每日百万级的人员流转与超 10 万亿 GDP 的加持下，研究院正加速推进
            <strong className="text-ink">「云景长征」</strong>
            、文化数字资产重点实验室等重大项目。我们不仅在记录历史，更在利用「数字科技唤醒巴蜀文脉」，为这片战略基石注入创新的灵魂，书写中华民族伟大复兴的数字篇章。
          </p>
          <p>
            同步规划推进「数字文创研究与转化」板块建设，以学术研究为核心、成果转化为辅助，联动产教联盟、缤果AI学院、非遗数字研学，探索巴蜀文化IP数字化开发、非遗文创学术化转化的全新路径，为产业落地注入持续学术动力。
          </p>
        </div>
      </Section>
    </>
  );
}
