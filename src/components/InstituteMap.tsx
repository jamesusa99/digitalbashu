"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const nodes = [
  {
    id: "about",
    label: "研究院概况",
    href: "/about",
    cx: 50,
    cy: 20,
    desc: "学术使命与核心定位",
  },
  {
    id: "culture",
    label: "文化体系",
    href: "/digital-collections",
    cx: 22,
    cy: 45,
    desc: "古蜀文明·非遗·山水人文",
  },
  {
    id: "talent",
    label: "人才培养",
    href: "/talent-cultivation",
    cx: 78,
    cy: 45,
    desc: "产教融合·非遗传承·AI实训",
  },
  {
    id: "outcomes",
    label: "数字成果",
    href: "/outcomes",
    cx: 50,
    cy: 75,
    desc: "学术成果转化与产业落地",
  },
  {
    id: "research",
    label: "产业赋能",
    href: "/research",
    cx: 50,
    cy: 47,
    desc: "六大研究方向 · 产教联盟学术引领",
    highlight: true,
  },
];

export function InstituteMap() {
  return (
    <section className="border-y border-border bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            研究院概览
          </h2>
          <p className="mt-2 text-muted">
            五大核心板块协同，学术引领产业落地，产教融合成果全民共享
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mt-12 aspect-[4/3] max-h-[420px] w-full overflow-hidden rounded-2xl border border-border bg-snow shadow-lg sm:aspect-video"
        >
          {/* SVG map: central alliance, four corners for other nodes */}
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full p-4"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Connection lines (glow effect) */}
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-brocade-gold)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--color-bashu-bronze)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {nodes
              .filter((n) => n.id !== "alliance")
              .map((n) => (
                <line
                  key={`line-${n.id}`}
                  x1="50"
                  y1="50"
                  x2={n.cx}
                  y2={n.cy}
                  stroke="url(#lineGrad)"
                  strokeWidth="0.4"
                  strokeDasharray="1 0.5"
                  className="animate-pulse"
                />
              ))}

            {nodes.map((node, i) => (
              <g key={node.id}>
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
                  r={node.highlight ? 8 : 5}
                  cx={node.cx}
                  cy={node.cy}
                  className={node.highlight ? "node-glow fill-brocade-gold" : "fill-bashu-bronze"}
                />
              </g>
            ))}
          </svg>

          {/* Overlay clickable cards */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
            <div className="flex justify-center gap-4 sm:gap-8">
              <Link
                href="/about"
                className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg"
              >
                研究院概况
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <Link
                href="/digital-collections"
                className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg"
              >
                文化体系
              </Link>
              <Link
                href="/research"
                className="rounded-xl bg-brocade-gold/20 px-4 py-2 text-sm font-semibold text-bashu-teal shadow-md backdrop-blur transition hover:bg-brocade-gold/30"
              >
                产业赋能
              </Link>
              <Link
                href="/talent-cultivation"
                className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg"
              >
                人才培养
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="/outcomes"
                className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg"
              >
                数字成果
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
