function f() {

}
console.log(typeof f);
console.log([] instanceof Array);//instanceof 可以区分数组和对象
console.log(typeof null);
console.log(1===1.0);
console.log(String(011));//9
console.log(parseInt(011), 2);//9
//isNaN只对数值有效，如果传入其他值，会先被转为数值
console.log(isNaN(011));//false
console.log(isNaN([]));//false
console.log(isNaN({}));//true
console.log(isNaN(['xyz']));//true
//isFinite()返回bool值表示某个值是否为正常的数值
isFinite(Infinity); // false
isFinite(-Infinity);// false
isFinite(NaN);// false
isFinite(undefined);// false
isFinite(null);// true
isFinite(-1);// true

/**
 * -----------------字符串-------------------
 */
console.log(typeof 'asdadasd');
console.log('asdadasd' instanceof Object);


/**
 *--------------------对象----------------------
 **/
var obj = {
    foo : 'hello',
    bar : 'world',
};
console.log(Object.keys(obj));

//删除属性：delete
delete obj.bar;
console.log(Object.keys(obj));

//属性是否存在：in
var obj2 = {
    p:1
};
console.log('p' in obj2);
console.log('toString' in obj2); //继承的属性也返回true
console.log(obj2.hasOwnProperty('toString'));

/**
 * 属性的遍历
 */
for (var p in obj) {
    console.log(p+':'+obj.p);
}

