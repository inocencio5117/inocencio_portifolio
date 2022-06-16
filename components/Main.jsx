import React from "react";
import Link from "next/link";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w=full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            LET`S BUILD SOMETHING TOGHETER
          </p>

          <h1 className="py-4 text=gray-700">
            Hi, I`m <span className="text-[#5651e5]">Vinicius</span>
          </h1>

          <h1 className="py-2 text=gray-700">A FullStack Web Developer</h1>

          <p className="py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto">
            I`m a front-end web develooper Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste, in earum vitae quis commodi
            tempore? Doloribus fugit iste incidunt necessitatibus provident vel
            nisi officia architecto ipsa, accusantium aut consequuntur
            repellendus.
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
