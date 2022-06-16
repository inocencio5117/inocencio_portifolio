import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  BsFillMoonFill,
  BsFillSunFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";

import en from "../locales/en";
import ptBR from "../locales/ptBR";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  const { locale } = router;
  const translations = locale === "en" ? en : ptBR;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <span
          className="bg-gray-700 text-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <BsFillSunFill />
        </span>
      );
    } else {
      return (
        <span
          className="bg-gray-300 text-black hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonFill />
        </span>
      );
    }
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] dark:bg-[#111827]"
          : "fixed w-full h-20 z-[100] bg-[#ecf0f3] dark:bg-[#111827]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2-xl:px-16">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/../public/assets/navLogo.png"
            alt="/"
            width="125"
            height="50"
          />
        </Link>

        <div className="ml-10 flex">
          {renderThemeChanger()}

          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="ml-5 dark:text-white text-shadow-sm text-md bg-transparent tracking-wide cursor-pointer"
          >
            <option className="text-black" value="pt-BR">
              pt-BR
            </option>
            <option className="text-black" value="en">
              EN
            </option>
          </select>
        </div>

        <div>
          <ul className="hidden md:flex items-center">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {translations.navbar.home}
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {translations.navbar.about}
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {translations.navbar.skills}
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {translations.navbar.projects}
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {translations.navbar.contact}
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen dark:bg-gray-900 bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/navLogo.png"
                  alt="/"
                  width="87"
                  height="35"
                />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md=w-[90%] py-4">
                {translations.navbar.mobile.introParagraph}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {translations.navbar.home}
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {translations.navbar.about}
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {translations.navbar.skills}
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {translations.navbar.projects}
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {translations.navbar.contact}
                </li>
              </Link>
            </ul>

            <div className="pt-4">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {translations.navbar.mobile.connect}
              </p>

              <div>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/vinicius-inocencio/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>

                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      href="https://github.com/inocencio5117"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>

                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>

                  <Link href="/#about">
                    <a>
                      <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
