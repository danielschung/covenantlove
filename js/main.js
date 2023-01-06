console.log('main.js works');


// ------- 01 Mobile Nav -------

function mobileNav() {
	let navButton = document.getElementById('mobile-nav');
	let links = navButton.previousElementSibling;

	if ( !$(navButton).hasClass('x') ) {
		$(navButton).addClass('x');
		$(links).fadeIn().animate({ left:'0' }, '200ms');
	} else {
		$(navButton).removeClass('x');
		$(links).fadeIn().animate({ left:'100vw' }, '200ms');
	}
}


// ------- 02 Search -------
const searchInput = document.getElementById('search');

// search query
$(searchInput).keypress(function(event){
	if( event.keyCode === 13) {
		searchInput.blur();
		let value = searchInput.value;
		console.log(value + ' search queried...');
	}
})


