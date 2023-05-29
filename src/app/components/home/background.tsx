import {HomeImpl} from "@/app/services/cms/home/impl/home.service"

const Background = () => {

    const {title, paper} = HomeImpl.getInstance().getBackground<any>()
    
    return (
        <>
          <section id="hero">
            <div className="hero-container">
            <h1>{title}</h1>
            <h2>{paper}</h2>
            <a href="#about" className="btn-get-started scrollto"><i className="bx bx-chevrons-down"></i></a>
            </div>
            </section>
        </>
    )
}

export default Background