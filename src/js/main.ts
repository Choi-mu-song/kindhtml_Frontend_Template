'use strict';

interface Shape {
    getArea(): number;
}

class Rect implements Shape {
    private width: number;
    private height: number;
    // static count: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        // Rect.count++;
    }

    getArea(): number {
        return this.width * this.height;
    }
}
// new Rect(10, 10);
// new Rect(10, 20);
// Rect.count;
const rect = new Rect(10, 10);
rect.getArea();


interface Quackable {
    quack(): void;
}

class Duck implements Quackable {
    quack() {
        console.log('꽥!');
    }
}

class Person {
    quack() {
        console.log('나도 꽥!');
    }
}

function makeSomeNoiseWith(duck: Quackable): void {
    duck.quack();
}

makeSomeNoiseWith(new Duck());
makeSomeNoiseWith(new Person());

interface OpShape {
    width?: number;
    height?: number;
    radius?: number;
    getArea(): number;
}

class Rect2 implements OpShape {
    width: number;
    height: number;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Circle implements OpShape {
    radius: number;

    constructor(radius) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

interface numberOperation {
    (arg1: number, arg2: number): number;
}

const sum: numberOperation = (arg1: number, arg2: number): number => {
    return arg1 + arg2;
}

const multiply: numberOperation = (arg1, arg2) => {
    return arg1 * arg2;
};

