'use strict';
(function () {
    $('#example2').accordion({
        canToggle: true
    });  
})();

var repeatConsoleLog = function(i, callback) {
    setTimeout(function() {
        console.log(i);
        if (i >= 9) {
            callback();
        } else {
            repeatConsoleLog(i+1, callback);
        }
    }, 10);
}
repeatConsoleLog(0, function() {
    console.log('done');
});

function Person() {}

Person.prototype.walk = function() {
    console.log('I am walking!');
};
Person.prototype.sayHello = function() {
    console.log('hello');
};

function Student() {
    Person.call(this);
}

Student.prototype = new Person();

Student.prototype.constructor = Student;

Student.prototype.sayHello = function() {
    console.log('Hi, I am a student');
};

Student.prototype.sayGoodby = function() {
    console.log('Goodbye');
};

let student1 = new Student();
student1.sayHello();
student1.walk();
student1.sayGoodby();