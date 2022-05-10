export interface FeedbackCreateData {
    type: string;
    comment?: string;
    screenshot?:string;
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
    //em js, toda função assíncrona(prisma.feedback.create) é uma Promise
}

//cria o "contrato" de implementações
//"Diz" para a aplicação quais as operações podemos realizar no banco de dados