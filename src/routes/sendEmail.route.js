import express from 'express';
import nodemailer from 'nodemailer' 
const {MAIL, PASSWORD} = process.env

const router = express.Router();

router.post('/', async (req, res)=>{
    try {
        let {
            name,
            email,
            subject,
            message
        } = req.body

        let transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 587,
            secure: false,
            auth: {
              user: `${MAIL}`,
              pass: `${PASSWORD}`
            },
            tls: {
                rejectUnauthorized: false
            } 
          });

        const info = await transporter.sendMail({
            from: '"Portfolio Web" <arielcazzulinodev@afc.com.ar>',
            to: 'arielcazzulino@gmail.com',
            subject: 'Formulario de contacto del Portfolio Web',
            html:  `<h1>Información del mensaje:</h1> 
                    <p><b>nombre:</b> ${name}</p> 
                    <p><b>email:</b> ${email}</p> 
                    <p><b>asunto:</b> ${subject}</p> 
                    <p><b>Mensaje:</b></p><p>${message}</p>`                     
        })
        res.status(200).send(`success`)
    } catch(error){
        return res.status(500).json({ error: error.message });
    }
})

export default router;