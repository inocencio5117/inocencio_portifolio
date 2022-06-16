import React, { useState } from "react";
import { useRouter } from "next/router";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

import en from "../locales/en";
import ptBR from "../locales/ptBR";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const { locale } = router;
  const translations = locale === "en" ? en : ptBR;

  const handleSubmit = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {translations.contact.sectionName}
        </p>

        <h2 className="py-4">{translations.contact.get}</h2>

        <div className="grid lg:grid-cols-5 gap-8 ">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="/"
                />
              </div>

              <div>
                <h2 className="py-2">{translations.contact.name}</h2>
                <p>{translations.contact.position}</p>
                <p className="py-4">{translations.contact.available}</p>
              </div>

              <div>
                <p className="uppercase pt-8">{translations.contact.connect}</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/vinicius-inocencio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://github.com/inocencio5117"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>

                  <Link href="/#about">
                    <a>
                      <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit} action="/" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-4">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      {translations.contact.form.name}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      {translations.contact.form.phone}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="tel"
                      pattern="[0-9]{2}-[0-9]{1}-[0-9]{4}-[0-9]{4}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {translations.contact.form.email}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {translations.contact.form.subject}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {translations.contact.form.message}
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button className="w-full p-4 text-gray-100 mt-4">
                  {translations.contact.form.button}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-[#5651e5] dark:text-white"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
