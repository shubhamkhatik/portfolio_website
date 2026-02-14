"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { projects } from "@/constants/projects";

export function Projects() {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper
      id="all-projects"
      title="All Projects"
      subtitle="A collection of things I've built"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="glass rounded-2xl p-6 glass-hover transition-all duration-300 group flex flex-col"
          >
            {/* Title & Description */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-foreground-muted hover:text-foreground transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-foreground-muted hover:text-accent transition-colors"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {project.skills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs rounded-md bg-white/[0.03] border border-white/[0.06] text-foreground-muted"
                >
                  {skill}
                </span>
              ))}
              {project.skills.length > 5 && (
                <span className="px-2.5 py-1 text-xs rounded-md bg-accent/5 border border-accent/10 text-accent">
                  +{project.skills.length - 5}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
