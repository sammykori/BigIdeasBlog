
import contactEmail from "../../config/mjml/contactMail";
import SendMailer from "../../config/nodemailer";


export default async function handler(req, res){
    if(req.method === 'GET'){
    } else if(req.method === 'POST'){
        const cdata = req.body;
        const mailBody = contactEmail(cdata.name);

        const mailData = {
            from : cdata.email,
            to : "Samuel Kori<sammykori72@gmail.com>",
            subject :  "Hello Sam",
            html : `<p>${cdata.message}</p>`
        }

        const replyData = {
            from : "Samuel Kori<sammykori72@gmail.com>",
            to : cdata.email,
            subject :  "Thanks for getting in Touch",
            html : mailBody
        }

        SendMailer(mailData)
        .then((results) => {
            console.log(results);
            if( results.response){

                SendMailer(replyData)
                .then((results) => {
                    console.log(results);
                    res.status(200).json(results)
                })
                .catch((err) => {
                    console.log(err.message)
                    
                })
            }
        })
        .catch((err) => {
            console.log(err.message)
            res.status(500).json(err.message)
        })
    }
}