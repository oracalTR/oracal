var money = +prompt("Бюжет Вашего магазина?", "");
var name = prompt("Название Вашего магазина?", "");
let time = 24;
let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

for (i=0; i<3; i++) {
	let a = prompt("Введите наименование товара", "");
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		mainList.shopGoods[i] = a;
	} else {
		console.log('Ошибка! Наименование не может быть пустым!');
		alert('Ошибка! Наименование не может быть пустым!');
		i--;
	}
}

/*let i = 0;
while (i < 3) {
	let a = prompt("Введите наименование товара", "");
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		mainList.shopGoods[i] = a;
		i++;
	} else {
		console.log('Ошибка! Наименование не может быть пустым!');
		alert('Ошибка! Наименование не может быть пустым!');
	}
}*/

/*let i = 0;
do {
	let a = prompt("Введите наименование товара", "");
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		mainList.shopGoods[i] = a;
		i++;
	} else {
		console.log('Ошибка! Наименование не может быть пустым!');
		alert('Ошибка! Наименование не может быть пустым!');
	}
}
while (i < 3)*/


if (time <= 0) {
	console.log('Такого просто не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать');
		} else if (time >= 20 && time <= 24 || time < 8) {
			console.log('Уже слишком поздно');
			} else if (time > 24) {
				console.log('В сутках только 24 часа')
				};


alert(mainList.budget/30);
console.log(mainList);
