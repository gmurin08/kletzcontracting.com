import Preloader from "@/components/elements/Preloader"
import { useState, useEffect } from "react"
import Script from "next/script"
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

      {/* Google Tag Manager (head script) */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KP4WTNWH');`,
        }}
      />
      
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
