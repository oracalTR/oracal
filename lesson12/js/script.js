$(document).ready(function() {
	let tourBtn = document.getElementsByClassName('main_btn')[0],
	    tourCons = document.getElementsByClassName('main_btn')[1],
	    overlay = document.getElementsByClassName('overlay')[0],
	    modal = document.getElementsByClassName('modal')[0],
	    closeBtn = document.getElementsByClassName('close')[0],
	    raspTur = document.getElementsByTagName('li')[1];
	console.log(tourBtn);
	console.log(tourCons);
	console.log(overlay);
	console.log(modal);
	console.log(closeBtn);
	console.log(raspTur);

	tourBtn.addEventListener('click', function() {
		tourBtn.classList.add('main_btna');
		tourCons.classList.remove('main_btna');
		/*$('.overlay').css('opacity',0.4).hover(function() {
			$(this).fadeTo(350,0.7);
        },
        function() {
			$(this).fadeTo(350,0.7);
        });*/
        $('.overlay').animate({opacity: "toggle"}, 350);
		$('.modal').animate({height: 'toggle'}, 350);
        overlay.style.display = 'block';
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';

	});
	tourCons.addEventListener('click', function() {
		tourCons.classList.add('main_btna');
		tourBtn.classList.remove('main_btna');
		$('.overlay').animate({opacity: "toggle"}, 350);
		$('.modal').animate({height: 'toggle'}, 350);
        overlay.style.display = 'block';
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	raspTur.addEventListener('click', function() {
		alert('привет');
		$('.overlay').animate({opacity: "toggle"}, 350);
		// $('.modal').animate({height: 'toggle'}, 350);
		$('.modal').slideUp();
        overlay.style.display = 'block';
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	closeBtn.addEventListener('click', function(){
		// $('.modal').slideDown({opacity: 'toggle'}, 350);
		$('.modal').slideDown();
        modal.style.display = 'none';
        overlay.style.display = 'none';
        tourBtn.classList.remove('main_btna');
        tourCons.classList.remove('main_btna');
        document.body.style.overflow = '';

	});

});
