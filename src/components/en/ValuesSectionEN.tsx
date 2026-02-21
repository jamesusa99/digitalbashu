"use client";

import { motion } from "framer-motion";
import { BookMarked, Lightbulb, Handshake, Heart, Award } from "lucide-react";

const values = [
  {
    key: "inheritance",
    title: "Inheritance",
    icon: BookMarked,
    desc: "Deep excavation and living transmission of Bashu cultural heritage.",
  },
  {
    key: "innovation",
    title: "Innovation",
    icon: Lightbulb,
    desc: "Technology-driven cultural creativity, leading industrial transformation.",
  },
  {
    key: "collaboration",
    title: "Collaboration",
    icon: Handshake,
    desc: "Bringing together diverse stakeholders to co-build an open digital ecosystem.",
  },
  {
    key: "inclusiveness",
    title: "Inclusiveness",
    icon: Heart,
    desc: "Promoting cultural exchange and access for all backgrounds and communities.",
  },
  {
    key: "professionalism",
    title: "Professionalism",
    icon: Award,
    desc: "Rigorous scholarship and high-quality output that sets the industry benchmark.",
  },
];

export function ValuesSectionEN() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Core Values
          </h2>
          <p className="mt-2 text-muted">
            Inheritance · Innovation · Collaboration · Inclusiveness · Professionalism
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, i) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
            >
              <value.icon className="h-10 w-10 text-bashu-bronze transition group-hover:text-brocade-gold" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
