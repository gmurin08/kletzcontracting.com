import Layout from "@/components/layout/Layout"

import About1 from "@/components/sections/About1"
import Appointment2 from "@/components/sections/Appointment2"
import Banner2 from "@/components/sections/Banner2"
import Blog1 from "@/components/sections/Blog1"
import Counter3 from "@/components/sections/Counter3"
import Engineer1 from "@/components/sections/Engineer1"
import Faq1 from "@/components/sections/Faq1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Project3 from "@/components/sections/Project3"
import Services2 from "@/components/sections/Services2"
import Work1 from "@/components/sections/Work1"
import Work2 from "@/components/sections/Work2"

export default function Home3() {

    return (
        <>
            <Layout headerCls="menu-area-three" headerTop>
                <Banner2 />
                <Appointment2 />
                <About1 />
                <Work1 />
                <div className="area-bg-three" data-background="/assets/img/bg/area_bg03.jpg" >
                    <Services2 />
                    <Counter3 />
                </div>
                <Engineer1 />
                <Work2 />
                <Project3 />
                <Faq1 />
                <Blog1 />
                <Newsletter1 />
            </Layout>
        </>
    )
}