/*
It is best to extend it using polymorphism.
We have an interface and additionally two classes, one to send the email and another to send the SMS message.
We have updated the NotificationService class and it now receives the interface as a parameter instead of directly with the class.
In this way through the NotificationService abstraction it is able to work with any notification provider.
So if in the future we want to add another communication channel, we create its class and implement the interface and internally NotificationService is closed for notification.
In this way we make code that is scalable and easy to maintain over time.
*/

import { INotification } from "./class";

class NotificationService {

    constructor() { }

    send(notifications: Array<INotification>) {
        notifications.forEach(notification => {
            notification.notify();
        });
    }

}


