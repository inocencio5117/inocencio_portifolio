import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";

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
    </div>
  );
}
