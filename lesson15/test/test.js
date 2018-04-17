
// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
		let result = a + b > 10;
		return result;
}

sum(10,2);

let prsum = require('chai').assert

describe('sum', function () {

	it('Получаем результат', function(){
	prsum.typeOf(sum(10,2), 'boolean');
	
	});

});

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

let assert = require('chai').assert

describe('num', function() {
	assert.equal(num, 5);
});

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

let preach = require('chai').assert

describe('newArr', function() {
	it('Получаем результат...', function(){
		preach.typeOf(newArr, 'number');
		preach.lengthOf(newArr, 4);
	})

})