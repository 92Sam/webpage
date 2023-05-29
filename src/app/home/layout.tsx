import Script from 'next/script'

import Footer from '@/app/components/common/footer'
import Header from '@/app/components/common/header'

// <!-- Vendor CSS Files -->
import "@/app/assets/vendor/aos/aos.css"
import "@/app/assets/vendor/bootstrap/css/bootstrap.min.css"
import "@/app/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "@/app/assets/vendor/boxicons/css/boxicons.min.css"
import "@/app/assets/vendor/glightbox/css/glightbox.min.css"
import "@/app/assets/vendor/swiper/swiper-bundle.min.css"
// <!-- Template Main CSS File -->
import "@/app/assets/css/style.css"

export const metadata = {
  title: 'Treyee Company',
  deScription: 'Software Company',
}

export default function LayoutHome({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header></Header>
        {children}
      <Footer></Footer>
      <Script src="assets/vendor/purecounter/purecounter_vanilla.js" strategy="lazyOnload"/>
      <Script src="assets/vendor/aos/aos.js" strategy="lazyOnload"/>
      <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="lazyOnload"/>
      <Script src="assets/vendor/glightbox/js/glightbox.min.js" strategy="lazyOnload"/>
      <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="lazyOnload"/>
      <Script src="assets/vendor/swiper/swiper-bundle.min.js" strategy="lazyOnload"/>
      <Script src="assets/js/main.js" strategy="lazyOnload"/>
    </>
  )
}
