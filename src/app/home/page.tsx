import Background from "@/app/components/home/background";
import AboutUs from "@/app/components/home/about-us";
import Portfolio from "@/app/components/home/portfolio";
import Services from "@/app/components/home/services";
import { Contact } from "../components/home/contact";


export default function Home() {
  return (
    <>
        <Background></Background>

        <main id="main">
          <AboutUs></AboutUs>
          <Services></Services>
          <Portfolio></Portfolio>
          <Contact></Contact>
        </main>
       
    </>
  )
}
