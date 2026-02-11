import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-paper to-snow py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 text-lg text-muted">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
