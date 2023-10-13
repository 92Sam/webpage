import {HomeImpl} from "@/app/services/cms/home/impl/home.service"
import { CompanyDetails, Contacts} from "@/app/services/cms/home/dtos";

const {name,description} = HomeImpl.getInstance().getCompanyDetails<CompanyDetails>()
const {address, catalog, social_media} = HomeImpl.getInstance().getContact<Contacts>()

const FooterData = () => {
  const addressDetail = address.at(0)
  const phoneNumberDetail = catalog.filter(v => v.key == "phone_number").at(0)
  const emailDetail = catalog.filter(v => v.key == "email").at(0)
  return (
    <>
        <p>
            {addressDetail?.address}<br></br>
            {addressDetail?.zipcode}, {addressDetail?.country_iso_code}<br></br>
            <strong>Phone:</strong> {phoneNumberDetail?.value}<br></br>
            <strong>Email:</strong> {emailDetail?.value}<br></br>
        </p>
    </>
  )
}


const Footer = () => {
  return (<>
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6">
              <h3>{name}</h3>
              <p className="pb-3"><em>{description}</em></p>
              <FooterData/>
              <div className="social-links mt-3">
                {social_media.map(v =>{
                  const className = `bx bxl-${v.type}`
                  return (
                    <>
                      <a href={v.link} className={v.type}><i className={className}></i></a>
                    </>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>We are Treyee</p>
            <>
              {/* <form action="" method="post">
                <input type="email" name="email"><input type="submit" value="Subscribe">
              </form> */}
            </>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>{name} {new Date().getFullYear()}</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="">{name}</a>
        </div>
      </div>
    </footer>
  </>)

}

export default Footer