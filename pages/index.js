import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vinicius Inocêncio`s Portifolio</title>
        <meta name="description" content="Vinicius Inocêncio`s Portifolio" />
      </Head>

      <Navbar />
      <Main />
    </div>
  );
}
