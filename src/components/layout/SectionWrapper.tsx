"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  title,
  subtitle,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding relative ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {title && (
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
