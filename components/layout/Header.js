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
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
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
                                            <Link href="/"><img src="/assets/img/logo/kletz-kogo-rs.svg" alt="Logo" /></Link>
                                        </div>
                                        <div className="logo d-none">
                                            <Link href="/"><img src="/assets/img/logo/kletz-logo-rs.svg" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about">About us</Link></li>
                                                <li><Link href={"/services"}>Services</Link></li>
                                                {/* <li className="menu-item-has-children"><Link href="/services">Services</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/services">Services Page</Link></li>
                                                        <li><Link href="/services-details">Services Details</Link></li>
                                                    </ul>
                                                </li> */}
                                                {/* <li className="menu-item-has-children"><Link href="/#">Pages</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/project">Project Page</Link></li>
                                                        <li><Link href="/project-details">Project Details</Link></li>
                                                        <li><Link href="/team">Our Team</Link></li>
                                                        <li><Link href="/team-details">Team Details</Link></li>
                                                        <li><Link href="/error">404 Error</Link></li>
                                                    </ul>
                                                </li> */}
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
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-google" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="address-field">
                                            <div>Kletz Contracting, Inc.</div>
                                            <div>1025 Steubenville Pike Suite D</div>
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
            {isPopupOpen && (
                <div className="ghl-form-popup" 
                     style={{
                         position: 'fixed',
                         top: 0,
                         left: 0,
                         width: '100%',
                         height: '100%',
                         backgroundColor: 'rgba(0, 0, 0, 0.75)',
                         zIndex: 9999,
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                         padding: '20px'
                     }}>
                    <div className="popup-content" 
                         style={{
                             backgroundColor: 'white',
                             borderRadius: '8px',
                             maxWidth: '800px',
                             width: '100%',
                             maxHeight: '90vh',
                             position: 'relative',
                             overflow: 'hidden'
                         }}>
                        <button 
                            onClick={closePopup}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                zIndex: 10000,
                                color: '#333'
                            }}>
                            ×
                        </button>
                        <div style={{
                            padding: '20px',
                            paddingTop: '40px',
                            textAlign: 'center',
                            borderBottom: '1px solid #eee'
                        }}>
                            <h3>Request a Quote</h3>
                            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>
                        <div style={{
                            height: isMobile ? '600px' : '700px',
                            overflow: 'auto'
                        }}>
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/form/54Quvx8AZl6lfePNAsrR"
                                style={{ 
                                    width: "100%", 
                                    height: "100%", 
                                    border: "none", 
                                    borderRadius: "0 0 8px 8px"
                                }}
                                id="popup-ghl-form"
                                data-layout='{"id":"INLINE"}'
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Quote Request Form"
                                data-form-id="54Quvx8AZl6lfePNAsrR"
                                title="Quote Request Form"
                            />
                        </div>
                    </div>
                </div>
            )}                             
        </>
    )
}
