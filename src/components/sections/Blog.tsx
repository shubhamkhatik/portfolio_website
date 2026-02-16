"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ExternalLink, Tag, Linkedin, Twitter, ChevronDown, ChevronUp } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SocialHighlight } from "@/constants/social";
import type { DevToArticle } from "@/lib/devto";

const ARTICLES_PER_PAGE = 6;

const platformIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
};

interface BlogProps {
  articles: DevToArticle[];
}

export function Blog({ articles }: BlogProps) {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);
  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;
  const canCollapse = visibleCount > ARTICLES_PER_PAGE;

  return (
    <SectionWrapper
      id="blog"
      title="Blog & Social"
      subtitle="Technical articles and community engagement"
    >
      {/* Dev.to Articles */}
      <div className="mb-16">
        <h3
          className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          <span className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center text-accent text-xs font-bold">
            D
          </span>
          Latest from Dev.to
          {articles.length > 0 && (
            <span className="text-foreground-muted text-sm font-normal ml-auto">
              Showing {Math.min(visibleCount, articles.length)} of {articles.length}
            </span>
          )}
        </h3>

        {articles.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {visibleArticles.map((article, index) => (
                  <motion.a
                    key={article.id}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: (index % ARTICLES_PER_PAGE) * 0.08, duration: 0.5 }}
                    className="glass rounded-2xl overflow-hidden glass-hover transition-all duration-300 group flex flex-col"
                  >
                    {/* Cover Image */}
                    {(article.cover_image || article.social_image) && (
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={article.cover_image || article.social_image || ""}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </div>
                    )}

                    <div className="p-5 flex-1 flex flex-col">
                      <h4
                        className="text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {article.title}
                      </h4>
                      <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                        {article.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-foreground-muted">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {article.reading_time_minutes} min
                          </span>
                          <span>{article.readable_publish_date}</span>
                        </div>
                        <ExternalLink
                          size={14}
                          className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>

                      {/* Tags */}
                      {article.tag_list.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {article.tag_list.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="flex items-center gap-1 px-2 py-0.5 text-[10px] rounded bg-accent/5 text-foreground-muted"
                            >
                              <Tag size={8} />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>

            {/* Show More / Show Less */}
            {(hasMore || canCollapse) && (
              <div className="flex items-center justify-center gap-3 mt-8">
                {hasMore && (
                  <button
                    onClick={() => setVisibleCount((prev) => prev + ARTICLES_PER_PAGE)}
                    className="group flex items-center gap-2 px-6 py-2.5 rounded-full glass glass-hover text-foreground-muted hover:text-foreground text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    Show More
                    <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                  </button>
                )}
                {canCollapse && (
                  <button
                    onClick={() => setVisibleCount(ARTICLES_PER_PAGE)}
                    className="group flex items-center gap-2 px-6 py-2.5 rounded-full glass glass-hover text-foreground-muted hover:text-foreground text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    Show Less
                    <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="glass rounded-2xl p-8 text-center text-foreground-muted">
            Loading articles from Dev.to...
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
