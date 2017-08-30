'use strict';
var Rect = (function () {
    // static count: number;
    function Rect(width, height) {
        this.width = width;
        this.height = height;
        // Rect.count++;
    }
    Rect.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rect;
}());
// new Rect(10, 10);
// new Rect(10, 20);
// Rect.count;
var rect = new Rect(10, 10);
rect.getArea();
var Duck = (function () {
    function Duck() {
    }
    Duck.prototype.quack = function () {
        console.log('꽥!');
    };
    return Duck;
}());
var Person = (function () {
    function Person() {
    }
    Person.prototype.quack = function () {
        console.log('나도 꽥!');
    };
    return Person;
}());
function makeSomeNoiseWith(duck) {
    duck.quack();
}
makeSomeNoiseWith(new Duck());
makeSomeNoiseWith(new Person());
var Rect2 = (function () {
    function Rect2(width, height) {
        this.width = width;
        this.height = height;
    }
    Rect2.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rect2;
}());
var Circle = (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
//# sourceMappingURL=main.js.map