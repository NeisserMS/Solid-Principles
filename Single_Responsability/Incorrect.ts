/*
  The following example breaks with the first principle of SOLID, since the OrderService class has more than one responsibility,
  since in addition to creating the order, it also sends a notification email to the customer. To solve this problem,
  A new class must be created that is responsible for sending the notification email to the client. See the other file.
*/

import { Message, Order, SmtpClient } from "./class";

class orderService {

    private orders: Order[] = [];

    constructor(private readonly _client: SmtpClient) { }

    add(order: Order) {
        // 1: Create order
        this.orders.push(order);

        // 2: Send a notification email to the customer
        var message = new Message();
        message.to = "customer@gmail.com";
        message.from = "empresa_x@gmail.com";
        message.body = "was assigned a salchipollo";

        this.sendCustomerNotification(message);
    }

    sendCustomerNotification(message: Message) {
        this._client.send(message);
    }
}