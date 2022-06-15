import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vinicius Inocêncio`s Portifolio</title>
        <meta name="description" content="Vinicius Inocêncio`s Portifolio" />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  );
}
