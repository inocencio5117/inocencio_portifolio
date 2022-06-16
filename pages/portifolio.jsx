import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import propertyImg from "../public/assets/projects/numenera.png";

import { RiRadioButtonFill } from "react-icons/ri";

import en from "../locales/en";
import ptBR from "../locales/ptBR";

function numenera() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const { locale } = router;
  const translations = locale === "en" ? en : ptBR;

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-screen h-[30vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[60vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] rigth-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{translations.projectList.numenera.name}</h2>
          <h3>{translations.projectList.numenera.techs}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="">{translations.projectList.proj}</p>
          <h2>{translations.projectList.over}</h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            perferendis nihil culpa, dolore aliquam officiis, tempore unde rerum
            explicabo molestiae mollitia. Placeat natus eum veniam et doloribus
            minima nostrum modi?
          </p>

          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://numenera-chargen.inocencio.dev/"
              target="_blank"
              rel="noreferrer"
            >
              {translations.projectList.demo}
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://github.com/inocencio5117/numenera_character_generator"
              target="_blank"
              rel="noreferrer"
            >
              {translations.projectList.code}
            </a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">
              {translations.projectList.techs}
            </p>

            <div className="grid grid-cols-3 md:grid-cols-1">
              {translations.projectList.numenera.techsList.map((tech, i) => {
                console.log(tech);
                return (
                  <p className="text-gray-600 py-2 flex items-center" key={i}>
                    <RiRadioButtonFill className="pr-1" /> {tech}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">
            {translations.projectList.back}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default numenera;
