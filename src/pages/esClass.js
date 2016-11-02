export default class Fruit {
    constructor() {
        console.log('I am fruit class')
    }
}

class Apple extends Fruit {
    apple() {
        console.log('I am apple')
    }
}

export class Orange {
    color() {
        console.log('Orange is orange');
    }
}

var apple = new Apple();
apple.apple();
