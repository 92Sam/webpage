import Image from 'next/image';
import { NavBar } from "../home/navbar"

const Header = () => {
  return (<>
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-between position-relative">
        <div className="logo">
          <a href="/home">
            <Image src="/assets/img/logo.png" alt="" width={100} height={100} className="img-fluid" />
          </a>
        </div>
        <NavBar></NavBar>
      </div>
    </header>
  </>)
}

export default Header