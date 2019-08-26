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
