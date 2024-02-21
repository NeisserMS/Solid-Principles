/*
    The solution is to create an interface and by creating it we can create several classes that implement IMailService.
*/

import { IMailService, Message } from './class';

class MailChimpService implements IMailService {
    send(message: Message): void { /*ToDo */ }
}

class sendBlueService implements IMailService {
    send(message: Message): void { /*ToDo */ }
}

class sendGridService implements IMailService {
    send(message: Message): void { /*ToDo */ }
}

/*
    And this solves the issue of dependency, that is, the strong dependence on the MailChimpService class,
    because now we work with abstraction, that is, with the interface, we are no longer interested in who is behind the interface,
    the only thing that matters to us is to implement it.
*/

class OrderService {
    constructor(private readonly mailSservice: IMailService) { }

    create(): void {
        var message = new Message();

        message.to = "customer@email.com"
        message.issue = "Order Created"

        this.mailSservice.send(message);

        /*
            Today I want to work with MailChimpService, another day with SendInBlueService,
            or maybe SendGridService. There is no need to modify the code, in this case only
            modify the instance, the rest remains the same.
        */
        let orderService = new OrderService(
            new MailChimpService()
        );


        let orderService2 = new OrderService(
            new sendBlueService()
        );

        let orderService3 = new OrderService(
            new sendGridService()
        );

    }
}

