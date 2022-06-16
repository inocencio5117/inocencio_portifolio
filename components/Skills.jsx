import React from "react";
import { useRouter } from "next/router";

import en from "../locales/en";
import ptBR from "../locales/ptBR";

import SkillItem from "./SkillItem";

import htmlImg from "../public/assets/skills/html.png";
import cssImg from "../public/assets/skills/css.png";
import tailwindImg from "../public/assets/skills/tailwind.png";
import javascriptImg from "../public/assets/skills/javascript.png";
import firebaseImg from "../public/assets/skills/firebase.png";
import reactImg from "../public/assets/skills/react.png";
import nodeImg from "../public/assets/skills/node.png";
import githubImg from "../public/assets/skills/github1.png";

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
          <SkillItem imagePath={htmlImg} skillName="HTML" />

          <SkillItem imagePath={cssImg} skillName="CSS" />

          <SkillItem imagePath={tailwindImg} skillName="Tailwind" />

          <SkillItem imagePath={javascriptImg} skillName="Javascript" />

          <SkillItem imagePath={firebaseImg} skillName="Firebase" />

          <SkillItem imagePath={reactImg} skillName="ReactJS" />

          <SkillItem imagePath={nodeImg} skillName="Node.js" />

          <SkillItem imagePath={githubImg} skillName="Github" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
