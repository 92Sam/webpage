import { HomeImpl } from "@/app/services/cms/home/impl/home.service"

const Services = () => {
  const { title, description, list } = HomeImpl.getInstance().getServices<any>()

  return (
    <>
      <section id="services" className="services">
        <div className="container">

          <div className="section-title" data-aos-delay="100">
            <h2>Services</h2>
            <p>{description}</p>
          </div>


          <div className="row">
            {(list as string[]).map(v => {
              const [title, message] = v.split(":")
              return (
                <>
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box">
                      <div className="icon"><i className="bx bx-world"></i></div>
                      <h4 className="title"><a href="">{title}</a></h4>
                      <p className="description">{message}</p>
                    </div>
                  </div>
                </>
              )
            })}

          </div>

        </div>
      </section>

    </>
  )
}

export default Services
