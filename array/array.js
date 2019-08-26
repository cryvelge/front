var arr = [1,2,3];
arr[10] = 1;
console.log(arr.length);
arr.length = 2;
console.log(arr);
console.log(0 in arr);//in 运算符
for (var i in arr) {
    console.log(arr[i]);
}
arr.foo = 'foo';
for (var j in arr) {
    console.log(arr[j]);
}
var arr1 = [1,,2];
console.log(arr1.length);
var arr1 = [1,0,2];
delete arr1[1];
console.log(arr1.length,arr1[1]);//3 undefined
//类似数组的对象
var arrLike = {
    0:1,
    1:2,
    2:3,
    length:3
};
var realArr =  Array.prototype.slice.call(arrLike);
console.log(realArr instanceof Array);