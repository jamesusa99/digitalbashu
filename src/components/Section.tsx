import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bg?: "paper" | "snow" | "paper-warm";
}

export function Section({
  title,
  subtitle,
  children,
  className = "",
  bg,
}: SectionProps) {
  const bgClass = bg === "paper" ? "bg-paper" : bg === "paper-warm" ? "bg-paper-warm" : "";
  return (
    <section className={`py-12 sm:py-16 ${bgClass} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
