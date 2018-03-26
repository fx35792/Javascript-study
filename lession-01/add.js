function plus(x) {
    return x + 1;
}

var square = function(x) {
    return x * x
}
window.onload = function() {
    document.getElementById('add').innerHTML = plus(2);
    document.getElementById('square').innerHTML = square(2);

    //计算（2+1）的平方
    console.log(square(plus(2)));

    //
    var a = []; //创建一个空数组
    a.push(1, 2, 3); //push()方法向数组中添加元素
    console.log(a); //打印添加后的数组
    a.reverse(); //将数组顺序反转
    console.log(a); //打印反转后的数组
}

//定义取绝对值的方法
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
console.log(abs(-4));

//阶乘的定义
function factorial(n) {
    var product = 1;
    while (n > 1) {
        product *= n;
        n--;

    }
    return product;
}
console.log(factorial(3));

//阶乘第二种算法
function factorial2(n) {
    var i, product = 1;
    for (i = 2; i <= n; i++) {
        product *= i;//第一次返回的结果是：product:2,i=3;第二次返回的结果是：product:6,i=4;第三次返回的结果是：product:24,i=5

    }
    return product
}
console.log(factorial2(5));

function Point(x,y){
	this.x=x;
	this.y=y;
}

var p = new Point(1,1);

Point.prototype.r = function(){
	return Math.sqrt(this.x*this.x+this.y*this.y);
}
console.log(p.r());






