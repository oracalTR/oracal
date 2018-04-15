function ajax() {
	form.addEventListener('submit', function(event) {
				event.preventDefault();
				form.appendChild(statusMessage);

				// AJAX
				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');

				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				let formData = new FormData(form);

				request.send(formData);

				request.onreadystatechange = function () {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.LOADING;

					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							statusMessage.innerHTML = message.succsess;
							//Добавляем контеет на страницу
						}
						else {
							statusMessage.innerHTML = message.failure;
						}
					}
				}
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
					//Очищаем поля ввода
				}
			});
};

module.exports = ajax;