"use client";

const PARTNERS = [
  "北京大学",
  "电子科技大学",
  "三星堆博物馆",
  "腾讯电竞",
  "浪潮集团",
  "四川文化产业职业学院",
  "四川省文化产业发展促进中心",
  "缤果课堂",
  "四渡赤水纪念馆",
  "四川川博明昌",
];

export function MemberLogoWall() {
  const duplicated = [...PARTNERS, ...PARTNERS];

  return (
    <div className="relative flex w-full overflow-hidden">
      <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
        {duplicated.map((name, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center justify-center rounded-xl border border-border bg-snow px-6 py-3 text-sm font-medium text-ink shadow-sm"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
