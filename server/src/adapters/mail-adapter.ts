export interface SendEmailData {
    subject: string;
    body: string
}

export interface MailAdapter {
    send: (data: SendEmailData) => Promise<void>;
}