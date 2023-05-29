import Footer from '@/app/components/common/footer'
import Header from '@/app/components/common/header'
import Script from 'next/script'

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
