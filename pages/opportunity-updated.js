// pages/opportunity-updated.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function OpportunityUpdated() {
  const router = useRouter();
  const { status } = router.query;
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'book') {
      setMessage('We Have Updated Your Leads Status To "Booked Estimate". Effective communication and follow-up is often the key to closing the deal. Want to setup an appointment reminder and followup sequence for this customer? Click the button below!');
    } else if (status === 'close') {
      setMessage('Congratulations on closing the sale! Your submission ensures that we have the data we need to target more great customers like this one! Keep up the good work.');
    } else if (status === 'complete') {
      setMessage('Awesome! The job has been marked as completed. Knock this job out of the park with this one? Click the button below to send a review request to the client now!');
    } else if (status === 'lost') {
        setMessage(`Sorry that lead didn't work out. We're continuously collecting and analyzing data from your website, socials, and ads platforms to improve lead quality and find your perfect customer. Thanks again for choosing Alder Creek Digital!`);
    } else {
      setMessage('The opportunity has been updated successfully.');
    }
  }, [status]);

  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1>Thank You!</h1>
      <p>{message}</p>
      <p>You can close this window now.</p>
    </div>
  );
}