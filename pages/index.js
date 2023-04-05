import Head from "next/head";
import Hero from "@/components/Navigation/Hero";
import Instagram from "@/components/Istagram/Instagram";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return(
    <>
    <Head>
      <title>
        keep sprintt
      </title>

      <meta name="description"
      content="created as template for future word"/>
    </Head>
    <Hero heading="Let's go jogging" message="Find your road"/>
    <Instagram/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}