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
	let str = '(name) => `hello ${name}`';
	let func = eval.call(null,str);
	console.log( func('quan') )
	console.log( eval )
	666
