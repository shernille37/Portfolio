import { skillList } from "@/data/data";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
    </main>
  );
};

export default HomePage;
