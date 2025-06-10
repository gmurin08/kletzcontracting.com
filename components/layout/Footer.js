import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg" data-background="/assets/img/bg/footer_bg.jpg">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">About Us</h2>
                                        <div className="footer-content">
                                            <p>Kletz Contracting is a trusted name in Pittsburgh for high-quality roofing and exterior solutions. From small repairs to full-scale roof replacements, our team delivers precision, durability, and craftsmanship on every project.</p>
                                        <div className="footer-newsletter">
                                                <h4 className="title">Subscribe to Our Newsletter</h4>
                                                <form action="#">
                                                    <input type="text" placeholder="Enter your email" />
                                                    <button type="submit" className="btn btn-two">Subscribe</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Our Services</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/services/roofing"><i className="fas fa-angle-double-right" />Roofing</Link></li>
                                                <li><Link href="/services/siding"><i className="fas fa-angle-double-right" />Siding</Link></li>
                                                <li><Link href="/services/remodeling"><i className="fas fa-angle-double-right" />Remodeling</Link></li>
                                                <li><Link href="/services/commercial-remodeling"><i className="fas fa-angle-double-right" />Commercial Build Outs</Link></li>
                                                <li><Link href="/services/deck-construction"><i className="fas fa-angle-double-right" />Deck Construction</Link></li>
                                                <li><Link href="/services/flooring"><i className="fas fa-angle-double-right" />Flooring</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Quick Links</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/about"><i className="fas fa-angle-double-right" />About Us</Link></li>
                                                <li><Link href="/services"><i className="fas fa-angle-double-right" />Our Services</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Contact Us</Link></li>
                                                <li><Link href="/services/dumpster-service"><i className="fas fa-angle-double-right" />Book A Dumpster</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Get a Quote</Link></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Instagram Posts</h2>
                                        <div className="footer-instagram">
                                            <ul className="list-wrap">
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img01.jpg" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img02.jpg" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img03.jpg" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img04.jpg" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img05.jpg" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img06.jpg" alt="" /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="footer-logo-area">
                                <div className="row align-items-center">
                                    <div className="col-xl-3 col-lg-3 col-md-12">
                                        <div className="logo">
                                            <Link href="/index"><img src="/assets/img/logo/kletz-logo-rs.svg" alt="" style={{width:'300px'}}/></Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="footer-contact">
                                            <div className="icon">
                                                <Link href="tel:4122002475">
                                                    <i className="fas fa-phone-alt" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <Link href="tel:4122002475">(412) 200-2475</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6">
                                        <div className="footer-social">
                                            <h2 className="title">Follow Us:</h2>
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
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="copyright-text">
                                        <p>© Copyright {new Date().getFullYear()}. All Right Reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="copyright-text">
                                        <a href="https://www.aldercreekdigital.com ">Designed By Alder Creek Digital</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-bootom-menu">
                                        <ul className="list-wrap">
                                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
