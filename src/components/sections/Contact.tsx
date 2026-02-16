"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { bio } from "@/constants/resume-data";

const socials = [
  { icon: Github, href: bio.github, label: "GitHub", color: "hover:text-white" },
  { icon: Linkedin, href: bio.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Twitter, href: bio.x, label: "X / Twitter", color: "hover:text-sky-400" },
  {
    icon: ArrowUpRight,
    href: bio.devto,
    label: "Dev.to",
    color: "hover:text-green-400",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bio.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = bio.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect"
      subtitle="I'm always open to discussing new opportunities and ideas"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-accent/10 text-accent">
              <Mail size={24} />
            </div>
          </div>
          <h3
            className="text-xl font-semibold text-foreground mb-2"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Drop me an email
          </h3>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-foreground text-lg font-mono transition-all duration-300 hover:scale-105 group"
          >
            {bio.email}
            {copied ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy
                size={16}
                className="text-foreground-muted group-hover:text-accent transition-colors"
              />
            )}
          </button>
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm mt-2"
            >
              Copied to clipboard!
            </motion.p>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full glass glass-hover text-foreground-muted ${social.color} transition-all duration-300 hover:scale-110`}
              aria-label={social.label}
            >
              <social.icon size={22} />
            </a>
          ))}
        </motion.div>

        
      </div>
    </SectionWrapper>
  );
}
