# 基础
##语句
##变量
- 变量提升：JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升
- 变量声明： 1.再次声明同一变量如果不赋值无效,只声明 不赋值为undefind
            2.建议声明变量时一定写var
- 标识符：
- 注释：
        -->放在行首回被视为注释
- 区块：
{} 内部声明变量 依然是作用于全局
## 条件语句:
- else 总是和距离最近的if配对

```javascript
var m = 1;
var n = 2;

if (m !== 1)
if (n === 2) console.log('hello');
else console.log('world')
```
上面的代码不会有任何输出                    
- switch
- 三元操作符
## 循环：
- while
- for
- do……while
- break/continue
## 标签
- 标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。
  
  标签通常与break语句和continue语句配合使用，跳出特定的循环。
```javascript
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
```

            