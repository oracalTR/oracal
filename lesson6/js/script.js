let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],
	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');
console.log(discount_value);

let money,
	price

open.addEventListener('click', () => {
	money = +prompt("Бюжет Вашего магазина?", "");
		while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Бюжет Вашего магазина?", "");
		}
		budget_value.textContent = money;

		name = prompt("Название Вашего магазина?", "").toUpperCase();
		while (name == null || name === '' || (parseInt(name)) >= 0 || (parseInt(name)) < 0 || name.length > 50) {
		name = prompt("Название Вашего магазина?", "").toUpperCase();
		}
		name_value.textContent = name;
});

goods_btn.addEventListener('click', () => {
	for (let i=0; i<goods_item.length; i++) {
			let a = goods_item[i].value
				while ((parseInt(a)) >= 0 || (parseInt(a)) < 0 || name.length > 50) {
						console.log('Ошибка! Наименование не может быть пустым!');
						/*alert('Ошибка! Наименование не может быть пустым!');*/
						/*a = prompt("Введите наименование товара?", "");*/
						}
						mainList.shopGoods[i] = a;
						goods_value.textContent = mainList.shopGoods;
				}
				mainList.shopGoods.sort();

});

choose_item.addEventListener('change', () => {
	let items = choose_item.value;

	if(isNaN(items) && items != '') {
	mainList.shopItems = items.split(',');
	mainList.shopItems.sort();
	items_value.textContent = mainList.shopItems;
	}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 8) {
		console.log('Такого просто не может быть');
		mainList.open = false;
		} else if (time > 7 && time < 20) {
			console.log('Время работать');
			mainList.open = true;
			} else if (time >= 20 && time <= 24 || time < 8) {
				console.log('Уже слишком поздно');
				mainList.open = false;
				} else if (time > 24) {
					console.log('В сутках только 24 часа');
					mainList.open = false;
					}
	if(mainList.open == true) {
		isopen_value.style.backgroundColor = 'green';		
	} else {
		isopen_value.style.backgroundColor = 'red';		
	}

});

budget_btn.addEventListener('click', () => {
	count_budget_value.value = money / 30;
	console.log(money / 30);
});

employers_btn.addEventListener('click', () => {
		for (let i = 0; i < hire_employers_item.length; i++) {
			let name = hire_employers_item[i].value;
			mainList.employers[i] = name;
			employers_value.textContent += mainList.employers[i] + ', ';
		}
});

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: []
}
console.log(mainList);