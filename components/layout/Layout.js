import { useEffect } from "react";

import PageHead from './PageHead';
import DataBg from '../elements/DataBg';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import BackToTop from '../elements/BackToTop';

export default function Layout({ headerCls, headerTop, headTitle, breadcrumbTitle, children }) {
    useEffect(() => {
        const initWOW = async () => {
            if (typeof window !== 'undefined') {
                const mod = await import('wowjs');
                const WOWConstructor = mod.WOW || (mod.default && mod.default.WOW);
                
                if (typeof WOWConstructor === 'function') {
                    new WOWConstructor({ live: false }).init();
                } else {
                    console.error("Failed to initialize WOW: Constructor not found");
                }
            }
        };

        //initWOW();
    }, []);

    return (
        <>
            <PageHead headTitle={headTitle} />
            <DataBg />
            <Header headerCls={headerCls} headerTop={headerTop} />
            <main>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}
