import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendEmailSpy = jest.fn()
//Spy - jest.fn() -> verifica se alguma função foi chamada dentro da dependência

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy },
    {send: sendEmailSpy }
)

/*
const submitFeedback = new SubmitFeedbackUseCase(
    {create: async () => {} },
    {send: async () => {} }
    //pode ser passada como método vazio pq queremos testar apenas o caso de uso e não a dependência
//recebe como parâmetros as dependências da classe a ser testada
) 
*/

describe('Submit feedback', () => {
    it('should be able to submit feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Tá tudo bugado',
            screenshot: 'img.png'
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendEmailSpy).toHaveBeenCalled()
    })

    it('should not be able to submit feedback without content', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: ''
        })).rejects.toThrow()
    })
})

