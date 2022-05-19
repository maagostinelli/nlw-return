import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment?:string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        //construtor recebe o formato(propriedades) da requisição do contrato de implementação
        private mailAdapter: MailAdapter,
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
    //executa requisição(salvar feedback no banco) independente ao prisma - SOLID dependency
        const { type, comment, screenshot } = request;

        if(!type) {
            throw new Error('Type is not defined!')
        }

        if(!comment && !screenshot) {
            throw new Error('Feedback content is required!')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailAdapter.send({
            subject: "Novo Feedback",
            body: `<div style="font-family:sans-serif; color: #111"><p>Tipo de feedback: ${type}</p><p>Comentário: ${comment}</p></div>`
            + screenshot ? `<img src="${screenshot}"/>` : "",
        })
    }
}