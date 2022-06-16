import React from "react";
import { useRouter } from "next/router";

import en from "../locales/en";
import ptBR from "../locales/ptBR";

import SkillItem from "./SkillItem";

function Skills() {
  const router = useRouter();

  const { locale } = router;
  const translations = locale === "en" ? en : ptBR;

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {translations.skills.sectionName}
        </p>

        <h2 className="py-4">{translations.skills.what}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <SkillItem
            imagePath="/../public/assets/skills/html.png"
            skillName="HTML"
          />

          <SkillItem
            imagePath="/../public/assets/skills/css.png"
            skillName="CSS"
          />

          <SkillItem
            imagePath="/../public/assets/skills/tailwind.png"
            skillName="Tailwind"
          />

          <SkillItem
            imagePath="/../public/assets/skills/javascript.png"
            skillName="Javascript"
          />

          <SkillItem
            imagePath="/../public/assets/skills/firebase.png"
            skillName="Firebase"
          />

          <SkillItem
            imagePath="/../public/assets/skills/react.png"
            skillName="ReactJS"
          />

          <SkillItem
            imagePath="/../public/assets/skills/node.png"
            skillName="Node.js"
          />

          <SkillItem
            imagePath="/../public/assets/skills/github1.png"
            skillName="Github"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
