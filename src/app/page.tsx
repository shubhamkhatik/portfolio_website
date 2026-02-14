import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { getDevToArticles } from "@/lib/devto";

export default async function Home() {
  const articles = await getDevToArticles();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CaseStudies />
      <Projects />
      <Blog articles={articles} />
      <Contact />
    </>
  );
}
