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
######需要注意的是，NaN不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于Number，NaN不等于任何值，包括它本身。
- Infinity
Infinity表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到Infinity。
## 字符串(string)
## 布尔(true  false)
## undefined:未定义或不存在
## null：空值，此处值为空
## 对象(object)：各种值组成的集合
* 狭义的对象
* 数组
* 函数

## typeof运算符
* 有三种方式可以确定一个数据的类型
`typeof运算符， instanceof运算符，Object.prototype.toString方法`
```javascript
typeof 213 //number
typeof '321' //string
typeof false //boolean
function x() {
  
}
typeof x //function
typeof undefined //undefined
```
* 空数组([])也是一个对象，instancof 可以区分数组和对象
* null 类型是对象
```javascript
typeof null
```
