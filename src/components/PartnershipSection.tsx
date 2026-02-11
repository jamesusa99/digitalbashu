"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Briefcase } from "lucide-react";

const categories = [
  {
    title: "校地合作",
    icon: Building2,
    items: ["地方政府文旅部门", "文博机构", "非遗保护单位"],
  },
  {
    title: "学生实训",
    icon: GraduationCap,
    items: ["数字文创实训", "文化大数据实践", "VR/AR 体验设计"],
  },
  {
    title: "企业项目",
    icon: Briefcase,
    items: ["产业联盟成员项目", "联合研发与孵化", "智慧文博解决方案"],
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
            合作与实践
          </h2>
          <p className="mt-2 text-muted">
            校地合作、学生实训、企业项目研发与产业联盟协同
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-snow p-6 shadow-sm"
            >
              <cat.icon className="h-10 w-10 text-bashu-bronze" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-ink">
                {cat.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {cat.items.map((item) => (
                  <li key={item}>· {item}</li>
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
            href="/industry-alliance"
            className="rounded-full bg-bashu-bronze px-6 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
          >
            了解产业联盟
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
