// function f() {
//     let n = 1;
//     let m = 2;
//     function f1() {
//         console.log(n,m)
//     }
//     return f1();
// }
// f();

function f(i) {
    return function () {
        return i++;
    }
}
let l = f(5);
console.log(l());
console.log(l());
console.log(l());
//封装对象的私有属性和私有方法
function Person(name) {
    let _age;
    function getAge() {
        return _age;
    }
    function setAge(n) {
        _age = n;
    }
    return {
        name:name,
        getAge:getAge,
        setAge:setAge
    };
}

var person = Person(cry);

person.setAge(23);

person.getAge();




//立即调用的函数表达式
(function test() {

}());