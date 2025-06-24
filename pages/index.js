import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
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
            <PageHead 
                headTitle="Kletz Contracting - Roofing, Siding & Dumpster Rental | Robinson Township PA"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Robinson Township, PA. Family-owned contractor serving Pittsburgh and surrounding counties since 1985. Free estimates, licensed & insured."
                canonicalUrl="https://kletzcontracting.com"
                keywords="roofing contractor Robinson Township PA, siding installation Pittsburgh, dumpster rental Robinson Township, roof repair Allegheny County, vinyl siding Pittsburgh PA, roll off dumpster rental, home improvement contractor Pittsburgh"
            />
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
  