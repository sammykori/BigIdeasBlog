import nodemailer from "nodemailer"
import { OAuth2Client } from "google-auth-library"


const CLIENT_ID = '407078242964-slub3hp46hl21pvi7cj3qq6gc3cagvfc.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https:/developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04ch1X3mCAjLdCgYIARAAGAQSNwF-L9IrJozPyR4-rWsuY46El2x6pAL892-08UEbELX44bP_xVFGQfeBOnfyB1vjKjobkTV3UIk'

const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

export default async function SendMailer(mailData) {
    try {
        const accesToken = await oAuth2Client.getAccessToken()

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: 'sammykori72@gmail.com',
              clientId: CLIENT_ID,
              clientSecret: CLIENT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accesToken
            },
        });

        const result = await transporter.sendMail(mailData)

        return result

    } catch (error) {
        return error
    }

}
