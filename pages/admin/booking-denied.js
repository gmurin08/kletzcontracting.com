import Layout from "@/components/layout/Layout"

export default function Approval() {

    return (
        <>
            <Layout breadcrumbTitle={"Booking Request Cancelled"}>
            <div style={{margin:'50px 20px 50px 20px', display:'flex', flexDirection:'column',justifyContent:"center"}}>
                <div><b>Your Customer's Booking Request Has Been Cancelled.</b></div>
                <br />
                <div>We've sent and email noifying the customer that the requested date 
                is not available. Along with your contact info to follow up. No furter action
                is required at this point.</div>
                
            </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
      props: {}, // you can pass props here if needed
    };
  }
  