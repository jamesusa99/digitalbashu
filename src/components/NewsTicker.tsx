"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const itemsCN = [
  { type: "新闻", text: "研究院与某市文旅局签署巴蜀文化数字化战略合作协议" },
  { type: "学术", text: "产教联盟学术论坛将于本季度举行，聚焦非遗数字化传承与产业落地" },
  { type: "成果", text: "三星堆数字复原项目入选省级文化数字化示范案例" },
  { type: "人才", text: "研究院与缤果AI学院联合开展AI教育实训，新一期招募开启" },
  { type: "学术", text: "非遗传承人数字化培育项目结项，师生结对传承成果展示" },
  { type: "合作", text: "与多所高校共建巴蜀文化数字人才培养课程体系" },
];

const itemsEN = [
  { type: "News", text: "The Institute signs a Bashu culture digitisation strategic cooperation agreement with a municipal cultural tourism bureau" },
  { type: "Academic", text: "Alliance academic forum this quarter focuses on ICH digital inheritance and industry implementation" },
  { type: "Outcome", text: "Sanxingdui digital restoration project selected as a provincial cultural digitisation model case" },
  { type: "Talent", text: "Institute and Bingo AI College jointly launch new AI education training cohort — enrolment now open" },
  { type: "ICH", text: "ICH Inheritor Digital Cultivation Project concluded; paired inheritance outcomes on display" },
  { type: "Partnership", text: "Co-developing Bashu cultural digital talent-cultivation curricula with multiple universities" },
];

export function NewsTicker() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");
  const items = isEN ? itemsEN : itemsCN;
  const label = isEN ? "Latest Updates" : "最新动态";

  return (
    <section className="border-b border-border bg-snow py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 overflow-hidden">
          <span className="shrink-0 font-serif text-sm font-semibold text-bashu-bronze">
            {label}
          </span>
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1200] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...items, ...items].map((item, i) => (
                <span key={i} className="flex shrink-0 items-center gap-2 text-sm text-muted">
                  <span className="rounded bg-paper-warm px-2 py-0.5 text-xs text-bashu-bronze">
                    {item.type}
                  </span>
                  {item.text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
