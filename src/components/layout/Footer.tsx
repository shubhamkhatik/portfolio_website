import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { bio } from "@/constants/resume-data";

const socialLinks = [
  { icon: Github, href: bio.github, label: "GitHub" },
  { icon: Linkedin, href: bio.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: bio.x, label: "X / Twitter" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-blue flex items-center justify-center font-bold text-white text-xs">
                SK
              </div>
              <span className="text-foreground font-semibold">
                Shubham Khatik
              </span>
            </a>
            <p className="text-foreground-muted text-sm flex items-center gap-1">
              Built with <Heart size={12} className="text-red-400" /> using
              Next.js & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass glass-hover text-foreground-muted hover:text-accent transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} Shubham Khatik
          </p>
        </div>
      </div>
    </footer>
  );
}
