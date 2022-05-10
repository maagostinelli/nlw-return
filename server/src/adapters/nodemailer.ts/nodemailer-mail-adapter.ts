import { MailAdapter, SendEmailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "45ec5274bd3fb3",
      pass: "6d3b70bd3f8b7b"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async send( {subject, body}: SendEmailData) {
        //burra
        await transport.sendMail({
            from: 'Feedget Team <oi@feedget.com>',
            to: 'Mariana A Agostinelli <marianaagost2@gmail.com>',
            subject,
            html: body
        });
    }
}