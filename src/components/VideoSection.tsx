"use client";

import { motion } from "framer-motion";

const VIDEO_SRC =
  "https://static.bingotalk.cn/bingodev/video/2025032318115600.mp4";

export function VideoSection() {
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
            巴蜀风貌 · 一镜一山河
          </h2>
          <p className="mt-2 text-muted">
            影像记录巴蜀文化，数字留存千年文脉
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border bg-ink shadow-lg"
        >
          <div className="relative aspect-video">
            <video
              className="h-full w-full object-cover"
              src={VIDEO_SRC}
              title="巴蜀风貌宣传片"
              controls
              playsInline
              preload="metadata"
            >
              您的浏览器暂不支持视频播放。
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
