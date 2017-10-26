'use strict';
(function () {
    $('#example2').accordion({
        canToggle: true
    });  

    $('.testWrap').on('click', function(e) {
        console.log(e.pageX + " ," + e.pageY);
    });
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