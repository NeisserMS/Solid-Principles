export class Notification {
    type: 'sms' | 'email';
    email: string;
    issue: string;
    phoneNumber: string;
}

export interface INotification {
    notify(): void;
}

class NotificationEmailService implements INotification {
    constructor(
        private readonly to: string,
        private readonly issue: string
    ) { }

    notify() {
        console.log('Sending email to ' + this.to + ' with issue ' + this.issue);
    }
}

class NotificationSMSService implements INotification {
    constructor(
        private readonly phoneNumber: string,
        private readonly issue: string
    ) { }

    notify() {
        console.log('Sending SMS to ' + this.phoneNumber + ' with issue ' + this.issue);
    }
}