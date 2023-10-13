"use client";

import Background from "@/app/components/home/background";
import AboutUs from "@/app/components/home/about-us";
import Portfolio from "@/app/components/home/portfolio";
import Services from "@/app/components/home/services";
import { Contact } from "../components/home/contact";
import { useEffect } from "react";
import { AOS } from "../assets/vendor/aos/aos";

// <!-- Vendor CSS Files -->
import "@/app/assets/vendor/bootstrap/css/bootstrap.min.css"
import "@/app/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "@/app/assets/vendor/boxicons/css/boxicons.min.css"
import "@/app/assets/vendor/glightbox/css/glightbox.min.css"
import "@/app/assets/vendor/swiper/swiper-bundle.min.css"
// <!-- Template Main CSS File -->
import "@/app/assets/css/style.css"

export default function Home() {

  useEffect(() => {
    // AOS.init({ disable: 'phone' });
  }, []);

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
