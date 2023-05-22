import Index from "@/app/components/home";
import AboutUs from "@/app/components/home/about-us";
import Portfolio from "@/app/components/home/portfolio";
import Services from "@/app/components/home/services";


export default function Home() {
  return (
    <>
        <Index></Index>

        <main id="main">
          AboutUs
          <AboutUs></AboutUs>
          SERVICE
          <Services></Services>
          PORTOFOLIO
          <Portfolio></Portfolio>
        </main>
       
    </>
  )
}
