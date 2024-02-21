/*
Multiple interfaces work better than one. Divide and conquer,
let's not have an interface with many methods, but let's make a lighter version of it.
For example, we have a repository interface with all CRUD methods.
The UserRepository class uses it and it is correct, because the userRepository can do all these actions.
*/

import { IRepository, User } from './class';

class userRepository implements IRepository<User> {
    update(model: User): void { }
    create(model: User): void { }
    delete(id: number): void { }
    get(): void { }
}

/* 
    Now, what happens if we have a userReportRepository and it only has read access?
    It cannot do all the actions and the interface forces us to implement it.
*/

class userReportRepository implements IRepository<User> {

    get(): void {
        throw new Error('If you can implement the method.');
    }
    update(model: User): void {
        throw new Error('Method not implemented.');
    }
    create(model: User): void {
        throw new Error('Method not implemented.');
    }
    delete(id: number): void {
        throw new Error('Method not implemented.');
    }
}