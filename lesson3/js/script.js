let money,
	name,
	time,
	price



function start () {
		money = +prompt("Бюжет Вашего магазина?", "");
		while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Бюжет Вашего магазина?", "");
		}

		name = prompt("Название Вашего магазина?", "").toUpperCase();
		while (name == null || name === '' || (parseInt(name)) >= 0 || (parseInt(name)) < 0 || name.length > 50) {
		name = prompt("Название Вашего магазина?", "").toUpperCase();
		}
		time = 24;
}
start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
}

function chooseGoods () {		
		for (let i=0; i<3; i++) {
			let a = prompt("Введите наименование товара", "");
			if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
				mainList.shopGoods[i] = a;
			} else {
				console.log('Ошибка! Наименование не может быть пустым!');
				alert('Ошибка! Наименование не может быть пустым!');
				i--;
			}
		}
}
chooseGoods();

function workTime(time) {
if (time <= 0) {
	console.log('Такого просто не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать');
		} else if (time >= 20 && time <= 24 || time < 8) {
			console.log('Уже слишком поздно');
			} else if (time > 24) {
				console.log('В сутках только 24 часа');
				}
}
workTime(9);

function budgetDay() {
alert(mainList.budget/30);
console.log(mainList.budget/30);
}
budgetDay();

function discYN() {
		if(mainList.discount = true) {
			price = 80;
			} else {
				price = 100;
			}
}
discYN();

console.log(price);

function naimyploet () {
	let sotr1 = prompt("Введите номер сотрудника", "");
		sotr1 = sotr1 + ' - ' + (prompt("Введите Имя сотрудника", ""))+',';
	let sotr2 = prompt("Введите номер сотрудника", "");
		sotr2 = sotr2 + ' - ' + (prompt("Введите Имя сотрудника", ""))+',';
	let sotr3 = prompt("Введите номер сотрудника", "");
	sotr3 = sotr3 + ' - ' + (prompt("Введите Имя сотрудника", ""));
	let a = sotr1 + sotr2 + sotr3;
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		mainList.employers = a;
	} else {
		console.log('Ошибка! Наименование не может быть пустым!');
		alert('Ошибка! Наименование не может быть пустым!');
			}			
}

naimyploet();
console.log(mainList);