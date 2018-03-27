var budget = +prompt("Бюжет Вашего магазина?", "");
var nameMagazin = prompt("Название Вашего магазина?", "");
let mainList = {
	budget,
	nameMagazin,
	open: "Открыто",
		shopGoods: [tovar1 = prompt("Введите наименование товара №1", ""), tovar2 = prompt("Введите наименование товара №2", ""), tovar3 = prompt("Введите наименование товара №3", "")],
		employers: {
		sotr1: "Павел",
		sotr2: "Иван",
		sotr3: "Николай"
				}
};
/*var budden = (budget/30);*/
alert(budget/30);
/*console.log(budget);
console.log(nameMagazin);
console.log(open);
console.log(nameMagazin);*/
console.log(mainList);
