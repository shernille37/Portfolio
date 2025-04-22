import { skillList, projects } from "@/data/data";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import React from "react";
import ProjectSection from "@/components/Projects/ProjectSection";
import ContactSection from "@/components/Contacts/ContactSection";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="bg-primary">
        <div className="mx-auto py-8 px-4 max-w-[1200px] ">
          <ProjectSection projects={projects} />
          <ContactSection />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
