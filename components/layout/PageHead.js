import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Kletz Contracting - Pittsburgh Premiere Roofing Contractor"}
                </title>
            </Head>
        </>
    )
}

export default PageHead