
let age = document.getElementById('age'),
	surname = prompt("Введите Вашe Фамилию", ""),
	name = prompt("Введите Вашe Имя", "");
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
}

showUser(surname, name);