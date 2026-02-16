"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Wrench,
  Lightbulb,
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { skills } from "@/constants/resume-data";

const iconMap: Record<string, React.ElementType> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  "DevOps & Tools": Wrench,
  Practices: Lightbulb,
};

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Core Technical Stack"
      subtitle="Technologies and tools I work with"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, categoryIndex) => {
          const Icon = iconMap[category.title] || Code2;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 glass-hover transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} />
                </div>
                <h3
                  className="text-lg font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.03,
                    }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/[0.03] border border-white/[0.06] text-foreground-muted hover:text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
