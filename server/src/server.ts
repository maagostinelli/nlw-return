import express from 'express'
import nodemailer from 'nodemailer'
import { title } from 'process';
import { prisma } from './prisma';

const app = express(); 
app.use(express.json()); 
//necessário pq express não entende json do corpo da requisição

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "45ec5274bd3fb3",
      pass: "6d3b70bd3f8b7b"
    }
  });

app.post('/feedbacks', async (req,res) => {
    const {type, comment, screenshot} = req.body;
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
            //shortsintax: chave = nome do valor -> não precisa ser escrita
        }
    })

    await transport.sendMail({
        from: 'Feedget Team <oi@feedget.com>',
        to: 'Mariana A Agostinelli <marianaagost2@gmail.com>',
        subject: 'Novo Feedback - Feedget',
        html: `<div style="font-family:sans-serif; color: #111"><p>Tipo de feedback: ${type}</p><p>Comentário: ${comment}</p></div>`
    });

    return res.status(201).json({ data: feedback });
    //201 -> código de criação do protocolo http (algo foi criado para o backend)
})

app.listen(3333, () => {
    console.log("Http server running!");
})
//npx prisma studio -> interface nativa para ver banco de dade+os