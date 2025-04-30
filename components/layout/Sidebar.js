import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation">
                <li className="menu-item-has-children"><Link href="#">Home</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="/index-2">Home Two</Link></li>
                        <li><Link href="/index-3">Home Three</Link></li>
                        <li><Link href="/index-4">Home Four</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(1)}><span className="fas fa-angle-down" /></div></li>
                <li><Link href="/about">About us</Link></li>
                <li className="menu-item-has-children"><Link href="#">Services</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/services">Services Page</Link></li>
                        <li><Link href="/services-details">Services Details</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(2)}><span className="fas fa-angle-down" /></div></li>
                <li className="active menu-item-has-children"><Link href="#">Pages</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link href="/project">Project Page</Link></li>
                        <li><Link href="/project-details">Project Details</Link></li>
                        <li><Link href="/team">Our Team</Link></li>
                        <li><Link href="/team-details">Team Details</Link></li>
                        <li><Link href="/error">404 Error</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(3)}><span className="fas fa-angle-down" /></div></li>
                <li className="menu-item-has-children"><Link href="#">Blog</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link href="/blog">Our Blog</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(4)}><span className="fas fa-angle-down" /></div></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </>
    )
}
