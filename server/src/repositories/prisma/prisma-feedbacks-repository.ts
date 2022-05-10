import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
//implementa as operações no banco , desacopla as operações do banco da aplicação
    async create({type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
                //shortsintax: chave = nome do valor -> não precisa ser escrita
            }
        });
    }
}