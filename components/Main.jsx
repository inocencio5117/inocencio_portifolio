import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

import en from "../locales/en";
import ptBR from "../locales/ptBR";

export default function Main() {
  const router = useRouter();

  const { locale } = router;
  const translations = locale === "en" ? en : ptBR;

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w=full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="mt-5 uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            {translations.main.introParagraph}
          </p>

          <h1 className="py-4 text=gray-700">
            {`${translations.main.hello} `}
            <span className="text-[#5651e5]">{translations.main.name}</span>
          </h1>

          <h1 className="py-2 text=gray-700">{translations.main.position}</h1>

          <p className="py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto">
            {translations.main.introText}
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/vinicius-inocencio/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://github.com/inocencio5117"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>

            <Link href="/#about">
              <a>
                <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
