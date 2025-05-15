import Link from "next/link"
import { useState } from "react"

export default function Sidebar({closeMenu}) {
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
                <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                <li><Link href="/about" onClick={closeMenu}>About us</Link></li>
                <li className="menu-item-has-children"><Link href="/services" onClick={closeMenu}>Services</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/services/roofing" onClick={closeMenu}>Roofing</Link></li>
                        <li><Link href="/services/siding" onClick={closeMenu}>Siding</Link></li>
                        <li><Link href="/services/remodeling" onClick={closeMenu}>Home Remodeling</Link></li>
                        <li><Link href="/services/commercial-remodeling" onClick={closeMenu}>Commercial Remodeling</Link></li>
                        <li><Link href="/services/home-additions" onClick={closeMenu}>Home Additions</Link></li>
                        <li><Link href="/services/deck-construction" onClick={closeMenu}>Deck Construction</Link></li>
                        <li><Link href="/services/dumpster-service" onClick={closeMenu}>Dumpster Services</Link></li>
                        <li><Link href="/services/flooring" onClick={closeMenu}>Flooring</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(2)}><span className="fas fa-angle-down" /></div></li>
                    {/* <li><Link href='/service-areas'>Serice Areas</Link></li> */}
                <li><Link href="/financing"onClick={closeMenu}>Financing</Link></li>
                {/* <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li> */}
                <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>

        </>
    )
}
