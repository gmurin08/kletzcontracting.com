import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Appointment1 from "@/components/sections/Appointment1"
import Blog1 from "@/components/sections/Blog1"
import Brand2 from "@/components/sections/Brand2"
import Counter2 from "@/components/sections/Counter2"
import Faq1 from "@/components/sections/Faq1"
import Features2 from "@/components/sections/Features2"
import Newsletter1 from "@/components/sections/Newsletter1"
import Project2 from "@/components/sections/Project2"
import Slider1 from "@/components/sections/Slider1"
import Support1 from "@/components/sections/Support1"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home2() {

    return (
        <>
            <Layout headerCls="menu-area-two transparent-header">

                <Slider1 />
                <Features2 />
                <About2 />
                <div className="area-bg">
                    <div className="area-background-img jarallax" data-background="/assets/img/bg/area_bg01.jpg"></div>
                    <Counter2 />
                    <Appointment1 />
                </div>
                <Support1 />
                <div className="area-bg-two" data-background="/assets/img/bg/area_bg02.jpg">
                    <Project2 />
                    <Testimonial2 />
                </div>
                <Team2 />
                <Faq1 />
                <Blog1 />
                <Newsletter1 />

            </Layout>
        </>
    )
}