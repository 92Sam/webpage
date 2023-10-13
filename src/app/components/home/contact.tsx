import {HomeImpl} from "@/app/services/cms/home/impl/home.service"
import {Contacts} from "@/app/services/cms/home/dtos";

const {address, catalog} = HomeImpl.getInstance().getContact<Contacts>()

export const Contact = () => {
    const addressDetail = address.at(0)
    const phoneNumberDetail = catalog.filter(v => v.key == "phone_number").at(0)
    const emailDetail = catalog.filter(v => v.key == "email").at(0)

    return (
        <>
            <section id="contact" className="contact section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Can found us</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="info-box mb-4">
                                <i className="bx bx-map"></i>
                                <h3>Our Address</h3>
                                <p>{addressDetail?.address} {addressDetail?.zipcode}, {addressDetail?.country_iso_code}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us</h3>
                                <p>{emailDetail?.value}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us</h3>
                                <p>{phoneNumberDetail?.value}</p>
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-lg-6 ">
                            {/* <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe> */}
                        </div>

                        <div className="col-lg-6">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        {/* <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required> */}
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        {/* <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required> */}
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    {/* <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required> */}
                                </div>
                                <div className="form-group mt-3">
                                    {/* <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea> */}
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}