export class Message {
    to: string;
    issue: string;
}


// Correct
export interface IMailService {
    send(message: Message): void
}