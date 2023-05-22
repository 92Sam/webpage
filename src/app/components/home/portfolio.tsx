import Image from "next/image"



const Portfolio = () => {
    return (
        <>
    <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image src="/assets/Image/portfolio/portfolio-1.jpg" className="Image-fluid" height={10} width={10} alt=""/>
              <div className="portfolio-links">
                <a href="assets/Image/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image src="/assets/Image/portfolio/portfolio-2.jpg" className="Image-fluid" height={10} width={10} alt=""/>
              <div className="portfolio-links">
                <a href="assets/Image/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image src="/assets/Image/portfolio/portfolio-3.jpg" className="Image-fluid" height={10} width={10} alt=""/>
              <div className="portfolio-links">
                <a href="assets/Image/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <Image src="/assets/Image/portfolio/portfolio-4.jpg" className="Image-fluid" height={10} width={10} alt=""/>
              <div className="portfolio-links">
                <a href="assets/Image/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image src="/assets/Image/portfolio/portfolio-5.jpg" className="Image-fluid" height={10} width={10} alt=""/>
              <div className="portfolio-links">
                <a href="assets/Image/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image src="/assets/Image/portfolio/portfolio-6.jpg" className="Image-fluid" height={10} width={10} alt=""/>
              <div className="portfolio-links">
                <a href="assets/Image/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <Image src="/assets/Image/portfolio/portfolio-7.jpg" className="Image-fluid" height={10} width={10} alt=""/>
              <div className="portfolio-links">
                <a href="assets/Image/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <Image src="/assets/Image/portfolio/portfolio-8.jpg" className="Image-fluid" height={10} width={10} alt=""/>
              <div className="portfolio-links">
                <a href="assets/Image/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image src="/assets/Image/portfolio/portfolio-9.jpg" className="Image-fluid" height={10} width={10} alt=""/>
              <div className="portfolio-links">
                <a href="assets/Image/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        </>
    )
}

export default Portfolio