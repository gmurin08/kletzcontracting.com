import Preloader from "@/components/elements/Preloader"
import { useState, useEffect } from "react"
import Head from "next/head"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/animate.min.css"
import "../public/assets/css/magnific-popup.css"
import "../public/assets/css/fontawesome-all.min.css"
import "../public/assets/css/odometer.css"
import "../public/assets/css/tg-cursor.css"
import "../public/assets/css/default.css"
import "../public/assets/css/jarallax.css"
import "../public/assets/css/style.css"
import "../public/assets/css/responsive.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
