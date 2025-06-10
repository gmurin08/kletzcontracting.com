import Layout from "@/components/layout/Layout"
import Head from "next/head"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import AboutBanner from "@/components/sections/AboutBanner"
import BookingFormVert from "@/components/sections/BookingFormVert"
import Banner2 from "@/components/sections/Banner2"
import Blog1 from "@/components/sections/Blog1"
import Counter3 from "@/components/sections/Counter3"
import CtaContact from "@/components/sections/CtaContact"
import Services2 from "@/components/sections/Services2"
import Work1 from "@/components/sections/Work1"
import Work2 from "@/components/sections/Work2"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Home() {

    return (
        <>
            <Head>
                <title>Pittsburgh’s Trusted Remodeling & Roofing Experts</title>
                <meta name="description" content="Interior & exterior remodeling done right – kitchens, bathrooms, roofing, and more. Serving Pittsburgh homeowners." />
                <meta property="og:title" content="Pittsburgh’s Trusted Remodeling & Roofing Experts" />
                <meta property="og:description" content="Kletz Contracting provides high-quality home renovations and roofing across Pittsburgh." />
                <meta property="og:image" content="/assets/img/og/Kletz-OG-Home.jpg" />
                <meta property="og:url" content="https://kletzcontracting.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <LocalBusinessSchema />
            <FaqSchema category={"home"}/>
            <Layout headerCls="menu-area-three" headerTop>
                <Banner2 />
                <BookingFormVert />
                <AboutBanner />
                <Work1 />
                <div className="area-bg-three" data-background="/assets/img/bg/area_bg03.jpg" >
                    <Services2 />
                    <Counter3 />
                </div>
                {/* <VideoCarousel /> */}
                <Work2 />
                {/* <Project3 /> */}
                <FaqSection category={'home'}/>
                {/* <Blog1 /> */}
                <CtaContact />
            </Layout>
        </>
    )
}


export async function getStaticProps() {
    return {
      props: {}, // you can pass props here if needed
    };
  }
  