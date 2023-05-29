import {HomeImpl} from "@/app/services/cms/home/impl/home.service"

const AboutUs = () => {

  const {title, description, list} = HomeImpl.getInstance().getAboutUs<any>()

  return (
        <>
    <section id="about" className="about">
      <div className="container">

        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch" >
            <div className="content">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#" className="about-btn">About us <i className="bx bx-chevron-right"></i></a>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                {(list as string[]).map(v=>{
                  const [title, description] = v.split(":")
                  return (
                    <>
                      <div className="col-md-6 icon-box">
                        <i className="bx bx-shield"></i>
                        <h4>{title}</h4>
                        <p>{description}</p>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
        </>
    )
}

export default AboutUs