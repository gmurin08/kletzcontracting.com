import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" id="top">
            <Head>
                {/* Basic SEO */}
                {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                <meta name="theme-color" content="#ffffff" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://kletzcontracting.com" />

                {/* Open Graph Defaults */}
                <meta property="og:site_name" content="Kletz Contracting" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://kletzcontracting.com/assets/img/og/Kletz-OG-Home.jpg" />

                {/* Favicon */}
                <link rel="icon" type="image/png" href="/assets/img/icon/favicon.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="apple-touch-icon" href="assets/img/iconapple-touch-icon.png" />

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i|poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
