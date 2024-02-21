export interface IRepository<T> {
    update(model: T): void;
    create(model: T): void;
    delete(id: number): void;
    get(): void;
}

export class User {
    id: number;
    name: string;
}


/* CORRECT */
export interface IRead<T> {
    getAll(): Array<T>;
    getId(id: number): T;
}

export interface IWrite<T> {
    create(model: T): void;
    update(model: T): void;
}

export interface IDelete {
    delete(id: number): void;
}