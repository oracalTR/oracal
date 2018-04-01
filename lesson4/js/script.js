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
	discount: true,
	chooseGoods: function chooseGoods () {		
		for (let i=0; i<3; i++) {
			let a = prompt("Введите наименование товара", "");
			/*if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 && (parseInt(a)) === 'string') {
				mainList.shopGoods[i] = a;*/
				while (a == null || a === '' || (parseInt(a)) >= 0 || (parseInt(a)) < 0 || name.length > 50) {
						console.log('Ошибка! Наименование не может быть пустым!');
						alert('Ошибка! Наименование не может быть пустым!');
						a = prompt("Введите наименование товара?", "");
						}
						mainList.shopGoods[i] = a;
				}
				/*mainList.shopGoods.push(prompt("Хотите добавить еще", ""));*/
				mainList.shopGoods.sort();
		},
	workTime: function workTime(time) {
	if (time <= 0) {
		console.log('Такого просто не может быть');
		} else if (time > 8 && time < 20) {
			console.log('Время работать');
			} else if (time >= 20 && time <= 24 || time < 8) {
				console.log('Уже слишком поздно');
				} else if (time > 24) {
					console.log('В сутках только 24 часа');
					}
		},
	budgetDay: function budgetDay() {
		alert(mainList.budget/30);
		console.log(mainList.budget/30);
		},
	discYN: function discYN() {
		if(mainList.discount == true) {
			price = 80;
			} else {
				price = 100;
			}
		},
	naimyploet: function naimyploet () {
		let sotr1 = prompt("Введите номер сотрудника1", "");
			sotr1 = sotr1 + ' - ' + (prompt("Введите Имя сотрудника1", ""))+',';
		let sotr2 = prompt("Введите номер сотрудника2", "");
			sotr2 = sotr2 + ' - ' + (prompt("Введите Имя сотрудника2", ""))+',';
		let sotr3 = prompt("Введите номер сотрудника3", "");
		sotr3 = sotr3 + ' - ' + (prompt("Введите Имя сотрудника3", ""));
		let a = sotr1 + sotr2 + sotr3;
		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
			mainList.employers = a;
		} else {
			console.log('Ошибка! Наименование не может быть пустым!');
			alert('Ошибка! Наименование не может быть пустым!');
				}			
		}
}



/*for (let key in mainList) {
	alert('Наш магазин включает в себя: ' + key + ' Имеет значение: ' + mainList[key]);
}

mainList.shopGoods.forEach(function (item) {
 alert("У нас вы можете купить: " + item)
})*/

console.log(mainList);