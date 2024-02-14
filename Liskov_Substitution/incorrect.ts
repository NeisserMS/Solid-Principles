/* 
    It is a purely inheritance issue, that is, the subtypes or children classes must be of the base or parent class.
    The following example says that there is a parent class called animal with the methods walk,
    run and hunt. Then there are two other daughter classes, the Tiger class can implement those three methods of the class, but the Turtle class cannot,
    it does not run, much less hunt. Although it is common to make an exception since those two methods cannot be implemented,
    but in reality we are in a case of a terrible design.
*/

class Animal {
    run() { }
    walk(): void { }
    hunt(): void { }
}

class Tiger_ extends Animal {
    run(): void { }
    walk(): void { }
    hunt(): void { }
}

class Turtle_ extends Animal {
    run() {
        throw new Error('Turtle cannot run');
    }

    walk() {
        throw new Error('Turtle can walk');
    }

    hunt() {
        throw new Error('Turtle cannot hunt');
    }
}
