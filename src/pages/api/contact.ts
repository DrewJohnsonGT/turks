import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextApiResponse, NextApiRequest } from 'next';

const TO_EMAILS = ['drewjohnsongt@gmail.com'];
const FROM_EMAIL = 'Turks Luxe Contact Form <contact@mg.turks-luxe.com>';

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const body = req.body;
    console.log('body', body);
    const msg = {
      to: TO_EMAILS,
      from: FROM_EMAIL,
      subject: `Turks Charter Contact Form - ${body.firstName} ${body.lastName}`,
      text: `
    First Name: ${body.firstName}
    Last Name: ${body.lastName}
    Email: ${body.email}
    Phone Number: ${body.phoneNumber}
    Date(s): ${body.dates}
    Message: ${body.message}
    `,
      html: `
    <b>First Name</b>: ${body.firstName}<br/>
    <b>Last Name</b>: ${body.lastName}<br/>
    <b>Email</b>: ${body.email}<br/>
    <b>Phone Number</b>: ${body.phoneNumber}<br/>
    <b>Date(s)</b>: ${body.dates}<br/>
    <b>Message</b>: ${body.message}<br/>
    `,
    };

    await mg.messages
      .create(process.env.MAILGUN_DOMAIN, msg)
      .then((msg) => {
        console.log(msg);
        res.status(200).json({ message: 'Success' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'Error' });
      });
  }
}
