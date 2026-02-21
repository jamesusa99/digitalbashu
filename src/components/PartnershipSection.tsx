"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Award, Cpu } from "lucide-react";

const capabilities = [
  {
    title: "巴蜀文化数字化研究",
    icon: FlaskConical,
    desc: "以学术引领为核心，开展古蜀文明、非遗传承、红色文化的系统性数字化研究，构建权威学术话语体系。",
    items: ["古蜀文明数字复原", "非遗数字化记录", "文化大数据研究"],
  },
  {
    title: "产教融合人才培养",
    icon: BookOpen,
    desc: "依托巴蜀文化创意（数字）产教联盟，融合缤果AI学院实训资源，构建六位一体的专业人才培养体系。",
    items: ["AI+文化数字化实训", "非遗传承人培育", "产教联盟联合培养"],
  },
  {
    title: "学术成果转化服务",
    icon: Award,
    desc: "将学术研究成果转化为数字文博解决方案、非遗数字课程、AI教育实训平台，实现学术价值的社会服务落地。",
    items: ["智慧文博解决方案", "非遗数字研学", "数字文创成果转化"],
  },
  {
    title: "AI教育实践基地",
    icon: Cpu,
    desc: "依托缤果AI学院建设「AI教育实践基地」，开展AI技术在文化数字化领域的教育实训与研发应用，培育复合型人才。",
    items: ["AI文化创意实训", "AIGC技术应用研发", "产业人才定向输送"],
  },
];

export function PartnershipSection() {
  return (
    <section className="border-t border-border bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            研究院核心能力
          </h2>
          <p className="mt-2 text-muted">
            学术引领 · 产业落地 · 人才培养 · 社会服务
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-snow p-6 shadow-sm"
            >
              <cap.icon className="h-9 w-9 text-bashu-bronze" />
              <h3 className="mt-3 font-serif text-base font-semibold text-ink">
                {cap.title}
              </h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">{cap.desc}</p>
              <ul className="mt-3 space-y-1 text-xs text-muted/80">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-center gap-1">
                    <span className="text-bashu-bronze">·</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/talent-cultivation"
            className="rounded-full bg-bashu-bronze px-6 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
          >
            人才培养
          </Link>
          <Link
            href="/cooperation"
            className="rounded-full border border-bashu-bronze px-6 py-3 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
          >
            合作交流
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
