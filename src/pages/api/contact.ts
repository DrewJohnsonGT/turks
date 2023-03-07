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
      subject: `Turks Contact Form Submission - ${body.firstName} ${body.lastName}`,
      message: `
    First Name: ${body.firstName}
    Last Name: ${body.lastName}
    Email: ${body.email}
    Phone Number: ${body.phoneNumber}
    Message: ${body.message}
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
