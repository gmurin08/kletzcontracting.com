import Layout from "@/components/layout/Layout"

export default function Approval() {

    return (
        <>
            <Layout breadcrumbTitle={"Booking Request Sent"}>
            <div style={{margin:'50px 20px 50px 20px', display:'flex', flexDirection:'column',justifyContent:"center"}}>
                <div>Your Booking Approval Has Been Sent Successfully!</div>
                <br /><br />
                <div><b>Next Steps:</b></div>
                <ul>
                    <li>Customer Will Receive Contract and Invoice Via Email</li>
                    <li>When Customer Completes Both Contract and Invoice You Will Receive Confirmation</li>
                    <li>Customers Payment Metod Will Be Saved In Stripe For Overcharges</li>
                </ul>
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
  