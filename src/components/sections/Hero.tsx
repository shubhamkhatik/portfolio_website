"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { bio } from "@/constants/resume-data";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = bio.roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % bio.roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-[100px] animate-glow-pulse [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-secondary/3 blur-[140px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16"
      >
        {/* Left — Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Name */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <span className="text-foreground-muted text-2xl sm:text-3xl md:text-4xl font-normal block mb-3">
              Hi, I&apos;m
            </span>
            <span className="gradient-text">{bio.name}</span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div
            variants={item}
            className="text-xl sm:text-2xl md:text-3xl text-foreground-muted mb-8 h-10"
          >
            <span>{displayText}</span>
            <span className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle animate-[typing-cursor_0.8s_ease-in-out_infinite]" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-foreground-muted text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
          >
            {bio.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-blue text-white font-medium hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ExternalLink
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href={bio.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full glass glass-hover text-foreground font-medium transition-all duration-300 hover:scale-105"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right — Profile Image */}
        <motion.div
          variants={item}
          className="relative shrink-0"
        >
          {/* Glow behind the image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent-blue/20 blur-[60px] scale-110" />

          {/* Glassmorphic frame */}
          <div className="relative animate-float">
            {/* Gradient ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent via-accent-secondary to-accent-blue opacity-60" />

            {/* Image container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-background">
              <Image
                src="/images/shubhamprofessional.png"
                alt="Shubham Khatik — Full Stack Developer"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>

          {/* Available Badge */}
          <motion.div variants={item} className="mt-5 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-foreground-muted">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
