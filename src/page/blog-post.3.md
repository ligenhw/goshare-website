![JavaScript](https://upload-images.jianshu.io/upload_images/12890819-d3e3d25d20095b54.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 前言

只有深入学精一门语言，学其他语言才能更好地举一反三，触类旁听。

从接触前端开发到现在已经将近 2 年了，最近又看了阮一锋写的： [《JavaScript 语言入门教程》](https://wangdoc.com/javascript/index.html) 一书，重温 JavaScript 。

小汪将工作和面试遇到过的，没多少人知道的 JavaScript 技巧，却十分实用的技巧都总结在这里面，分享给大家 。

温故而知新，我们对技术应该有的态度是： Stay hungry ! Stay young ！

# 1. 标签（label）

JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，标签的格式如下。
```
label:
语句
```

标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。

标签通常与 break 语句和 continue 语句配合使用，跳出特定的循环。
```
top:
for (var i = 0; i < 3; i++){
for (var j = 0; j < 3; j++){
if (i === 1 && j === 1) break top;
console.log('i=' + i + ', j=' + j);
}
}
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
```

上面代码为一个双重循环区块，break 命令后面加上了 top 标签（注意，top 不用加引号），满足条件时，直接跳出双层循环。如果 break 语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。

标签也可以用于跳出代码块。
```
foo: {
console.log(1);
break foo; // 注意要加 break 才能退出
console.log('本行不会输出');
}
console.log(2);
// 1
// 2
```
上面代码执行到 break foo，就会跳出区块。

continue 语句也可以与标签配合使用。
```
top:
for (var i = 0; i < 3; i++){
for (var j = 0; j < 3; j++){
if (i === 1 && j === 1) continue top;
console.log('i=' + i + ', j=' + j);
}
}
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2
```
上面代码中，continue 命令后面有一个标签名，满足条件时，会跳过当前循环，直接进入下一轮 **外层循环。** 如果 continue 语句后面不使用标签，则只能进入下一轮的 **内层循环。**

小汪经过实践得出以下用途。

**用途：**

- 可以跳出循环。
- 对于多层循环也同样适用。
- 特别是两层或者多层循环，只是为了找到想要的某个值时，而循环的数据是大量的，用标签就非常高效。

# 2. 区分数组和对象

先来道面试题：

```
console.log(typeof window)
console.log(typeof {}) 
console.log(typeof [])
console.log(typeof null)
```
答案：
```
"object"
"object"
"object"
"object"
```
上面代码中，null 返回 object 。这是由于历史原因造成的，且一切原型链的终点都是 null。
空数组（ [] ）的类型也是 object，这表示在 JavaScript 内部，数组本质上只是一种特殊的对象。而 instanceof 运算符可以区分数组和对象。

```
var o = {};
var a = [];

o instanceof Array // false
a instanceof Array // true
```
# 3. null, undefined 和布尔值

经常会有面试官问：null 与 undefined 的区别 ？

区别：
- **null 是一个表示“空”的对象，转为数值时为 0 。**
- **undefined 是一个表示"此处无定义"的原始值，转为数值时为 NaN。**

```
Number(null) // 0
5 + null // 5

Number(undefined) // NaN
5 + undefined // NaN
```
#### 3.1 用法和含义
对于 null 和 undefined，大致可以像下面这样理解。

null 表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入 null，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入 null ，表示未发生错误。

undefined 表示“未定义”，下面是返回 undefined 的典型场景。
```
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
return x;
}
f() // undefined

// 对象没有赋值的属性
var o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```
注意，布尔值转换的时候，**空数组（[]）和空对象（{}）对应的布尔值，都是true。**
```
if ([]) {
console.log('true');
}
// true

if ({}) {
console.log('true');
}
// true
```
# 4. 数值

JavaScript 内部，所有数字都是以 64 位浮点数形式储存，即使整数也是如此。所以，1 与 1.0 是相同的，是同一个数。
```
1 === 1.0 // true
```

JavaScript 语言的底层根本没有整数，所有数字都是小数（ 64 位浮点数）。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把 64 位浮点数，转成 32 位整数，然后再进行运算。

**由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。**

例如：
```
0.1 + 0.2 === 0.3
// false

0.3 / 0.1
// 2.9999999999999996

(0.3 - 0.2) === (0.2 - 0.1)
// false

2.22 + 2.21
// 4.43 

3.45 + 1.11
// 4.5600000000000005

2.22 + 2.24
// 4.460000000000001
```
但是商品计算金额的时候，金额的结果一般都是保留两倍小数点的，那怎么办呢？

可以用 **toFixed** 解决：
```
var a = 2.22 + 2.24
// 4.460000000000001
var result = (a).toFixed(2)
// 4.46
```

# 5. Object 属性的遍历

for...in 循环用来遍历一个对象的全部属性(包括可遍历的继承的属性)。但是，**一般情况下，都是只想遍历对象自身的属性**，所以使用 for...in 的时候，应该结合使用 hasOwnProperty 方法，在循环内部判断一下，某个属性是否为对象自身的属性。

```
var person = { name: '老张' };

for (var key in person) {
if (person.hasOwnProperty(key)) {
console.log(key);
}
}
// name
```

# 最后

重大事件：**2017年11月，所有主流浏览器全部支持 WebAssembly，这意味着任何语言都可以编译成 JavaScript，在浏览器运行。**

**前端还是很有未来的 ！！！**

下节内容：[细数 JavaScript 实用黑科技(二)](https://segmentfault.com/a/1190000016512527)。

如果你觉得该文章对你有帮助，欢迎到我的 github，star 一下，谢谢。

[github 地址](https://github.com/biaochenxuying/blog)

参考教程： [《JavaScript 语言入门教程》](https://wangdoc.com/javascript/)

你以为本文就这么结束了 ? **精彩在后面 ！！！**

![](https://upload-images.jianshu.io/upload_images/12890819-4adaa268cecbd322.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


对 **全栈开发** 有兴趣的朋友可以扫下方二维码关注我的公众号

我会不定期更新有价值的内容。

> 微信公众号：**BiaoChenXuYing**
> 分享 前端开发、后端开发 等相关的技术文章，热点资源，全栈程序员的成长之路。

关注公众号并回复 **福利** 便免费送你视频资源，绝对干货。

福利详情请点击： [免费资源分享--Python、Java、Linux、Go、node、vue、react、javaScript](https://mp.weixin.qq.com/s?__biz=MzA4MDU1MDExMg==&mid=2247483711&idx=1&sn=1ffb576159805e92fc57f5f1120fce3a&chksm=9fa3c0b0a8d449a664f36f6fdd017ac7da71b6a71c90261b06b4ea69b42359255f02d0ffe7b3&token=1560489745&lang=zh_CN#rd)

![BiaoChenXuYing](https://upload-images.jianshu.io/upload_images/12890819-091ccce387e2ea34.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)