import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  desc?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, desc, children }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-paper to-snow py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 text-lg text-muted">{subtitle}</p>}
        {desc && <p className="mt-2 text-sm text-muted/80 max-w-2xl mx-auto">{desc}</p>}
        {children}
      </div>
    </section>
  );
}
