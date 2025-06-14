import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from '@react-email/components';
  
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
  
  export const YelpRecentLoginEmail = ({
    userFirstName,
    loginDate,
    loginDevice,
    loginLocation,
    loginIp,
  }) => {
    const formattedDate = new Intl.DateTimeFormat('en', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(loginDate);
  
    return (
      <Html>
        <Head />
        <Body style={main}>
          <Preview>New Dumpster Booking Request</Preview>
          <Container>
            <Section style={logo}>
              <Img src={`https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681b9786e17a082df127e5af.png`} alt="Yelp logo" />
            </Section>
  
            <Section style={content}>
              <Row>
                <Img
                  style={image}
                  width={620}
                  src={`${baseUrl}/static/yelp-header.png`}
                  alt="Yelp header illustration"
                />
              </Row>
  
              <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 32,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    Hi {userFirstName},
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    We noticed a recent login to your Yelp account.
                  </Heading>
  
                  <Text style={paragraph}>
                    <b>Time: </b>
                    {formattedDate}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Device: </b>
                    {loginDevice}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Location: </b>
                    {loginLocation}
                  </Text>
                  <Text
                    style={{
                      color: 'rgb(0,0,0, 0.5)',
                      fontSize: 14,
                      marginTop: -5,
                    }}
                  >
                    *Approximate geographic location based on IP address:
                    {loginIp}
                  </Text>
  
                  <Text style={paragraph}>
                    If this was you, there's nothing else you need to do.
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    If this wasn't you or if you have additional questions, please
                    see our support page.
                  </Text>
                </Column>
              </Row>
              <Row style={{ ...boxInfos, paddingTop: '0' }}>
                <Column style={buttonContainer} colSpan={2}>
                  <Button style={button}>Learn More</Button>
                </Column>
              </Row>
            </Section>
  
            <Section style={containerImageFooter}>
              <Img
                style={image}
                width={620}
                src={`${baseUrl}/static/yelp-footer.png`}
                alt="Yelp footer decoration"
              />
            </Section>
  
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: 'rgb(0,0,0, 0.7)',
              }}
            >
              © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
              U.S.A. | www.yelp.com
            </Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  YelpRecentLoginEmail.PreviewProps = {
    userFirstName: 'Alan',
    loginDate: new Date('September 7, 2022, 10:58 am'),
    loginDevice: 'Chrome on Mac OS X',
    loginLocation: 'Upland, California, United States',
    loginIp: '47.149.53.167',
  };
  
  export default YelpRecentLoginEmail;
  
  const main = {
    backgroundColor: '#fff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: '30px 20px',
  };
  
  const buttonContainer = {
    textAlign: 'center',
  };
  
  const button = {
    backgroundColor: '#e00707',
    borderRadius: 3,
    color: '#FFF',
    fontWeight: 'bold',
    border: '1px solid rgb(0,0,0, 0.1)',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '12px 30px',
    textDecoration: 'none',
  };
  
  const content = {
    border: '1px solid rgb(0,0,0, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
  };
  
  const image = {
    maxWidth: '100%',
  };
  
  const boxInfos = {
    padding: '20px',
  };
  
  const containerImageFooter = {
    padding: '45px 0 0 0',
  };
  