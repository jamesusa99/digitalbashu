"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const nodes = [
  { id: "academic", label: "Research", href: "/en/research", cx: 50, cy: 35, desc: "Digital Bashu knowledge & scholarship" },
  { id: "digital", label: "Digital Projects", href: "/en/digital-collections", cx: 28, cy: 58, desc: "Digital collections & immersive experience" },
  { id: "education", label: "Industry-Education", href: "/en/classroom", cx: 72, cy: 58, desc: "Curriculum & training platform" },
  { id: "service", label: "Social Service", href: "/en/cooperation", cx: 50, cy: 78, desc: "Cooperation & co-creation" },
  { id: "alliance", label: "Industry Alliance", href: "/en/industry-alliance", cx: 50, cy: 50, desc: "Gathering industrial strength, creating shared value", highlight: true },
];

export function InstituteMapEN() {
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
            Institute Overview
          </h2>
          <p className="mt-2 text-muted">
            Four pillars and an industry alliance — panoramic presentation, shared access, and industry growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mt-12 aspect-[4/3] max-h-[420px] w-full overflow-hidden rounded-2xl border border-border bg-snow shadow-lg sm:aspect-video"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full p-4" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGradEN" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-brocade-gold)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--color-bashu-bronze)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {nodes.filter((n) => n.id !== "alliance").map((n) => (
              <line key={`line-${n.id}`} x1="50" y1="50" x2={n.cx} y2={n.cy} stroke="url(#lineGradEN)" strokeWidth="0.4" strokeDasharray="1 0.5" className="animate-pulse" />
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
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
            <div className="flex justify-center gap-4 sm:gap-8">
              <Link href="/en/research" className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg">Research</Link>
            </div>
            <div className="flex justify-between">
              <Link href="/en/digital-collections" className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg">Digital Projects</Link>
              <Link href="/en/industry-alliance" className="rounded-xl bg-brocade-gold/20 px-4 py-2 text-sm font-semibold text-bashu-teal shadow-md backdrop-blur transition hover:bg-brocade-gold/30">Industry Alliance</Link>
              <Link href="/en/classroom" className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg">Industry-Education</Link>
            </div>
            <div className="flex justify-center">
              <Link href="/en/cooperation" className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg">Social Service</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
