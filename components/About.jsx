import React from "react";

import { useRouter } from "next/router";

import en from "../locales/en";
import ptBR from "../locales/ptBR";

function About() {
  const router = useRouter();

  const { locale } = router;
  const translations = locale === "en" ? en : ptBR;

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            {translations.about.sectionName}
          </p>
          <h2 className="py-4">{translations.about.him}</h2>

          <p className="py-2 text-gray-600 dark:text-gray-400">
            {translations.about.text1}
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            {translations.about.text2}
          </p>

          <p className="py-2 text-gray-600 dark:text-gray-400">
            {translations.about.text3}
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            {translations.about.text4}
          </p>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rouded-xl flex items-center justify-center p-4 hover:scale-105 duration-300">
          <img
            className="rounded-xl"
            src="https://intl-blog.imgix.net/wp-content/uploads/2021/08/Tech-stack-BR-Capterra-Header.png?w=768"
            alt="some computer image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
