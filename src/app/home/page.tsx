'use client'

import Index from "@/app/components/home";
import AboutUs from "@/app/components/home/about-us";
import Portfolio from "@/app/components/home/portfolio";
import Services from "@/app/components/home/services";
import Counts from "@/app/components/home/counts";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
    AOS.init({ disable: 'phone' });
  }, []);

  return (
    <>
        <Index></Index>
        <main id="main">
          <AboutUs></AboutUs>
          <Services></Services>
          <Counts/>
          <Portfolio></Portfolio>
        </main>
       
    </>
  )
}
