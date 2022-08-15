import { useRef, useState, useEffect } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { NavbarTop, NavItem } from "./components/import"
import logo from "../../img/logo.png"
import { navItems } from "./util";
import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [toggle, setToggle] = useState(false)
  const navbar = useRef()

  const handleScroll = () => {
    const offset = window.scrollY

    if (offset > 200) setSticky(true)
    else setSticky(false)
  }

  useEffect(() => { window.addEventListener("scroll", handleScroll) })

  return (
    <div className="navbar">
      <div className="navbar__top">
        <NavbarTop />
      </div>

      <div
        className={ sticky ? "navbar__bottom sticky" : "navbar__bottom container" }
        ref={navbar}
      >
        <div className="navbar__bottom_navItems">
          <NavItem title={navItems.home.title} link={navItems.home.link} />
          <NavItem title={navItems.about.title} link={navItems.about.link} />
          <NavItem title={navItems.services.title} link={navItems.services.link} />
          <NavItem title={navItems.blogs.title} link={navItems.blogs.link} />
          <NavItem title={navItems.pages.title} items={navItems.pages.items} />
          <NavItem title={navItems.faq.title} link={navItems.faq.link} />
          <NavItem title={navItems.contact.title} link={navItems.contact.link} />
        </div>

        <div className="nabar__bottom_formControl">
          <Link to="/contact" className="button"> Get Started </Link>
        </div>

        <div className="navbar__small">
          <div className="navbar__logo">
            <img src={logo} alt="" />
          </div>

          <div
            className="navbar__toggle"
            onClick={() => setToggle((prev) => !prev)}
          >
            { toggle? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} /> }
          </div>
        </div>

        <div className={ toggle? "navbar__small_dropdown_show" : "navbar__small_dropdown_hide"} >
          <NavItem title={navItems.home.title} link={navItems.home.link} />
          <NavItem title={navItems.about.title} link={navItems.about.link} />
          <NavItem title={navItems.services.title} link={navItems.services.link} />
          <NavItem title={navItems.pages.title} items={navItems.pages.items} />
          <NavItem title={navItems.contact.title} link={navItems.contact.link} />
        </div>
      </div>
    </div>
  )
}

export default Navbar