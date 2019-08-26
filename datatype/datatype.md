#数据类型
## 数值(number)（1or1.0）
###整数和浮点数
**JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。**
### 数值精度
JavaScript 对15位的十进制数都可以精确处理。<br>
* 正向溢出：如果一个数大于等于2的1024次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回Infinity。<br>
* 负向溢出：如果一个数小于等于2的-1075次方（指数部分最小值-1023，再加上小数部分的52位），那么就会发生为“负向溢出”，即 JavaScript 无法表示这么小的数，这时会直接返回0。
### 数值表示
### 数值的进制
* 十进制：没有前导0的数值。
* 八进制：有前缀0o或0O的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
* 十六进制：有前缀0x或0X的数值。
* 二进制：有前缀0b或0B的数值。<br>
`如果八进制、十六进制、二进制的数值里面，出现不属于该进制的数字，就会报错。`
### 特殊数值
* 正零和负零:<br>
`JavaScript 内部实际上存在2个0：一个是+0，一个是-0，区别就是64位浮点数表示法的符号位不同。它们是等价的。几乎所有场合，正零和负零都会被当作正常的0。
唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的。`
```javascript
(1 / +0) === (1 / -0) // false
```
- NaN:
**NaN是 JavaScript 的特殊值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合。**
```javascript
5 - 'x' // NaN
```
#####需要注意的是，NaN不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于Number，NaN不等于任何值，包括它本身。
- Infinity
Infinity表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到Infinity。
## 字符串(string)
字符串默认只能写在一行，如果要写成多行，必须在行尾加上反斜线:\
```javascript
var longString = 'Long \
long \
long \
string';
```
每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。
###base64转码：
所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、+和/这64个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。
```javascript
btoa();//任意值转为 Base64 编码
atob();//Base64 编码转为原来的值
//这两个方法不适合非 ASCII 码的字符，会报错。
btoa('你好');//报错
/**
要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。
**/

function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"
```
## 布尔(true  false)
## undefined:未定义或不存在
## null：空值，此处值为空
## 对象(object)：各种值组成的集合
* 狭义的对象
* 数组
* 函数
* 对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。
```javascript
var obj = {
  foo: 'Hello',
  bar: 'World'
};
```
### 键名
对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以。上面的代码也可以写成下面这样
```javascript
var obj = {
  'foo': 'Hello',
  'bar': 'World'
};
```
如果键名是数值，会被自动转为字符串。<br>
如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。<br>
###键值
可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。
```javascript
var obj = {
  p: function (x) {
    return 2 * x;
  }
};

obj.p(1) // 2
```
如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。
```javascript
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a; // 1

o2.b = 2;
o1.b // 2
```
此时，如果取消某一个变量对于原对象的引用，不会影响到另一个变量。
###属性的引用
一种采用点操作符，一种采用方括号，如果使用方括号，那么键名必须用双引号引起来
### 属性的遍历
使用for。。in来遍历
```javascript
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}
// 键名： a
// 键值： 1
// 键名： b
// 键值： 2
// 键名： c
// 键值： 3
```
for...in循环有两个使用注意点。

* 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
* 它不仅遍历对象自身的属性，还遍历继承的属性。
### with 语句
它的作用是操作同一个对象的多个属性时，提供一些书写的方便。
```javascript
// 例一
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]){
  console.log(href);
  console.log(title);
  console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
```
注意：如果with区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。可能会出现很多不必要的麻烦 所以**一般不要使用with**

## typeof运算符
* 有三种方式可以确定一个数据的类型
`typeof运算符， instanceof运算符，Object.prototype.toString方法`
```javascript
typeof 213; //number
typeof '321'; //string
typeof false; //boolean
function x() {
  
}
typeof x;//function
typeof undefined //undefined
```
* 空数组([])也是一个对象，instancof 可以区分数组和对象
* null 类型是对象
```javascript
typeof null
```
