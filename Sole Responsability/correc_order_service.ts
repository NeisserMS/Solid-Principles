import { Message, Order, SmtpClient } from "./class";

class orderService {

    private orders: Order[] = [];

    constructor(private readonly notificationService: sendNotification) { }

    add(order: Order) {
        // 1: Create order
        this.orders.push(order);

        // 2: Create a notification message
        var message = new Message();
        message.to = "customer@gmail.com";
        message.from = "empresa_x@gmail.com";
        message.body = `La orden ${order.id} fue asignada`;

        // 3: Send the notification
        this.notificationService.sendCustomerNotification(message);
    }

}

class sendNotification {

    constructor(private readonly _client: SmtpClient) { }

    // 2: Send a notification email to the customer
    sendCustomerNotification(message: Message) {
        this._client.send(message);
    }
}