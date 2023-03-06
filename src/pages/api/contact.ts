import sgMail from '@sendgrid/mail';
import { NextApiResponse, NextApiRequest } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const body = req.body;
    console.log('body', body);
    const msg = {
      to: 'drewjohnsongt@gmail.com',
      from: '	turkschartercontact@gmail.com',
      subject: `Turks Contact Form Submission - ${body.firstName} ${body.lastName}`,
      text: `
    First Name: ${body.firstName}
    Last Name: ${body.lastName}
    Email: ${body.email}
    Phone Number: ${body.phoneNumber}
    Message: ${body.message}
    `,
      html: `
    <b>First Name:</b> ${body.firstName}
    <b>Last Name:</b> ${body.lastName}
    <b>Email:</b> ${body.email}
    <b>Phone Number:</b> ${body.phoneNumber}
    <b>Message:</b> ${body.message}`,
    };
    await sgMail
      .send(msg)
      .then(() => {
        console.log('Successfully sent email');
        res.status(200).json({ success: true });
      })
      .catch((error) => {
        console.log('Error sending email');
        console.error(error);
        res.status(400).json({
          success: false,
          message: error?.response?.body || error,
        });
      });
  }
}
