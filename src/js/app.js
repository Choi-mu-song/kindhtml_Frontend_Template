'use strict';

$('.case').on('click', function(){
    console.log("jquery run!");
});

var [a, ,b] = [1,2,3];
a === 1;
b === 3;

function g({name: x}) {
    console.log(x);
}
g({name: 5})

function r({x, y, w = 10, h = 10}){
    return x + y + w + h;
}
(r({x:1, y:2}) === 23) ? console.log("23") : console.log("false");

