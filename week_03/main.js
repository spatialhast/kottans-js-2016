//Object.assign()
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

//Reflect.ownKeys
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys

//instanceof
//https://learn.javascript.ru/instanceof

//RegExp
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp

//Object.prototype.constructor
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

//Object.defineProperty
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

//Object.getOwnPropertyDescriptor
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

(function(){

'use strict'

function merge(target, ...args) {
    args.forEach(obj => {
        deepAssign(target, obj)
    });
    function deepAssign(target, obj) {
        Reflect.ownKeys(obj).forEach(key => {
            if (obj[key] !== null) {
                if (obj[key] instanceof RegExp) {
                    target[key] = new obj[key].constructor(obj[key].source)
                } else if (typeof obj[key] != 'object') {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(obj, key))
                } else {
                    deepAssign(target[key] = new obj[key].constructor(obj[key].source), obj[key])
                };
            };
        });
    };
    return target;
};

var v1 = {key2: 1, key1: 2};
var v2 = {key4: 3, key2: {key2: 4, key1: {key2: 5, key1: 6}}};

console.log("v1:", v1);
console.log("v2:", v2);

let result = merge(v1, v2);
console.log("result:", result);

}());
