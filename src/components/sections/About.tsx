"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { bio, stats } from "@/constants/resume-data";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const isNumeric = /\d/.test(value);
  const numericValue = isNumeric ? parseInt(value.replace(/\D/g, "")) : 0;
  const suffix = isNumeric ? value.replace(/\d/g, "") : "";

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    let start = 0;
    const end = numericValue;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, isNumeric, numericValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1" style={{ fontFamily: "var(--font-outfit)" }}>
        {isNumeric ? (
          <>
            {count}
            {suffix}
          </>
        ) : (
          value
        )}
      </div>
      <div className="text-foreground-muted text-sm">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="A passionate developer building for the modern web"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-foreground-muted leading-relaxed text-lg">
            {bio.description}
          </p>
          <p className="text-foreground-muted leading-relaxed">
            Currently working at{" "}
            <span className="text-accent font-medium">PreDrag System LLP</span>{" "}
            as a Frontend Developer, where I architect scalable React.js and
            Next.js applications serving thousands of users. I&apos;m passionate
            about performance optimization, clean code, and building tools that
            developers love.
          </p>
          <p className="text-foreground-muted leading-relaxed">
            Beyond work, I share knowledge through technical articles on{" "}
            <a
              href="https://dev.to/shubhamkhatik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:underline"
            >
              Dev.to
            </a>{" "}
            covering topics from system design to frontend performance. I
            believe in continuous learning and contributing back to the
            developer community.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass rounded-2xl p-6 glass-hover transition-all duration-300"
            >
              <AnimatedCounter value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
