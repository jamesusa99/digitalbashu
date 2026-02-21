import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Cpu, BookOpen, Award, Users, School, Microscope, Globe } from "lucide-react";
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
];

const bingoCourses = [
  {
    title: "《典籍里的首饰》",
    desc: "探索传统饰品背后的历史典籍，结合数字设计模拟制作过程，体验古人审美智慧。",
  },
  {
    title: "《丹漆成器》",
    desc: "数字化呈现成都漆艺的传统工序，体验大漆文化的现代转型与美学价值。",
  },
  {
    title: "《木意匠心》",
    desc: "通过数字建模解析传统木作结构，领略巴蜀建筑与家具的精巧工艺。",
  },
  {
    title: "《妙笔丹青》",
    desc: "利用数字化绘画工具，传承巴蜀传统书画的笔墨神韵与文化意境。",
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
  { name: "北京大学", role: "学术与技术支持", desc: "提供沉浸式文旅交互技术攻关支撑，参与「构建-融合-交互-呈现-评价」全链条技术引擎研究。" },
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
      <Section
        title="缤果AI学院·AI教育实践基地"
        subtitle="巴蜀文化数字研究院AI教育实践基地"
        bg="paper"
      >
        <div className="mx-auto max-w-3xl space-y-4 text-muted mb-10">
          <p>
            缤果AI学院作为<strong className="text-ink">巴蜀文化数字研究院指定AI教育实践基地</strong>，由四川萃雅教育科技承建运营。研究院为其提供学术引领、课程研发指导与资源支撑，推动实践基地的AI实训落地、人才输送与技术转化。
          </p>
          <p>
            依托AI与数字技术推动传统文化创新活化，项目实现跨区域、多场景规模化落地，覆盖四川、北京、广东、新疆等地区，深入中小学、社区、研学基地、文旅景区、校外机构等场所，打造可复制、可推广的传统文化数字传承新模式。
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-serif text-lg font-semibold text-ink mb-4">缤果课堂·非遗数字化精品课</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bingoCourses.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
                <BookOpen className="h-7 w-7 text-bashu-bronze mb-2" />
                <h4 className="font-semibold text-sm text-ink">{c.title}</h4>
                <p className="mt-2 text-xs text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-serif text-lg font-semibold text-ink mb-4">前沿技术与实践课程</h3>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { title: "AIGC文化创意实训", desc: "联合电子科技大学研发，涵盖AIGC在巴蜀文创设计、数字角色开发中的应用，每年提供2000名开放式产教融合实践名额。" },
              { title: "VR/AR体验设计实训", desc: "基于「云景长征」等重大项目，教授沉浸式场景构建与多模态交互技术，攻关「构建-融合-交互-呈现-评价」全链条技术引擎。" },
              { title: "文化大数据实践", desc: "学习文化资源的数据标注、确权评估及数字资产化管理流程，对接文化数字艺术品交易平台（深艺交）相关实训项目。" },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-snow p-5 shadow-sm">
                <Cpu className="h-7 w-7 text-bashu-bronze mb-2" />
                <h4 className="font-semibold text-sm text-ink">{c.title}</h4>
                <p className="mt-2 text-xs text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

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

      {/* 实训成果 */}
      <Section title="人才培养成果" subtitle="学术指引下的产业落地成效">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "数字化精品课程", value: "4门 / 30课时", note: "《典籍里的首饰》《丹漆成器》《木意匠心》《妙笔丹青》，全程在线可学" },
            { label: "在线学习覆盖人数", value: "累计超3000人", note: "覆盖成都市8所中小学及5个社区，包括金凤社区、东安湖社区等" },
            { label: "AI实训实践名额", value: "每年2000人", note: "面向联盟院校及社会合作院校开放，实现定向人才输送" },
            { label: "研学落地覆盖地区", value: "4大区域", note: "四川、北京、广东、新疆，深入中小学、社区、研学基地、文旅景区" },
            { label: "产教联盟覆盖范围", value: "四川21地市州", note: "构建统一供应链与标准价值体系，推动人才培养落地" },
            { label: "空中课堂支教服务", value: "凉山州等地区", note: "将数字化文化课程引入凉山州等地，助力教育均衡发展" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-snow p-6 shadow-sm text-center">
              <div className="font-serif text-2xl font-bold text-bashu-bronze">{item.value}</div>
              <div className="mt-1 font-semibold text-sm text-ink">{item.label}</div>
              <p className="mt-2 text-xs text-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 学习资源与培训入口 */}
      <Section title="培养合作与对接通道" subtitle="学术审核为先 · 专业对接服务" bg="paper">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: School, title: "高校合作培养对接", desc: "面向联盟内高校及社会合作院校，提供联合培养、实训共建、联合课程开发对接服务。请提交院校资质与合作意向书，研究院学术委员会评估后安排对接。" },
            { icon: Globe, title: "非遗传承人培育对接", desc: "面向各级非遗传承人及非遗保护单位，提供传承人数字化培训、师生结对传承、研学授课等对接服务，需提交传承人认定证书。" },
            { icon: Cpu, title: "AI实训专项对接", desc: "依托缤果AI学院·AI教育实践基地，面向合作院校学生及社会学员开放AI文化创意实训名额，请通过官方渠道提交申请，研究院审核后统一安排。" },
            { icon: Award, title: "产教联盟专项培养", desc: "《巴蜀文化数字化青年学者培养计划》及《AI+文化数字化实训项目》面向联盟成员院校开放，欢迎联盟内院校申报专项培养名额。" },
            { icon: Users, title: "社会专业人才培训", desc: "针对政府干部、文旅企业、文博机构人员，开展数字化文化贸易与城市美学塑造专题培训，欢迎相关单位联系研究院提交培训需求。" },
            { icon: Microscope, title: "非遗数字研学对接", desc: "面向中小学、社区、研学基地、文旅景区提供非遗数字研学课程与实践方案，研究院提供学术课程指导与传承人资源支撑，欢迎联系对接。" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <Icon className="h-9 w-9 text-bashu-bronze" />
                <h3 className="mt-3 font-serif text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 rounded-2xl border border-bashu-bronze/30 bg-bashu-bronze/5 p-6 text-center">
          <p className="text-sm text-muted">
            所有培养合作申请均设有学术审核环节。涉及产教联盟、非遗传承、缤果AI实训、非遗数字研学的对接，额外进行学术资质审核，确保合作方与研究院学术定位匹配。
          </p>
          <p className="mt-2 text-sm font-medium text-ink">
            联系邮箱：contact@digitalbashu.org.cn　电话：028-85769208
          </p>
        </div>
      </Section>
    </>
  );
}
