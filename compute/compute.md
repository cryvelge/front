#运算符
##加法运算符
* 要注意所谓的重载（overload）
当与字符串使用时，会变成字符串拼接
```javascript
true + true // 2
1 + true // 2

false + '1' //false1

1 + 'a' // "1a"
false + 'a' // "falsea"
'3' + 4 + 5 // "345"
3 + 4 + '5' // "75"

```
###对象的相加
如果运算子是对象，必须先转成原始类型的值，然后再相加。
```javascript
var obj = { p: 1 };
obj + 2 // "[object Object]2"
```
对象转成原始类型的值，规则如下。

首先，自动调用对象的valueOf方法。
```javascript
var obj = { p: 1 };
obj.valueOf() // { p: 1 }
```
一般来说，对象的valueOf方法总是返回对象自身，这时再自动调用对象的toString方法，将其转为字符串。
```javascript
var obj = { p: 1 };
obj.valueOf().toString() // "[object Object]"
```
这里有一个特例，如果运算子是一个Date对象的实例，那么会优先执行toString方法。
```javascript
var obj = new Date();
obj.valueOf = function () { return 1 };
obj.toString = function () { return 'hello' };

obj + 2 // "hello2"
```
##余数运算符%
##自增自减
##数值运算符
数值运算符的作用在于可以将任何值转为数值
```javascript
+true // 1
+[] // 0
+{} // NaN
```
##指数运算符
##赋值运算符
##比较运算符
###字符的比较
字符串按照字典顺序进行比较。
```javascript
'cat' > 'dog' // false
'cat' > 'catalog' // false
```
JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。
###非字符串的比较
* 如果两个运算子都是原始类型的值，则是先转成数值再比较
* 任何值（包括NaN本身）与NaN比较，返回的都是false。
* 如果运算子是对象，会转为原始类型的值，再进行比较。（先调用valueOf 再调用toString）
##严格相等运算符
###不同类型的值
* 如果两个值的类型不同，直接返回false。
###同一类的原始类型值
同一类型的原始类型的值（数值、字符串、布尔值）比较时，值相同就返回true，值不同就返回false。
```javascript
1 === 0x1 // true
```
###复合类型
两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。
```javascript
{} === {} // false
[] === [] // false
(function () {} === function () {}) // false
```
###undefined 和 null
undefined和null与自身严格相等
```javascript
undefined === undefined // true
null === null // true
```
## 位运算符
* 二进制或运算符（or）：符号为|，表示若两个二进制位都为0，则结果为0，否则为1。
```javascript
111|101 //111
```
* 二进制与运算符（and）：符号为&，表示若两个二进制位都为1，则结果为1，否则为0。
```javascript
111&101 //101
```
* 二进制否运算符（not）：符号为~，表示对一个二进制位取反。
```javascript
~100//
```
##类型转换
###强制类型转换
强制转换主要指使用Number()、String()和Boolean()三个函数，手动将各种类型的值，分别转换成数字、字符串或者布尔值。

####Number()
使用Number函数，可以将任意类型的值转化成数值。
* Number函数将字符串转为数值，只要有一个字符无法转成数值，整个字符串就会被转为NaN。
* Number方法的参数是对象时，将返回NaN，除非是包含单个数值的数组。
                 
