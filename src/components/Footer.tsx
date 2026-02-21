"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");
  const base = isEN ? "/en" : "";

  const footerLinks = isEN
    ? [
        { href: `${base}/about`, label: "Institute Overview" },
        { href: `${base}/digital-collections`, label: "Culture System" },
        { href: `${base}/outcomes`, label: "Digital Outcomes" },
        { href: `${base}/research`, label: "Industry Empowerment" },
        { href: `${base}/cooperation`, label: "Cooperation" },
        { href: `${base}/talent-cultivation`, label: "Talent Development" },
        { href: `${base}/news`, label: "News" },
        { href: `${base}/contact`, label: "Contact Us" },
      ]
    : [
        { href: "/about", label: "研究院概况" },
        { href: "/digital-collections", label: "文化体系" },
        { href: "/outcomes", label: "数字成果" },
        { href: "/research", label: "产业赋能" },
        { href: "/cooperation", label: "合作交流" },
        { href: "/talent-cultivation", label: "人才培养" },
        { href: "/news", label: "资讯动态" },
        { href: "/contact", label: "联系我们" },
      ];

  return (
    <footer className="border-t border-border bg-ink text-snow">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-semibold text-brocade-gold-soft">
              {isEN ? "Bashu Culture Digital Research Institute" : "巴蜀文化数字研究院"}
            </h3>
            <p className="mt-2 text-sm text-snow/80">
              {isEN ? "A Panoramic Lens on Bashu Culture — Digital Heritage, Shared by All" : "巴蜀文化全景呈现，数字化成果全民共享"}
            </p>
            <p className="mt-1 text-xs text-snow/60">
              {isEN ? "Digital Technology Awakens Bashu's Cultural Veins" : "Digital Technology Awakens Bashu&apos;s Cultural Veins"}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-snow/90">{isEN ? "Navigation" : "栏目导航"}</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-snow/70 transition hover:text-brocade-gold-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-snow/90">{isEN ? "Contact" : "联系方式"}</h4>
            <ul className="mt-3 space-y-2 text-sm text-snow/70">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0 text-brocade-gold-soft" />
                {isEN ? "Shuangliu District, Chengdu, Sichuan" : "四川省成都市双流区"}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-brocade-gold-soft" />
                028-85769208
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-brocade-gold-soft" />
                contact@digitalbashu.org.cn
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-snow/90">{isEN ? "Core Values" : "核心价值观"}</h4>
            <p className="mt-2 text-xs text-snow/60">
              {isEN
                ? "Inheritance · Innovation · Collaboration · Inclusiveness · Professionalism"
                : "传承 · 创新 · 协同 · 包容 · 专业"}
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-snow/20 pt-8 text-center text-xs text-snow/50 space-y-1">
          <p className="text-snow/40">
            {isEN
              ? "Academic Lead Unit of Bashu Culture Creative (Digital) Industry-Education Alliance | Bingo AI College · AI Education Practice Base of Bashu Institute | ICH Digital Study Tour · Practice Cooperation Partner"
              : "巴蜀文化创意（数字）产教联盟学术引领单位 | 缤果AI学院·巴蜀文化数字研究院AI教育实践基地 | 非遗数字研学·实践合作载体"}
          </p>
          <p>© {new Date().getFullYear()} {isEN ? "Bashu Culture Digital Research Institute. All rights reserved." : "巴蜀文化数字研究院 版权所有"}</p>
        </div>
      </div>
    </footer>
  );
}
