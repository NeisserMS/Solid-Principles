/*
    High level classes should not depend on low level classes.
    We have an OrderService class to generate the creation of the orders and then creating it will send a notification to the client,
    therefore to send a notification it will use the MailChimp provider (provider for sending mass emails). At first glance,
    the code fulfills its purpose and works well, but what happens if tomorrow we need to work with another provider,
    then we have to modify all the dependencies that refer to MailChimpService and therefore the principle is broken because the high class OrderService
    level should not depend on low level class like MailChimpService.
*/

import { Message } from './class';

class MailChimpService {
    send(message: Message): void { /*ToDo */ }
}

class OrderService {
    constructor(private readonly mailchimpservice: MailChimpService) { }

    create(): void {
        var message = new Message();

        message.to = "customer@email.com"
        message.issue = "Order Created"

        this.mailchimpservice.send(message);
    }
}