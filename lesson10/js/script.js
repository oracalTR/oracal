window.addEventListener('DOMContentLoaded', function () {
	class Options {
		constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;

			}
		crateDiv() {

			let div = document.body.createElement('div');
			div.innerHTML = 'Привет мир';
			}	
		}

let newClass = new Options(100, 100, 'red', 12, 'left')

console.log(newClass);
			

});