export class SmtpClient {
    send(message: Message) {
        console.log(`Sending message to ${message.to}`);
    }
}

export class Message {
    to?: string;
    from?: string;
    body?: string;
}

export class Order {
    id?: number;
    description?: string;
}