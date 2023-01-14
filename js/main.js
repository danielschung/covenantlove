console.log('main.js works');


// ------- 01 Mobile Nav -------

function mobileNav() {
	let navButton = document.getElementById('mobile-nav');
	let screen = document.getElementById('mobile-filter-screen');
	let backdrop = document.querySelector('div.overlay');

	if ( !$(navButton).hasClass('x') ) {
		$(navButton).addClass('x');
		$(backdrop).fadeIn(300);
		$(screen).fadeIn().animate({ bottom:'0' }, '300ms');
	} else {
		$(navButton).removeClass('x');
		$(backdrop).fadeOut(300);
		$(screen).fadeIn().animate({ bottom:'-100vw' }, '300ms');
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


