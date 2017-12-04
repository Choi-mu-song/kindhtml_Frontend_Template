'use strict';
(function () {
    scrollDir();
})();

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

var myObj = (function(){
    var sayHi = "안녕하세요!!!";
    var intCnt = 0;
    var hi = function() {
        intCnt += 1;
        return sayHi;
    };
    var cnt = function() {
        return intCnt;
    }
    
    return {
        getHi: function() {
            return sayHi;
        },
        getHi2: function() {
            return "반갑습니다.~~!!";
        },
        getHi3: hi,
        getCnt: intCnt,
        getCnt2: cnt
    }
}());

console.log(myObj.getHi());
console.log(myObj.getHi2());
console.log(myObj.getHi3());
console.log(myObj.getCnt);
console.log(myObj.getCnt2());
console.log(myObj.getHi3());
console.log(myObj.getCnt2());

var HTMLChanger = (function() {
    var contents = 'contents';
    
    var changeHTML = function() {
        var element = document.getElementById('attribute-to-change');
        element.innerHTML = contents;
    }

    return {
        callChangeHTML: function() {
            changeHTML();
            console.log(contents);
        }
    }
})();

HTMLChanger.callChangeHTML();

var TeslaModelS = function() {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
}

TeslaModelS.prototype.go = function() {

}
TeslaModelS.prototype.stop = function() {

}

TeslaModelS.prototype = {
    left: function() {

    },
    right: function() {

    }
}

var Subject = function() {
    
}