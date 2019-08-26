# 函数
## JavaScript 有三种声明函数的方法。
###function 命令
```javascript
function print(s) {
  console.log(s);
}
```
###函数表达式
```javascript
var print = function(s) {
  console.log(s);
};
```
或者
```javascript
var f = function f() {};
```
###Function 构造函数
```javascript
var add = new Function(
  'x',
  'y',
  'return x + y'
);

// 等同于
function add(x, y) {
  return x + y;
}
``` 
### 函数参数
* 如果是基本类型 那么参数是传值传递
* 如果是数组，对象，其他函数，那么是传址传递

##闭包
