"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  Lightbulb,
  TrendingUp,
  ExternalLink,
  Github,
  ChevronDown,
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { caseStudies } from "@/constants/case-studies";

const psrIcons = {
  problem: AlertCircle,
  solution: Lightbulb,
  result: TrendingUp,
};

const psrColors = {
  problem: "text-red-400 bg-red-400/10",
  solution: "text-blue-400 bg-blue-400/10",
  result: "text-green-400 bg-green-400/10",
};

export function CaseStudies() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Deep dives into my most impactful work"
    >
      <div className="space-y-6">
        {caseStudies.map((study, index) => {
          const isOpen = expanded === index;

          return (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass rounded-2xl overflow-hidden glass-hover transition-all duration-300"
            >
              {/* Header — Always Visible */}
              <button
                onClick={() => setExpanded(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">  
                    {study.metrics.slice(0, 2).map((m) => (
                      <span
                        key={m.label}
                        className="hidden sm:inline-flex px-3 py-1 rounded-full bg-green-400/10 text-green-400 text-xs font-medium"
                      >
                        {m.value} {m.label}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {study.title}
                  </h3>
                  <p className="text-foreground-muted text-sm mt-1">
                    {study.subtitle}
                  </p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-foreground-muted transition-transform duration-300 shrink-0 ml-4 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 space-y-6">
                      {/* PSR Sections */}
                      {(
                        ["problem", "solution", "result"] as const
                      ).map((section) => {
                        const Icon = psrIcons[section];
                        return (
                          <motion.div
                            key={section}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * ["problem", "solution", "result"].indexOf(section) }}
                            className="flex gap-4"
                          >
                            <div
                              className={`p-2 rounded-lg ${psrColors[section]} shrink-0 h-fit mt-0.5`}
                            >
                              <Icon size={16} />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1.5">
                                {section}
                              </h4>
                              <p className="text-foreground-muted text-sm leading-relaxed">
                                {study[section]}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3">
                        {study.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                          >
                            <div
                              className="text-lg font-bold gradient-text"
                              style={{ fontFamily: "var(--font-outfit)" }}
                            >
                              {metric.value}
                            </div>
                            <div className="text-foreground-muted text-xs mt-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech + Links */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                        <div className="flex flex-wrap gap-2">
                          {study.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs rounded-lg bg-accent/5 border border-accent/10 text-foreground-muted"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          <a
                            href={study.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                          <a
                            href={study.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full glass text-foreground-muted text-sm font-medium hover:text-foreground transition-colors"
                          >
                            <Github size={14} />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
