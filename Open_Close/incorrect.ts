/*
    Classes must be open for extension,
     but closed for modification. If possible we should avoid modifying it.

     We can see said class receives an Array of notifications.
     The problem is that as we see, it wants to know what type of notification to send and that is why it plays with type,
     if it is SMS it will call the sendbySMS method and if it is email it will call sendbyEmail. So here the principle is broken,
     why? Because if we want to add another communication channel like wathsapp we are going to have to modify the code of the NotificationService class and it is not correct.
*/

import { Notification } from "./class";

class NotificationService {
    send(notifications: Array<Notification>) {
        notifications.forEach(notification => {
            if (notification.type === 'sms') {
                this.sendBySMS(notification.phoneNumber, notification.issue);
            }

            if (notification.type === 'email') {
                this.sendByEmail(notification.email, notification.issue);
            }
        });
    }

    sendBySMS(phoneNumber: string, issue: string) {
        console.log('Sending SMS to ' + phoneNumber + ' with issue ' + issue);
    }

    sendByEmail(to: string, issue: string) {
        console.log('Sending email to ' + to + ' with issue ' + issue);
    }
}