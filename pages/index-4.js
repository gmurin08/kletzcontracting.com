import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Appointment3 from "@/components/sections/Appointment3"
import Banner3 from "@/components/sections/Banner3"
import Blog1 from "@/components/sections/Blog1"
import Counter4 from "@/components/sections/Counter4"
import Features3 from "@/components/sections/Features3"
import Newsletter1 from "@/components/sections/Newsletter1"
import Project4 from "@/components/sections/Project4"
import Services3 from "@/components/sections/Services3"
import Support1 from "@/components/sections/Support1"
import Team3 from "@/components/sections/Team3"
import Testimonial3 from "@/components/sections/Testimonial3"
export default function Home4() {

    return (
        <>
            <Layout headerCls={"menu-area-four transparent-header"}>

                <Banner3 />
                <Features3 />
                <About2 />
                <Services3 />
                <div className="area-bg-four" data-background="/assets/img/bg/area_bg04.jpg">
                    <Project4 />
                    <Team3 />
                </div>
                <div className="area-bg">
                    <div className="area-background-img jarallax" data-background="/assets/img/bg/area_bg01.jpg"/>
                        <Counter4 />
                        <Appointment3 />
                </div>
                <Support1 />
                <Testimonial3 />
                <Blog1 />
                <Newsletter1 />

            </Layout>
        </>
    )
}