import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Cpu, Award, Users, School, Microscope, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "人才培养 | 巴蜀文化数字研究院",
  description:
    "巴蜀文化数字研究院人才培养板块：依托巴蜀文化创意（数字）产教联盟、缤果AI学院（AI教育实践基地）与非遗数字研学，构建非遗传承人培育、AI实训、高校联合培养、社会专业人才培养的全链条体系。",
};

const trainingTypes = [
  {
    icon: School,
    title: "高校合作培养",
    desc: "与联盟内高校、缤果AI学院共建实训基地，联合培养研究生/本科生，开设AI+文化数字化选修课，共建人才培养方案。",
    tags: ["联盟院校合作", "学分互认", "联合导师制", "AI+文创专业"],
  },
  {
    icon: Globe,
    title: "非遗传承人培育",
    desc: "联合产教联盟、非遗数字研学，开展非遗传承人数字化能力培训与巴蜀文化传承人才培养，组织传承人参与研学实践，推动师生结对传承。",
    tags: ["数字化能力培训", "师生结对传承", "研学实践参与", "数字档案建设"],
  },
  {
    icon: Users,
    title: "社会专业人才培养",
    desc: "面向文旅、文博、文创行业，联合产教联盟、缤果AI学院、非遗数字研学，开展巴蜀文化数字化专业人才、AI+文化数字化专业人才培训。",
    tags: ["文旅行业", "文博机构", "文创企业", "人才输送通道"],
  },
  {
    icon: Award,
    title: "联盟专项培养",
    desc: "依托巴蜀文化创意（数字）产教联盟，开展《巴蜀文化数字化青年学者培养计划》《非遗传承人与高校师生结对培养项目》等专项人才培养项目。",
    tags: ["青年学者计划", "师生结对", "联盟协同", "跨校资源共享"],
  },
  {
    icon: Cpu,
    title: "AI实训专项",
    desc: "依托缤果AI学院·巴蜀文化数字研究院AI教育实践基地，开展AI教育实训，培育AI+文化数字化复合型人才，实现定向产业输送。",
    tags: ["AI文化创意实训", "AIGC技术应用", "实训课程研发", "人才定向输送"],
  },
  {
    icon: Microscope,
    title: "非遗数字研学",
    desc: "面向中小学、社区、研学基地、文旅景区提供非遗数字研学课程与实践方案，研究院提供学术课程指导与传承人资源支撑。",
    tags: ["中小学研学", "社区推广", "文旅景区", "传承人授课"],
  },
];

const bingoCourses = [
  {
    emoji: "🎭",
    level: "进阶 · 40学时",
    form: "线上+线下",
    title: "非遗数字化保护与传承",
    desc: "系统学习非遗数字化采集、整理、展示与传播的全流程技能，结合巴蜀非遗实际案例操作，掌握传承人数字档案建设方法。",
  },
  {
    emoji: "💡",
    level: "实战 · 32学时",
    form: "线上",
    title: "文化IP设计与孵化",
    desc: "从巴蜀文化元素提炼到IP设计、产品开发、商业授权的全链条实战课程，以川剧、三星堆、大熊猫等为核心案例素材。",
  },
  {
    emoji: "🗺",
    level: "应用 · 24学时",
    form: "线上",
    title: "数字文旅运营与策划",
    desc: "数字化文旅场景设计、线上推广、直播运营等实用技能训练，结合巴蜀文旅资源与实际项目案例，培养文旅数字化运营人才。",
  },
  {
    emoji: "📊",
    level: "专业 · 48学时",
    form: "线上+线下",
    title: "文化大数据分析与应用",
    desc: "掌握文化数据采集、清洗、分析与可视化技能，服务巴蜀文化产业决策与数字资产化评估，对接文化数字化平台实操。",
  },
  {
    emoji: "🤖",
    level: "前沿 · 32学时",
    form: "线上",
    title: "AIGC与文化创意应用",
    desc: "探索AI在巴蜀文化内容生产、艺术设计、非遗传承等场景的深度应用实践，每年提供2000名开放式产教融合实践名额。",
  },
  {
    emoji: "🥽",
    level: "专业 · 40学时",
    form: "线下为主",
    title: "VR/AR沉浸式文化体验设计",
    desc: "学习沉浸式文化体验场景的设计、开发与运营，基于「云景长征」等重大项目，攻关全链条技术引擎，打造下一代文化体验。",
  },
];

const internshipBases = [
  {
    emoji: "🎨",
    category: "文创科技",
    name: "文创科技企业实习基地",
    roles: ["IP设计师", "数字内容运营", "文化数据分析师"],
  },
  {
    emoji: "🗺",
    category: "数字文旅",
    name: "数字文旅集团实习基地",
    roles: ["数字文旅策划", "VR体验设计", "文旅直播运营"],
  },
  {
    emoji: "🏛",
    category: "文博机构",
    name: "巴蜀文博机构实习基地",
    roles: ["数字化保护助理", "展陈设计", "文物数据管理"],
  },
];

const expertGroups = [
  {
    emoji: "📜",
    title: "巴蜀文化研究",
    desc: "来自四川大学、西南大学、四川师范大学等高校的巴蜀文化、民俗学、文物保护领域权威专家，为研究院学术方向与传承人培育提供专业指导。",
  },
  {
    emoji: "💻",
    title: "数字技术专家",
    desc: "大数据、VR/AR、AIGC、区块链等数字技术领域的产业专家与学者，为AI实训课程研发、数字化项目落地提供前沿技术支撑。",
  },
  {
    emoji: "🏭",
    title: "文化产业顾问",
    desc: "文创、文旅、文博、IP运营等文化产业领域的资深从业者与顾问，为人才就业方向、实习基地共建与产业对接提供实践经验指导。",
  },
];

const ichInheritors = [
  { craft: "川剧变脸", level: "国家级", desc: "国家级非遗代表性传承人，参与研究院川剧数字化记录与AI演示项目。" },
  { craft: "蜀锦织造", level: "省级", desc: "省级非遗代表性传承人，主导蜀锦纹样数字化建档与AI辅助创作研究。" },
  { craft: "成都漆艺", level: "省级", desc: "省级非遗代表性传承人，参与《丹漆成器》数字课程研发与实训授课。" },
  { craft: "竹编技艺", level: "市级", desc: "市级非遗代表性传承人，参与非遗数字研学课程设计与研学授课。" },
  { craft: "四川皮影", level: "省级", desc: "省级非遗代表性传承人，参与皮影戏3D数字复原与沉浸式展陈项目。" },
  { craft: "藏羌彝刺绣", level: "国家级", desc: "国家级非遗代表性传承人，参与《中国少数民族服饰文化与传统技艺》编撰与数字化记录。" },
];

const trainingBases = [
  { name: "新华文轩", role: "文化教育出版", desc: "在数字化出版与教育资源分发领域提供深厚支撑，联合研发数字化系列教材与课程资源包。" },
  { name: "四川新传媒集团", role: "传媒与传播", desc: "联合开展新媒体流量运营实训，打造农文旅IP短视频直播矩阵，助力学生高质量就业。" },
  { name: "成都传媒集团", role: "传媒与传播", desc: "协同构建传媒实训基地，开展数字文化传播与IP孵化联合实训项目。" },
  { name: "缤果AI学院（AI教育实践基地）", role: "数字技术教育", desc: "作为研究院指定AI教育实践基地，承载AIGC非遗课程、AI数字研学、青少年数字素养培育的实训落地工作。" },
  { name: "成都文旅集团", role: "文旅产业合作", desc: "联合开展成都文旅资源数字化升级与文化体验项目共建，为学员提供文旅行业实习就业对接通道。" },
  { name: "电子科技大学", role: "学术与技术支持", desc: "联合研发AIGC公选课及实训平台，为师生提供生成式人工智能创作环境。" },
  { name: "四川美术学院", role: "艺术与设计", desc: "联合开展巴蜀文化数字艺术设计实训，为文创原型研发与非遗美学研究提供艺术专业支撑。" },
  { name: "四川大学", role: "学术研究", desc: "联合开展巴蜀文化学术研究与数字人文研究，推动成渝地区双城经济圈文化研究合作。" },
];

export default function TalentCultivationPage() {
  return (
    <>
      <PageHero
        title="人才培养"
        subtitle="学术引领·产教融合·非遗传承·AI赋能"
        desc="依托巴蜀文化创意（数字）产教联盟、缤果AI学院（AI教育实践基地）与非遗数字研学，构建学术研究+数字技术+产教实践+联盟协同+AI赋能+研学落地六位一体人才培养体系。"
      />

      {/* 培养体系总览 */}
      <Section title="六位一体培养体系" subtitle="学术标准为纲，实践落地为本">
        <div className="mx-auto max-w-3xl space-y-4 text-muted text-center mb-10">
          <p>
            研究院以学术研究为引领，以产教联盟为平台，以缤果AI学院为AI教育实践基地，以非遗数字研学为实践载体，构建了
            <strong className="text-ink">学术研究 · 数字技术 · 产教实践 · 联盟协同 · AI赋能 · 研学落地</strong>
            六位一体的人才培养体系。
          </p>
          <p>
            体系覆盖课程建设（含巴蜀文化课程、数字化技术课程、非遗传承课程、AI技术应用课程）、实训体系（依托联盟实训基地、缤果AI教育实践基地、非遗数字研学实践基地）、师资体系（研究院导师、非遗传承人、行业专家、缤果AI技术导师、研学导师），确保人才培养衔接学术引领与产业落地。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainingTypes.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <Icon className="h-9 w-9 text-bashu-bronze" />
                <h3 className="mt-3 font-serif text-base font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{t.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-bashu-bronze/10 px-3 py-1 text-xs font-medium text-bashu-bronze">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 缤果AI学院·AI教育实践基地 */}
      <section className="bg-paper py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-2">
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
              缤果AI学院·AI教育实践基地
            </h2>
            <p className="mt-1 text-muted">巴蜀文化数字研究院AI教育实践基地</p>
          </div>

          <div className="mt-6 mb-10 mx-auto max-w-3xl space-y-3 text-muted">
            <p>
              缤果AI学院作为<strong className="text-ink">巴蜀文化数字研究院指定AI教育实践基地</strong>，由四川萃雅教育科技承建运营。研究院为其提供学术引领、课程研发指导与资源支撑，推动实践基地的AI实训落地、人才输送与技术转化。
            </p>
            <p>
              依托AI与数字技术推动传统文化创新活化，项目实现跨区域、多场景规模化落地，覆盖四川、北京、广东、新疆等地区，深入中小学、社区、研学基地、文旅景区等场所，打造可复制、可推广的传统文化数字传承新模式。
            </p>
            <p className="text-sm text-muted/70">
              👥 适合人群：企业员工、高校学生、文化从业者、文化爱好者
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bingoCourses.map((c) => (
              <div
                key={c.title}
                className="flex flex-col rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-2xl">{c.emoji}</span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                    {c.level}
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">{c.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted">形式：{c.form}</span>
                  <button
                    type="button"
                    className="rounded-full border border-bashu-bronze px-3 py-1 text-xs font-medium text-bashu-bronze transition hover:bg-paper-warm"
                  >
                    报名参加
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 实习就业 */}
      <section className="bg-snow py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">实习就业</h2>
            <p className="mt-1 text-muted">与合作企业共建实习基地，打通「培养-实践-就业」全链条</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {internshipBases.map((base) => (
              <div
                key={base.name}
                className="flex flex-col rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-2xl">{base.emoji}</span>
                  <span className="rounded-full bg-bashu-bronze/10 px-3 py-0.5 text-xs font-medium text-bashu-bronze">
                    {base.category}
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold text-ink">{base.name}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {base.roles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-bashu-bronze/50 shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-5 rounded-full bg-bashu-bronze px-5 py-2 text-sm font-medium text-snow transition hover:bg-bashu-bronze/85"
                >
                  申请实习
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-paper p-6">
            <h3 className="font-serif text-base font-semibold text-ink mb-2">创业扶持</h3>
            <p className="text-sm text-muted">
              为优秀人才提供创业扶持：
              <span className="mx-1 font-medium text-ink">技术支持 · 资源对接 · 导师指导 · 联盟资源共享</span>
            </p>
          </div>
        </div>
      </section>

      {/* 专家智库 */}
      <section className="bg-paper py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">专家智库</h2>
            <p className="mt-1 text-muted">整合文化、数字领域顶尖专家，打造巴蜀文化数字化人才智库</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {expertGroups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="mb-4 text-3xl">{group.emoji}</div>
                <h3 className="font-serif text-base font-semibold text-ink">{group.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{group.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              className="rounded-full border border-bashu-bronze px-8 py-3 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
            >
              申请专家咨询
            </button>
          </div>
        </div>
      </section>

      {/* 巴蜀非遗传承人·核心子模块 */}
      <Section title="巴蜀非遗传承人" subtitle="数字化传承 · 学术培育 · 实践落地">
        <div className="mx-auto max-w-3xl space-y-4 text-muted mb-10">
          <p>
            研究院联合巴蜀文化创意（数字）产教联盟与非遗数字研学，将非遗传承人的数字化培育作为人才培养板块的核心支柱，开展传承人数字化能力培训、师生结对传承、非遗技艺进校园（联盟院校及缤果相关合作院校）、研学授课等系列活动。
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ichInheritors.map((person, i) => (
            <div key={i} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Microscope className="h-7 w-7 text-bashu-bronze shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm text-ink">{person.craft}</h4>
                  <span className="rounded-full bg-bashu-teal/15 px-2 py-0.5 text-xs font-medium text-bashu-teal">
                    {person.level}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">{person.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-paper-warm p-8">
          <h3 className="font-serif text-lg font-semibold text-ink mb-3">传承人数字化成果体系</h3>
          <div className="grid gap-4 sm:grid-cols-3 text-sm text-muted">
            <div>
              <strong className="text-ink block mb-1">数字化记录成果</strong>
              技艺视频存档、3D建模与数字档案，配合研学授课视频，为传承人建立完整数字画像。
            </div>
            <div>
              <strong className="text-ink block mb-1">非遗数字研学实践</strong>
              传承人参与研学课程设计与授课，与师生结对传承，研学学员实践作品纳入成果展示。
            </div>
            <div>
              <strong className="text-ink block mb-1">AI技术协同成果</strong>
              借助缤果AI学院协同研发，制作AI非遗技艺演示、数字非遗档案与AI辅助文创设计原型。
            </div>
          </div>
        </div>
      </Section>

      {/* 实训基地与合作背景 */}
      <Section title="实训基地与战略合作" subtitle="政行校企协同 · 学术标准引领" bg="paper">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainingBases.map((b, i) => (
            <div key={i} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
              <span className="inline-block rounded-full bg-bashu-bronze/10 px-3 py-0.5 text-xs font-medium text-bashu-bronze mb-2">
                {b.role}
              </span>
              <h4 className="font-semibold text-sm text-ink">{b.name}</h4>
              <p className="mt-2 text-xs text-muted leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-snow p-8">
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">开放型产教融合实践基地</h3>
          <p className="text-sm text-muted">
            在成都市双流区建设14000平方米实训街区，包含"村游技"电竞赛事中心与新媒体流量运营基地，每年提供
            <strong className="text-ink">2000名</strong>
            开放式产教融合实践名额，连接四川21个地市州，构建统一的供应链与标准价值体系。
          </p>
        </div>
      </Section>
    </>
  );
}
