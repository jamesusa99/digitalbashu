"use client";

const PARTNERS = [
  "新华文轩",
  "四川新传媒集团",
  "成都传媒集团",
  "四川萃雅教育",
  "缤果课堂",
  "北京大学",
  "电子科技大学",
];

export function ClassroomPartnerWall() {
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
