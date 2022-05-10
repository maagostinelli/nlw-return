import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer.ts/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async (req,res) => {
    const {type, comment, screenshot} = req.body;

    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbackRepository,
      //prisma é passado como parametro para a funcionalidade(SubmitFeedbackUseCase), mas não é ele q procura pela dependência 
      nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot
    })

    return res.status(201).send()
    //201 -> código de criação do protocolo http (algo foi criado para o backend)
})