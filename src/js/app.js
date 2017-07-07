'use strict';
(function () {
    $('#example2').accordion({
        canToggle: true
    });  
})();

// var repeatConsoleLog = function(i, callback) {
//     setTimeout(function() {
//         console.log(i);
//         if (i >= 9) {
//             callback();
//         } else {
//             repeatConsoleLog(i+1, callback);
//         }
//     }, 10);
// }
// repeatConsoleLog(0, function() {
//     console.log('done');
// });

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

MYAPP.namespace('MYAPP.utilities.array');

MYAPP.utilities.array = function () {

    var uobj = MYAPP.utilities.object,
        ulang = MYAPP.utilities.lang;

    var array_string = '[object Array]',
        ops = Object.prototype.toString;

    return {
        inArray: function (needle, haystack) {
            for (var i = 0, max = haystack.length; i < max; i += 1) {
                if (haystack[i] === needle) {
                    return true;
                }
            }
        },
        isArray: function (a) {
            return ops.call(a) === array_string;
        }
    }
}();