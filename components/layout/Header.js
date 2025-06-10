import Link from "next/link"
import { useEffect, useState } from 'react'
import Sidebar from "./Sidebar"

export default function Header({ headerCls, headerTop }) {
    const [scroll, setScroll] = useState(0)
    const [isToggled, setToggled] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    
    // Check if we're on mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        // Set initial value
        handleResize()
        
        // Add event listener
        window.addEventListener('resize', handleResize)
        
        // Cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleToggled = () => {
        setToggled(!isToggled)
        !isToggled ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    const openPopup = (e) => {
        e.preventDefault()
        setPopupOpen(true)
        document.body.style.overflow = 'hidden' // Prevent scrolling while popup is open
    }

    const closePopup = () => {
        setPopupOpen(false)
        document.body.style.overflow = 'auto' // Re-enable scrolling
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    
    return (
        <>

            {headerTop &&
                <div className="header-top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-9">
                                <div className="header-top-left">
                                    <ul className="list-wrap">
                                        <li>Welcome to Kletz Contracting</li>
                                        <li><i className="fas fa-phone-alt" /><Link href="tel:4122002475">(412) 200-2475</Link></li>
                                        <li><i className="fas fa-envelope" /><Link href="mailto:john@kletzcontracting.com">john@kletzcontracting.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3">
                                <div className="header-top-right">
                                    {/* <div className="header-lang">
                                        <div className="dropdown">
                                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src="assets/img/icon/united-states.jpg" alt="" /> English
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <Link className="dropdown-item" href="/"><img src="assets/img/icon/russia.jpg" alt="" />Russia</Link>
                                                <Link className="dropdown-item" href="/"><img src="assets/img/icon/india.jpg" alt="" />India</Link>
                                                <Link className="dropdown-item" href="/"><img src="assets/img/icon/bangladesh.jpg" alt="" />Bangla</Link>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="header-social">
                                        <ul className="list-wrap">
                                            <li><Link href="https://facebook.com/kletzcontracting"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/john-kletz-jr-1685411a/"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="https://g.co/kgs/qHs3XHn"><i className="fab fa-google" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <header>
                <div id="sticky-header" className={`menu-area  ${scroll ? "sticky-menu" : ""} ${headerCls ? headerCls : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleToggled}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo different-logo">
                                            <Link href="/"><img src="/assets/img/logo/kletz-logo-rs.svg" alt="Logo" /></Link>
                                        </div>
                                        <div className="logo d-none">
                                            <Link href="/"><img src="/assets/img/logo/kletz-logo-rs.svg" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about">About us</Link></li>
                                                <li className="menu-item-has-children"><Link href="/services">Services</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/services/roofing">Roofing</Link></li>
                                                        <li><Link href="/services/siding">Siding</Link></li>
                                                        {/* <li className="menu-item-has-children"><Link href="/services">Remodeling</Link>
                                                            <ul className="sub-menu">
                                                            <li><Link href="/siding">Home Remodeling</Link></li>
                                                            <li><Link href="/siding">Commercial Remodeling</Link></li>
                                                            </ul>
                                                        </li> */}
                                                        <li><Link href="/services/remodeling">Home Remodeling</Link></li>
                                                        <li><Link href="/services/commercial-remodeling">Commercial Remodeling</Link></li>
                                                        <li><Link href="/services/home-additions">Home Additions</Link></li>
                                                        <li><Link href="/services/deck-construction">Deck Construction</Link></li>
                                                        <li><Link href="/services/dumpster-service">Dumpster Services</Link></li>
                                                        <li><Link href="/services/flooring">Flooring</Link></li>
                                                    </ul>
                                                </li>
                                                {/* <li className="menu-item-has-children"><Link href="/#">Pages</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/project">Project Page</Link></li>
                                                        <li><Link href="/project-details">Project Details</Link></li>
                                                        <li><Link href="/team">Our Team</Link></li>
                                                        <li><Link href="/team-details">Team Details</Link></li>
                                                        <li><Link href="/error">404 Error</Link></li>
                                                    </ul>
                                                </li> */}
                                                <li><Link href='/recent-projects'>Projects</Link></li>
                                                <li><Link href='/service-areas'>Service Areas</Link></li>
                                                <li><Link href='/financing'>Financing</Link></li>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="header-btn">
                                                <a onClick={openPopup} className="btn">Get a Quote</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleToggled}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/kletz-logo-rs.svg" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <Sidebar closeMenu={handleToggled} />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="https://facebook.com/kletzcontracting"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="https://www.linkedin.com/in/john-kletz-jr-1685411a/"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="https://g.co/kgs/qHs3XHn"><i className="fab fa-google" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="address-field">
                                            <div>Kletz Contracting, Inc.</div>
                                            <div>1468 Old Steubenville Pike suite d</div>
                                            <div>Pittsburgh, PA 15205</div>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
                            
        </>
    )
}