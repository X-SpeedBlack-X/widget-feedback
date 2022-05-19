import { MailAdapter, SendMailData } from '../mailAdapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '441c40da114cfa',
    pass: 'cde0f32be2a856'
  }
})

export class NodeMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Isaque de sousa <isaquesousa777@gmail.com>',
      subject: subject,
      html: body
    })
  }
}
