#数组
##定义
数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。
```javascript
var arr = ['a', 'b', 'c'];
```
任何类型的数据，都可以放入数组。

```javascript
var arr = [
  {a: 1},
  [1, 2, 3],
  function() {return true;}
];

arr[0] // Object {a: 1}
arr[1] // [1, 2, 3]
arr[2] // function (){return true;}
```
##数组的本质
本质上，数组属于一种特殊的对象。typeof运算符会返回数组的类型是object。
```javascript
typeof [1, 2, 3] // "object"
```
数组的键总是从0开始的整数
##length属性
返回成员的数量
```javascript
[1,2,3].length //3
```
* JavaScript 使用一个32位整数，保存数组的元素个数。这意味着，数组成员最多只有 4294967295 个（2^32 - 1）个，也就是说length属性的最大值就是 4294967295。
* 只要是数组，就一定有length属性。该属性是一个动态的值，等于键名中的最大整数加上1。
```javascript
var arr = ['a', 'b'];
arr.length // 2

arr[2] = 'c';
arr.length // 3

arr[9] = 'd';
arr.length // 10

arr[1000] = 'e';
arr.length // 1001
```
##in运算符
检查某个键名是否存在的运算符in，适用于对象，也适用于数组
```javascript
var arr = [ 'a', 'b', 'c' ];
2 in arr  // true
'2' in arr // true
4 in arr // false
```
##for..in循环和遍历数组
```javascript
var a = [1,2,3];
for (var i in a) {
console.log(a[i])
}
//1
//2
//3
```
但是，for...in不仅会遍历数组所有的数字键，还会遍历非数字键。
```javascript
var a = [1, 2, 3];
a.foo = true;

for (var key in a) {
  console.log(key);
}
// 0
// 1
// 2
// foo
```

##数组的空位
当数组的某个位置是空元素，即两个逗号之间没有任何值，称该数组存在空位（hole）。
```javascript
var arr = [1,,3];
arr.length;//3
```
使用delete命令删除一个数组成员，会形成空位，并且不会影响length属性。
```javascript
var arr = [1,2,3];
delete arr[2];
arr.length;//3
```
数组的某个位置是空位，与某个位置是undefined，是不一样的。如果是空位，使用数组的forEach方法、for...in结构、以及Object.keys方法进行遍历，空位都会被跳过。
##类似数组的对象
如果一个对象的所有键名都是正整数或零，并且有length属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。
```javascript
var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

obj[0] // 'a'
obj[1] // 'b'
obj.length // 3
obj.push('d') // TypeError: obj.push is not a function
```
典型的“类似数组的对象”是函数的arguments对象，以及大多数 DOM 元素集，还有字符串。
```javascript
// arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');

arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

// DOM元素集
var elts = document.getElementsByTagName('h3');
elts.length // 3
elts instanceof Array // false

// 字符串
'abc'[1] // 'b'
'abc'.length // 3
'abc' instanceof Array // false

```
数组的slice方法可以将“类似数组的对象”变成真正的数组。
```javascript
var arr = Array.prototype.slice.call(arrayLike);
```
除了转为真正的数组，“类似数组的对象”还有一个办法可以使用数组的方法，就是通过call()把数组的方法放到对象上面。
```javascript
function print(value, index) {
  console.log(index + ' : ' + value);
}

Array.prototype.forEach.call(arrayLike, print);
```
注意，这种方法比直接使用数组原生的forEach要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法。
