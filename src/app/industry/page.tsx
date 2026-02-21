import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Landmark, Film, Building2, Award, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "产业赋能 | 巴蜀文化数字研究院",
  description:
    "巴蜀文化数字研究院产业赋能：文化 + 数字 + 产业，推动巴蜀文化资源转化为发展优势。覆盖文创产业赋能、文旅产业赋能、企业数字化转型、IP授权服务与产业联盟五大方向。",
};

const SECTORS = [
  {
    id: "wenchuang",
    icon: Film,
    title: "文创产业赋能",
    subtitle: "文化IP挖掘 · 数字化设计 · IP孵化 · 品牌推广",
    desc: "基于巴蜀四大文化体系（古蜀文明、非遗技艺、红色文化、山水人文），为文创企业提供从文化IP挖掘、数字化设计到品牌推广的全链条服务。深度孵化三星堆、川剧变脸、蜀锦、大熊猫等文化符号的IP衍生产品，助力文创企业实现数字化升级。",
    cta: "申请文创合作",
    cases: [
      {
        title: "三星堆IP数字化",
        desc: "三星堆IP系列数字衍生产品开发，覆盖数字藏品、AR互动、文创周边等多元场景，推动古蜀文明向现代文创转化。",
      },
      {
        title: "川剧文创推广",
        desc: "川剧变脸、吐火等经典元素的数字化再创作与全渠道推广，结合AIGC辅助创作，触达年轻受众群体。",
      },
      {
        title: "蜀锦纹样设计",
        desc: "利用AI技术挖掘蜀锦千年纹样体系，开发数字化设计工具与纹样资产库，赋能现代时尚与工艺品牌。",
      },
    ],
  },
  {
    id: "wenlv",
    icon: Landmark,
    title: "文旅产业赋能",
    subtitle: "数字文旅解决方案 · 景区VR · 非遗活动数字化运营",
    desc: "为巴蜀各地文旅局、景区提供数字化升级服务，包括景区VR全景、文化场景还原、非遗活动数字化运营，打造「数字文旅」全套解决方案，提升文旅目的地的数字吸引力与游客体验。",
    cta: "申请文旅合作",
    cases: [
      {
        title: "景区VR全景",
        desc: "为峨眉山、青城山、三星堆遗址等重点文化景区打造沉浸式VR全景，实现「云游巴蜀」，突破地域限制扩大文旅影响力。",
      },
      {
        title: "非遗活动直播",
        desc: "川剧变脸、蜀绣展演、非遗技艺活动全景直播运营，扩大非遗活动传播影响力，打通线上线下双渠道。",
      },
      {
        title: "红色文旅数字化",
        desc: "依托「云景长征」项目，以AR/VR/AI技术还原长征历史场景，构建沉浸式红色文旅体验，助力长征沿线景区数字升级。",
      },
    ],
  },
  {
    id: "qiye",
    icon: Building2,
    title: "企业数字化转型",
    subtitle: "数字化咨询 · 技术支持 · 人才培训",
    desc: "为传统文化企业（川剧团体、非遗工坊、文化餐饮、文创机构等）提供数字化转型咨询、技术支持与人才培训服务，帮助传统文化结合数字技术实现升级，焕发新的生机与活力。",
    cta: "咨询转型方案",
    cases: [
      {
        title: "非遗工坊数字化",
        desc: "帮助非遗传承人建立数字化档案、线上展示渠道与品牌传播体系，实现传统技艺的现代化传播与商业转化。",
      },
      {
        title: "文化机构AIGC赋能",
        desc: "为文博馆、文化馆、非遗中心引入AIGC技术，提升内容创作效率，开发数字化展陈与互动体验项目。",
      },
      {
        title: "巴蜀文化餐饮品牌升级",
        desc: "川式茶馆、火锅文化、坝坝宴等巴蜀饮食文化品牌的数字化改造与IP内容运营，打造文化餐饮新业态。",
      },
    ],
  },
  {
    id: "ip",
    icon: Award,
    title: "IP授权服务",
    subtitle: "文化IP孵化 · 授权合作 · 多场景应用",
    desc: "整合研究院孵化的巴蜀文化IP（三星堆古蜀文明IP、川剧艺术IP、大熊猫文化IP、藏羌彝民族文化IP等），提供IP授权合作，覆盖文创、文旅、影视、数字产品等领域，明确授权流程与合作模式，助力IP价值最大化。",
    cta: "了解IP授权",
    cases: [
      {
        title: "三星堆文化IP授权",
        desc: "青铜神树、纵目面具、黄金权杖等古蜀文明IP在文创产品、游戏、影视等领域的授权合作，推动文博资源向文化产业转化。",
      },
      {
        title: "大熊猫文化IP开发",
        desc: "大熊猫文化地标IP的数字化开发与商业授权，覆盖表情包、数字藏品、IP联名等多元应用场景。",
      },
    ],
  },
];

const ALLIANCE_MEMBERS = [
  "新华文轩", "四川新传媒集团", "成都传媒集团",
  "缤果AI学院", "四川大学", "电子科技大学",
  "北京大学", "四川美术学院", "重庆艺术文化职业学院",
  "浪潮集团", "深艺交平台", "地方非遗保护中心",
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="产业赋能"
        subtitle="文化 + 数字 + 产业，推动巴蜀文化资源转化为发展优势"
        desc="依托学术研究与产教联盟资源，为文创、文旅、企业数字化转型及IP授权提供全链条赋能服务。"
      />

      {/* 四大赋能板块 */}
      {SECTORS.map((sector, si) => {
        const Icon = sector.icon;
        return (
          <Section
            key={sector.id}
            title={sector.title}
            subtitle={sector.subtitle}
            bg={si % 2 === 1 ? "paper" : undefined}
          >
            <div className="mx-auto max-w-4xl">
              <p className="text-muted leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                {sector.desc}
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {sector.cases.map((c) => (
                  <div key={c.title} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
                    <Icon className="h-7 w-7 text-bashu-bronze mb-2" />
                    <h4 className="font-semibold text-sm text-ink">{c.title}</h4>
                    <p className="mt-2 text-xs text-muted leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="/contact"
                  className="inline-block rounded-full bg-bashu-bronze px-8 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze/85"
                >
                  {sector.cta}
                </a>
              </div>
            </div>
          </Section>
        );
      })}

      {/* 产业联盟 */}
      <Section title="产业联盟" subtitle="巴蜀文化创意（数字）产教联盟，共建文化数字化产业生态" bg="paper">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-muted mb-8">
            联合巴蜀地区主要文化机构、科技企业及高校，构建「政行校企」多主体协同的文化数字化产业生态，连接四川21个地市州，打通学术研究、人才培养、成果转化全链条。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {ALLIANCE_MEMBERS.map((name) => (
              <span
                key={name}
                className="rounded-xl border border-border bg-snow px-5 py-2.5 text-sm font-medium text-ink shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/contact"
              className="inline-block rounded-full border border-bashu-bronze px-8 py-3 text-sm font-medium text-bashu-bronze transition hover:bg-bashu-bronze hover:text-snow"
            >
              加入产业联盟
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
