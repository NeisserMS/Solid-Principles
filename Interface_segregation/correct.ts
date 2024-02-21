/* 
    So here we must divide and conquer, make smaller interfaces, it is similar to Liskov (but it is a different approach because it deals with subtype classes).
    By defining smaller interfaces we can make the code more scalable. RepositoryUser can now implement the read interface and is no longer required to implement all other methods.
*/

import { IRead, User } from './class';

class userReportRepository implements IRead<User> {
    getAll(): Array<User> {
        throw new Error('Implement method');
    }
    getId(id: number): User {
        throw new Error('Implement method.');
    }
}

