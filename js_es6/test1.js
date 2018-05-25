/*let 和 const 命令	*/
	//不提升变量 存在暂时性死区
	// 01.let 只在let命令坐在的代码块内有效
	// {
	// 	let a = 10;
	// 	var b = 2;
	// }
	// console.log( a );//a is not defined
	// console.log( b );//2
	
	/*for循环*/
	//var a = [];
	//全局i 会重新赋值
	// for( var i = 0;i < 10;i++ ){
	// 	a[i] = function(){
	// 		console.log( i );
	// 	}
	// }
	// a[6]();//10

	// var b = [];
	// //i只在本轮循环中有效 每轮都会有新的值
	// for( let i = 0;i < 10;i++ ){
	// 	b[i] = function(){
	// 		console.log( i );
	// 	}
	// }
	// b[6]();

	//02.暂时性死区
	//在let和const命令声明变量之前，该变量都是不可用的
	// var tmp = 'quanquan';

	// if( true ){
	// 	// tmp = 'yuanyuan';
	// 	// console.log(tmp);//tmp is not defined
	// 	let tmp;
	// 	tmp = 'quanquan mei'
	// 	console.log( tmp );// quanquan mei
	// }

	//03.let 不允许重复声明
	// function func(){
	// 	let a = 2;
	// 	var a = 3;
	// }
	// func();//报错

	// function func1(){
	// 	let a = 4;
	// 	let a = 5;
	// }
	// func1();//报错
	
	//04.不能在函数内部重新声明参数
	// function func( par ){
	// 	let par = 3;
	// }
	// func();//报错

	// function func( par ){
	// 	{
	// 		let par = 3;
	// 	}
	// }

	// func();//不报错

/* 块级作用域 */

	//ES5只有全局作用域和函数作用域 没有块级作用域
	//外层作用域无法使用内层作用域
	//不合理的两个场景
	//01.内层变量可能会覆盖外层变量
	//f()中的tmp会变量提升，导致内层的tmp变量覆盖了外层的tmp变量
	// var tmp = new Date();
	// function f(){
	// 	console.log( tmp );
	// 	if( false ){
	// 		var tmp = 'hello';
	// 	}
	// }
	// f();//undefined

	//02.用来计数的循环变量泄露了全局变量
	// var s = 'hello';

	// for( var i = 0;i < s.length;i++ ){
	// 	// console.log( s[i] );
	// }
	// console.log( i )//5

	//块级作用域与函数声明
	//变量声明提前是 var f = undefined;
	// function f(){console.log('out')}

	// (function(){
	// 	if(false){
	// 		function f(){console.log('inside')}

	// 	}
	// 	f();//报错 f is not a function
	// }())

	//注意
	//01.考虑环境因素导致的行为差异太大，应该避免在块级作用域内声明函数。如果需要 应该写成函数表达式 而不是声明语句
	//函数声明语句 
	// {
	// 	function f(){}
	// }
	// //函数表达式
	// {
	// 	var f = function(){}
	// }
	// //02.块级作用域声明函数 只在使用{}的情况下成立 如果没有{}就会报错
	// if(true){
	// 	function f(){}
	// }//不报错
	// if(true) function f(){};//报错


/* const  */
	//const 只读常量 只声明 不赋值 会报错 只在块级作用域有效
	//不存在变量提升 有暂时性死区
	//const并不是变量的值不能改动。而是变量指向的内存地址不能改动

/* ES6 6种声明变量的方法 var function let const import class */
	//顶层属性 var function
	//其他都是非顶层属性
	//var a = 2;
	// window.a //2
	// let b = 3;
	// window.b //undefined
	/* 顶层对象 */
	// 浏览器指的是 window
	// node 指的是 global
	// 浏览器和web worker 指的是 self

/* 变量的解构与赋值 */
	// function* fibs() {
	// 	let a = 0;
	// 	let b = 1;
	// 	while (true) {
	// 		yield a;
	// 		[ a, b ] = [ b, a + b ];
	// 		console.log( [a,b] )
	// 	}
	// }
	// let [first, second, third, fourth, fifth, sixth,seven] = fibs();
	// console.log( seven );//[0,1,1,2,3,5,8]

	// let [a] = 'hello';
	// console.log(a)

	/* 字符串的扩展 */
	
	//includes() 找到参数字符串 第二个参数表示从第N个位置到最后
	//startsWith() 参数字符串是否在原字符串头部 第二个参数表示从第N个位置到最后
	//endsWith() 参数字符串是否在原字符串尾部 第二个参数表示前N个位置
	// let s = 'hello word';
	// console.log( s.endsWith('o',5) );

	//repeat() 表示将原字符串重复N次
	// console.log( 'quan'.repeat(2) );

	//padStart() padEnd() 自动补全
	// console.log( 'quan'.padStart(6,'oo') );
	// console.log( 'quan'.padEnd(6,'oo') );
	//常见用途
	//补全提示字符串
	// console.log( '12'.padStart(10,'YYYY-MM-DD') );
	//补全指定位数
	// console.log( '12'.padStart(10,'0') );

	//模板字符串 `` ${} 嵌入字符串 append
	//所有的换行将会保留 如果不需要保留 则可以使用.trim();
	//如果需要使用` 则用\转义即可
	// console.log( `春天来了` )
	// console.log( `\`春天来了` )
	// let abc = '哼 胡说';
	// console.log( `${abc}` )

	//${} 可以使用运算，对象，函数
	// let x = 1,y = 2;
	// console.log( `${x} + ${y} == ${ x + y }` );
	// let obj = {x : 2,y : 3};
	// console.log( `${ obj.x + obj.y }` )
	// function fn(){
	// 	return 'hello quan';
	// }
	// console.log( `${fn()}` )

	// 嵌套模板
	// const tmpl = addrs =>`
	// 	<table>
	// 	${addrs.map(addr =>`
	// 		<tr><td>${addr.first}</td></tr>
	// 		<tr><td>${addr.last}</td></tr>
	// 	`).join('')}
	// 	</table>
	// `
	// const data = [
	// 	{  first:'<Jane>',last:'Bond'},
	// 	{  first:'Lars',last:'<Croft>' }
	// ]

	// console.log( tmpl(data) )

	//需要引用模板字符串本身
	//写法一
	// let str = 'return ' + '`hello ${name}`';
	// let func = new Function('name',str);
	// console.log ( func('quan') );
	//写法二
	// let str = '(name) => `hello ${name}`';
	// let func = eval.call(null,str);
	// console.log( func('quan') )
	// console.log( eval )


	//正则
	
	// console.log( /foo/.test('foo\nbar') )
	//具名组匹配
	const data = /(\d{4})-(\d{2})-(\d{2})/;

	// const matchDate = data.exec('1999-02-11');

	// const year = matchDate[1];//1999
	// const month = matchDate[2];//02
	// const day = matchDate[3];//11

	//为每一个组指定名字 es2018
	// const dataName = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

	// const nameYear = matchDate.grounp.year;//1999
	// const nameMonth = matchDate.grounp.month;//02
	// const nameDay = matchDate.grounp.day;//11

	//正则与 解构和赋值
	// let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
	
	//替换
	// let dateReplace = '2015-01-02'.replace(data, '(?\d{4})/(?\d{2})/(?\d{2})');

	// console.log( dateReplace )

	//数值的扩展
	// Number提供检测数值是否是finite(有限)，不是infinite;  Number.isFinite(),
	// console.log( Number.isFinite(15) );//true
	// console.log( Number.isFinite(NaN) );//false
	// console.log( Number.isFinite('222') );//false
	// 检测值是否为NAN
	// console.log( Number.isNaN(NaN) );//true
	// console.log( Number.isNaN(16) );//false
	// console.log( Number.isNaN('why' / 0) );//true
	//取整数或者保留小数位 Number.parseInt()/parseFloat()
	// console.log(Number.parseFloat( '12.655' ))

	//是否为整数Number.isInteger()
	// console.log( Number.isInteger( 26 ) );//true
	// console.log( Number.isInteger( 12.00 ) );//true
	// console.log( Number.isInteger( 12.35 ) );//false

	// Number.isInteger()存在误判的问题:
	// 01.由于js采用的是IEEE754标准，数值存储为64位精度格式，数值精度最多可达到53个二进制位数（一个隐藏位和52个有效位）；
	// 如果数值的精度超过这个限度，第54位及后面的位就会被丢弃
	// 例如：下面例子是因为小数的精度达到了小数点后的16个十进制位，转成二进制超过了53个二进制位，导致最后的2丢弃了
	// console.log( Number.isInteger (3.0000000000000002 ));//true
	//01.如果一个数的绝对值小于Number.MIN_VALUE(5E-324),即js能够分辨的最小值，会被自动转为0.

	//Number.EPSILON 最小误差 只要误差在范围内就认为是相等
	//例如：console.log( 0.1+0.1 == 0.3 ) //false;
	//Number.EPSILON的值是2的-52次方 如果我们的误差范围设置为2的-50次方就可以认为是相当的浮点数
	//Math.abs();取绝对值
	//Math.pow(a,b);a的b次方
	// function withErrorMargin (left,right){
	// 	return Math.abs(left - right) < Number.EPSILON*Math.pow(2,2);
	// }
	// console.log ( withErrorMargin(0.1+0.2,0.3) );

	//安全整数 Number.isSafeInteger()
	//js能表示的整数范围在-2的53次方~2的53次方（不含端点）超过无法精确显示
	// console.log( Number.isSafeInteger(1.2) );//false,整数
	// console.log( Number.isSafeInteger(null) );//false
	// console.log( Number.isSafeInteger( Number.MIN_SAFE_INTEGER - 1 ) );//flase 超出最小范围
	// console.log( Number.isSafeInteger( Number.MIN_SAFE_INTEGER ) );//true
	// console.log( Number.isSafeInteger( Number.MAX_SAFE_INTEGER  ) );//true
	// console.log( Number.isSafeInteger( Number.MAX_SAFE_INTEGER + 1 )  );//false

	//Number.isSafeInteger()实现
	// function isSafeInteger(n){
	// 	return (
	// 		typeof n === 'number' && Math.round(n) === n && Number.MIN_SAFE_INTEGER <= n && n <= Number.MAX_SAFE_INTEGER
	// 	);
	// }
	//注意：不要只验证运算结果 而是要同时验证参与运算的每一个值
	// function trusty(left,right,result){
	// 	if(
	// 		Number.isSafeInteger( left ) &&
	// 		Number.isSafeInteger( right ) &&
	// 		Number.isSafeInteger( result )
	// 	){
	// 		return result;
	// 	}
	// 	throw new RangeError('operation cannot be trusted');
	// }

	// Math.trunc();//去掉小数部分
	// console.log( Math.trunc('123.231') );//123 将字符串转成数字在去掉小数部分
	// console.log( Math.trunc( true ) );//1
	// console.log( Math.trunc( false ) );//0
	// console.log( Math.trunc( null ) );//0
	// console.log( Math.trunc( NaN ) );//NaN
	// console.log( Math.trunc( 'quan' ) );//NaN
	// console.log( Math.trunc( undefined ) );//NaN

	// //Math.trunc()；方法的实现
	// Math.trunc = Math.trunc || function(x){
	// 	return x < 0 ? Math.ceil(x) : Math.floor(x);
	// }
	
	//Math.sign();正数 负数 0 非数值转换成数值
	// console.log( Math.sign( 55 ) );//+1
	// console.log( Math.sign( -230 ) );//-1
	// console.log( Math.sign( '123' ) );//NaN
	// console.log( Math.sign( 'okkkk' ) );//NaN
	// console.log( Math.sign( undefined ) );//NaN

	//Math.cbrt();计算一个数的立方根
	// console.log ( Math.cbrt(-1) );//-1
	// console.log( Math.cbrt(8) );//2

	//Math.cbrt();//方法实现
	// Math.cbrt = Math.cbrt || function(x){
	// 	var y = Math.pow( Math.cbrt(x),1/3 );
	// 	return x < 0? -y :y;
	// }

	//Math.clz32();//返回一个数的32位二进制形式的前导0的个数
	// << 左移运算符 >> 右移运算符
	
	/* 
		运算计算的是转成二进制的数
		--这里是右移--
		例如：2 >> 1 ；//将数字2右移一位
		01.将2转成二进制 ‘11’ 
		02.右移一位 ‘10’ -- ‘1’
		03.得到的值转成十进制 ‘1’的十进制是‘1’
		注释：右移两位是 ‘0’
		--这里是左移--
		例如：2 << 3;//将数字2左移三位
		01.将2转成二进制‘10’
		02.左移三位 ‘10’ -- ‘10000’
		03.得到的值转成十进制 ‘10000’的十进制是‘16’
	*/
	// console.log( Math.clz32(9) );//28 9的二进制是1001占4位计算：32 - 4 = 28
	// console.log( Math.clz32( 1 << 2 ) );//29
	// console.log( Math.clz32( 2 >> 1 ) );//31
	// console.log( 1 << 2 );//100
	// console.log( 2 >> 1 );//1

	//Math.imul();//返回两个数以32位带符号整数形式想成的结果 正确表示精度位
	//大的数值相乘低数位的值不精确：因为js超过2的53次方的数值无法精确表示

	//Math.fround();//返回单精度浮点数形式
	//Math.hypot();//返回所有参数的平方和的平方根
	//只要有一个参数无法转为数值，就会NaN
	//例如：Math.hypot(3,4);//5,3的平方加上4的平方，等于5的平方

	//函数
	//01.默认参数
	//ES6之前
	// function log(x,y){
	// 	y = y || ' world';
	// 	console.log(x,y)
	// }

	// log('hello');
	// log('helo','world');
	// log( 'hello','' );//当第二个参数是空字符串的时候，会默认‘world’
	
	//ES6
	// function log( x,y = 'world'){
	// 	console.log( x,y );
	// }
	// log('hello');
	// log( 'hello','world' );
	// log( 'hello','' )

	//ES6函数的参数是默认声明 所以不能用let 或者 const再次声明

	//当传入参数是一个对象
	// function foo({x,y=5}){
	// 	console.log( x,y );
	// }
	// var x = 100;
	// function log(p = x+1){
	// 	console.log( p );
	// }
	// log();
	// x = 102;
	// log();