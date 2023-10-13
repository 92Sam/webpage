
export const NavBar = () => {
    return (
        <>
              <nav id="navbar" className="navbar">
                <ul>
                <li><a className="nav-link scrollto " href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About Us</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
        </>
    )
}