import React from "react";
import { useRouter } from "next/router";

import ProjectItem from "./ProjectItem";
import numeneraImg from "../public/assets/projects/numenera.png";
import cryptoImg from "../public/assets/projects/crypto.jpg";

import en from "../locales/en";
import ptBR from "../locales/ptBR";

function Projects() {
  const router = useRouter();

  const { locale } = router;
  const translations = locale === "en" ? en : ptBR;

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {translations.projects.sectionName}
        </p>

        <h2 className="py-4">{translations.projects.what}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Numenera Charachter Generator"
            backgroundImg={numeneraImg}
            projectUrl="/numenera"
          />

          <ProjectItem
            title="Portifolio"
            backgroundImg={cryptoImg}
            projectUrl="/portifolio"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
