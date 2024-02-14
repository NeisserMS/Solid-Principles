/* 
    The solution is to implement independent interfaces for each animal behavior.
    So we tell each animal to implement each behavior that interests it.
    In this way we avoid writing code that is prone to errors due to poor design.
*/

interface IHunt {
    hunt(): void;
}

interface IRun {
    run(): void;
}

interface IWalk {
    walk(): void;
}

class Tiger implements IHunt, IRun, IWalk {
    run(): void { }
    walk(): void { }
    hunt(): void { }
}

class Turtle implements IWalk {
    walk() {
        throw new Error('Turtle can walk');
    }
}

