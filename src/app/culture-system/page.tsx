import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "文化体系 | 巴蜀文化数字研究院",
  description:
    "巴蜀四大文化体系：古蜀文明（三星堆·金沙）、红色革命文化（长征·抗战）、巴蜀非遗民艺（川剧·蜀锦·漆艺）、民族与山水文化（藏羌彝·天府之国）。以巴蜀文化为根，数字技术为翼，共筑文化传承共同体。",
};

const PILLARS = [
  {
    id: "gushu",
    tag: "核心根脉",
    emoji: "🏛",
    accentBg: "bg-amber-50",
    accentText: "text-amber-700",
    accentBorder: "border-amber-200",
    gradientFrom: "from-amber-50",
    gradientTo: "to-yellow-50",
    title: "古蜀文明",
    subtitle: "巴蜀最深厚的文化根脉",
    desc: "古蜀文明是巴蜀文化体系最神秘璀璨的核心，三星堆、金沙遗址所呈现的青铜文明与黄金文化，是中华文明多元一体的重要见证。沃野千里、江河交错的自然禀赋，孕育出开放包容、灵动智慧的巴蜀民系性格。三星堆出土的青铜神树、纵目面具、黄金权杖……每一件文物都承载着古蜀人民的宇宙观与精神认同。",
    digital: "3D文物数字建模 · 古蜀文明数字资源库 · 数字博物馆展陈",
    groups: [
      {
        name: "三星堆文明",
        items: ["青铜神树 · 通天神器", "纵目面具 · 神秘眼睛", "黄金权杖 · 古蜀王权"],
      },
      {
        name: "金沙文明",
        items: ["太阳神鸟 · 成都市徽", "金沙遗址 · 天府之源", "玉器礼制 · 文化传脉"],
      },
      {
        name: "巴蜀山水",
        items: ["都江堰 · 天府水利", "蜀道难 · 千年古道", "三峡文化 · 巴地情怀"],
      },
    ],
  },
  {
    id: "hongse",
    tag: "红色文脉",
    emoji: "⭐",
    accentBg: "bg-red-50",
    accentText: "text-red-700",
    accentBorder: "border-red-200",
    gradientFrom: "from-red-50",
    gradientTo: "to-rose-50",
    title: "红色革命文化",
    subtitle: "铸就民族脊梁的精神高地",
    desc: "四川是近代中国革命史的关键腹地。从汉高祖刘邦以巴蜀为基建立大汉，到抗战时期「四川不灭，华夏不亡」的民族脊梁；从四渡赤水、翻雪山过草地的长征壮举，到开国将帅中四川籍将领占比最高——巴蜀红色文化承载着中华民族最深厚的家国情怀与革命精神。",
    digital: "红色文化VR场景 · 「云景长征」数字交互 · 红色有声读物",
    groups: [
      {
        name: "长征红色文化",
        items: ["四渡赤水 · 转危为机", "翻雪山过草地 · 英雄史诗", "泸定桥 · 铁索寒光"],
      },
      {
        name: "抗战文化",
        items: ["陪都重庆 · 战时中心", "四川不灭 · 华夏不亡", "川军出征 · 保家卫国"],
      },
      {
        name: "新中国建设",
        items: ["开国将帅 · 巴蜀脊梁", "三线建设 · 大后方支撑", "改革开放 · 时代印记"],
      },
    ],
  },
  {
    id: "feiyi",
    tag: "非遗技艺",
    emoji: "🎭",
    accentBg: "bg-teal-50",
    accentText: "text-teal-700",
    accentBorder: "border-teal-200",
    gradientFrom: "from-teal-50",
    gradientTo: "to-emerald-50",
    title: "巴蜀非遗民艺",
    subtitle: "匠心千年的文化传承",
    desc: "巴蜀非遗是中华工匠精神与审美智慧的集中体现。川剧变脸、吐火的惊艳绝技，蜀锦千年的织造技艺，漆艺大漆的东方美学，羌绣藏绣的民族华章……每一项非遗技艺都是巴蜀人民与自然共生、与历史对话的智慧结晶，是研究院数字化传承工作的核心载体。",
    digital: "非遗技艺AI演示 · 传承人数字档案 · 非遗课程数字化",
    groups: [
      {
        name: "表演艺术类",
        items: ["川剧变脸 · 国粹绝活", "川剧吐火 · 巴蜀豪迈", "四川扬琴 · 声韵悠长"],
      },
      {
        name: "工艺美术类",
        items: ["蜀锦 · 天下第一锦", "成都漆艺 · 髹漆千年", "竹编 · 指尖魔术"],
      },
      {
        name: "民族技艺类",
        items: ["羌绣 · 云朵上的刺绣", "藏族唐卡 · 信仰之美", "彝族漆器 · 民族瑰宝"],
      },
    ],
  },
  {
    id: "minzu",
    tag: "民族山水",
    emoji: "🏔",
    accentBg: "bg-green-50",
    accentText: "text-green-700",
    accentBorder: "border-green-200",
    gradientFrom: "from-green-50",
    gradientTo: "to-teal-50",
    title: "民族与山水文化",
    subtitle: "多元共生的文化画卷",
    desc: "巴蜀地区是藏、羌、彝、汉多民族聚居的文化走廊，也是大熊猫故乡与天府之国的自然宝库。从藏羌彝文化走廊的多元民族文化，到川西高原的藏地风情，再到大熊猫文化的全球影响力——春节灯会、成都龙舟、羌历新年……共同民俗凝聚着巴蜀人民的文化认同。",
    digital: "民族文化数字展厅 · 大熊猫IP数字化 · 山水VR全景",
    groups: [
      {
        name: "藏羌彝文化走廊",
        items: ["藏族文化 · 雪域风情", "羌族文化 · 云端石寨", "彝族文化 · 火把狂欢"],
      },
      {
        name: "天府自然生态",
        items: ["大熊猫 · 国宝外交", "峨眉山 · 佛道圣地", "九寨沟 · 童话世界"],
      },
      {
        name: "巴蜀民俗饮食",
        items: ["川菜 · 天下口味", "川茶 · 蒙顶仙茗", "坝坝宴 · 巴蜀人情"],
      },
    ],
  },
];

const VR_ENTRIES = [
  {
    tag: "VR · 360°",
    title: "古蜀文明VR博物馆",
    desc: "360°沉浸式漫游三星堆与金沙遗址，近距离感受青铜神树、纵目面具的神秘魅力",
    status: "筹备中",
    href: "#",
  },
  {
    tag: "VR · 红色",
    title: "「云景长征」沉浸体验",
    desc: "AR/VR/AI融合技术还原长征重要历史场景，四渡赤水、泸定桥战斗身临其境",
    status: "运营中",
    href: "#",
  },
  {
    tag: "AR · 互动",
    title: "川剧变脸AR扫描",
    desc: "扫描川剧变脸图标，在屏幕上呈现动态3D川剧脸谱效果，感受非遗国粹魅力",
    status: "筹备中",
    href: "#",
  },
  {
    tag: "VR · 文旅",
    title: "藏羌彝文化走廊VR",
    desc: "虚拟漫步川西高原、碉楼古寨、彝族村落，感受多民族文化的多彩融合",
    status: "即将上线",
    href: "#",
  },
];

const statusStyle: Record<string, string> = {
  运营中: "bg-green-100 text-green-700",
  已上线: "bg-green-100 text-green-700",
  即将上线: "bg-blue-100 text-blue-700",
  筹备中: "bg-amber-100 text-amber-700",
};

export default function CultureSystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-paper to-snow py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">四大文化体系</h1>
          <p className="mt-3 text-lg text-muted">以巴蜀文化为根，数字技术为翼，共筑文化传承共同体</p>
          <p className="mt-2 text-sm text-muted/70">
            古蜀文明 · 红色革命文化 · 巴蜀非遗民艺 · 民族与山水文化
          </p>
        </div>
      </section>

      {/* 四大文化体系 */}
      {PILLARS.map((pillar, pi) => (
        <section
          key={pillar.id}
          className={`py-16 sm:py-20 ${pi % 2 === 0 ? "bg-snow" : "bg-paper"}`}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* 板块标题 */}
            <div className="mb-10 flex flex-col gap-1 sm:flex-row sm:items-end sm:gap-4">
              <div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${pillar.accentBg} ${pillar.accentText} mb-2`}
                >
                  {pillar.tag}
                </span>
                <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
                  <span className="mr-2">{pillar.emoji}</span>
                  {pillar.title}
                </h2>
                <p className="mt-1 text-base text-muted">{pillar.subtitle}</p>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* 左：描述 + 数字化方向 */}
              <div className="flex flex-col gap-5">
                <p className="text-muted leading-relaxed">{pillar.desc}</p>
                <div
                  className={`rounded-xl border ${pillar.accentBorder} bg-gradient-to-br ${pillar.gradientFrom} ${pillar.gradientTo} px-5 py-4`}
                >
                  <p className={`text-xs font-semibold ${pillar.accentText} mb-1`}>
                    🔬 数字化方向
                  </p>
                  <p className="text-sm text-muted">{pillar.digital}</p>
                </div>
              </div>

              {/* 右：三列文化子项 */}
              <div className="grid grid-cols-3 gap-4">
                {pillar.groups.map((group) => (
                  <div
                    key={group.name}
                    className="rounded-xl border border-border bg-snow p-4 shadow-sm"
                  >
                    <h4 className="font-serif text-xs font-bold text-ink mb-3 leading-snug">
                      {group.name}
                    </h4>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-xs text-muted leading-relaxed">
                          · {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* VR / AR 沉浸式文化体验 */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brocade-gold-soft">
              VR / AR
            </p>
            <h2 className="font-serif text-2xl font-bold text-snow sm:text-3xl">
              沉浸式文化体验
            </h2>
            <p className="mt-2 text-sm text-snow/60">
              扫描文化符号或进入VR全景，在全新维度感受巴蜀文化
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VR_ENTRIES.map((entry) => (
              <a
                key={entry.title}
                href={entry.href}
                className="group flex flex-col rounded-2xl border border-snow/10 bg-snow/5 p-6 transition hover:border-brocade-gold-soft/40 hover:bg-snow/10"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-brocade-gold-soft/30 px-2.5 py-0.5 text-xs text-brocade-gold-soft">
                    {entry.tag}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${statusStyle[entry.status]}`}
                  >
                    {entry.status}
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold text-snow group-hover:text-brocade-gold-soft">
                  {entry.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-snow/60">{entry.desc}</p>
                <span className="mt-5 text-xs font-medium text-brocade-gold-soft/60 transition group-hover:text-brocade-gold-soft">
                  立即体验 →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 底部导引 */}
      <section className="bg-snow py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-muted">探索研究院如何对四大文化体系进行数字化激活</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/research"
              className="rounded-full bg-bashu-bronze px-8 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze/85"
            >
              数字成果
            </Link>
            <Link
              href="/cooperation"
              className="rounded-full border border-bashu-bronze px-8 py-3 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
            >
              合作交流
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
