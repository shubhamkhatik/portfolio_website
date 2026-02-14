"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { experiences } from "@/constants/resume-data";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="My professional journey as a software developer"
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent-blue/30 to-transparent" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className={`relative flex items-start gap-6 mb-12 last:mb-0 pl-12 md:pl-0 ${
              index % 2 === 0
                ? "md:flex-row md:text-right"
                : "md:flex-row-reverse md:text-left"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(139,92,246,0.5)] mt-2 z-10" />

            {/* Card */}
            <div
              className={`flex-1 glass rounded-2xl p-6 glass-hover transition-all duration-300 ${
                index % 2 === 0 ? "md:mr-10" : "md:ml-10"
              }`}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Briefcase size={18} />
                </div>
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <h3
                    className="text-lg font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-accent text-sm font-medium">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-1.5 text-foreground-muted text-xs mt-1">
                    <Calendar size={12} />
                    <span>{exp.date}</span>
                    <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] ml-2">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <ul
                className={`space-y-2 mb-4 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {exp.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="text-foreground-muted text-sm leading-relaxed"
                  >
                    {resp}
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div
                className={`flex flex-wrap gap-1.5 ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-md bg-white/[0.03] border border-white/[0.06] text-foreground-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
