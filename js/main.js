console.log('main.js works');


// ------- 01 Mobile Nav -------

document.getElementById('mobile-nav').onclick = function() {
	mobileNav();
}

function mobileNav() {
	let navButton = document.getElementById('mobile-nav');
	let screen = document.getElementById('mobile-filter-screen');
	let backdrop = document.querySelector('div.overlay');
	let html = document.querySelector('html');
	let close = document.querySelector('.close');

	const on = () => {
		$(backdrop).fadeIn(300);
		$(screen).fadeIn().animate({ bottom:'0' }, '300ms');
		$(html).css({ overflow:'hidden' });
	}

	const off = () => {
		$(backdrop).fadeOut(300);
		$(screen).fadeIn().animate({ bottom:'-100%' }, '300ms');
		$(html).css({ overflow:'visible' });
	}

	on();

	backdrop.onclick = function() {
		off();
	}

	close.onclick = function() {
		off();
	}
}

// ------- 02 Filters -------


// ------- 03 Search -------
const searchInput = document.getElementById('search');

// search query
$(searchInput).keypress(function(event){
	if( event.keyCode === 13) {
		searchInput.blur();
		let value = searchInput.value;
		console.log(value + ' search queried...');
	}
})


