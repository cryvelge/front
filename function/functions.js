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