console.log('filter.js works');

const filters = ['series','categories','year']

const categories = [ 
	'abuse','alcohol','anointing','assurance','authority','bible','blessings','character','christian life','church','committment','community','compromise','conflicts','core values','counseling','cross','current issues','dating','depression','discernment','discipleship','discouragement','dreams','easter','end times','evangelism','faith','faithfulness','family','fasting','fear','first love','forgiveness','freedom','friendship','future','Gods will','good friday','gospel','grace','gratitude','growth','guidance','habits','happiness','hardships','healing','heart motives','hell','Holy Spirit','humility','hunger','j-gen','joy','justice','justification','leadership','lock-in','loneliness','love','marriage','maturity','meditation','mentoring','metoo','missions','money','obedience','parenting','passover','perseverance','planning','politics','pornography','prayer','pride','provision','purpose','quiet time','racism','reconciliation','repentance','restoration','resurrection','revenge','revival','salvation','servanthood','serving','sex','sin','social justice','sovereignty','spiritual gifts','spiritual warfare','stewardship','temptation','thanksgiving','training','tribulation','unity','victim','victory','vision','word','worship'
]

const series = ['Romans Series','John Series']

const years = [
	'1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2013','2014','2015','2016','2017','2018','2019'
]


// Populate Categories Container
function populateCategoriesDesktop() {
	const categoriesDropdown = document.getElementById('categories-dropdown');
	for (let i = 0; i < categories.length; i++) {
		let block = `
			<div class="checkbox">
				<input type="checkbox" name="${categories[i]}" id="${categories[i]}" value="${categories[i]}">
				<label for="${categories[i]}">${categories[i]}</label>
			</div>
		`;
		categoriesDropdown.innerHTML += block;
	}
}

function populateCategoriesMobile() {

}


// Populate Year Container
function populateYearsDesktop() {
	const yearDropdown = document.getElementById('year-dropdown');
	for (let i = 0; i < years.length; i++) {
		let block = `
			<a href="" class="year">${years[i]}</a>
		`;
		yearDropdown.innerHTML += block;
	}
}


// Desktop and Mobile Filters Functions

function desktopFilters() {
	let dropdowns = document.getElementsByClassName('dropdown');
	let backdrop = document.querySelector('div.overlay');
	let buttons = document.querySelectorAll('nav .container .filter');

	for (let b = 0; b < buttons.length; b++) {
		buttons[b].onclick = function(e) {
			e.preventDefault();
			let string = this.className;
			string = string.replace('filter','');
			string = string.replace('active','');
			string = string.replace(' ','');
			string = string.replace(' ','');
			let dropdown = $(`#${string}-dropdown`);

			const off = () => {
				let c = 0;
				while ( c < buttons.length ) {
					$(dropdowns[c]).removeClass('active').animate({ top:'-100%' }, '100ms');
					$(buttons[c]).removeClass('active');
					c++;
				}
			}

			const on = () => {
				off();
				$(this).addClass('active');
				dropdown.animate({ top:'0' }, '100ms').addClass('active');
			}

			if ( $(this).hasClass('active') ) {
				off();
				$(backdrop).fadeOut(300);
			} else {
				on();
				$(backdrop).fadeIn(300);
				$(backdrop).click( function() {
					off();
					$(backdrop).fadeOut(300);
				})
			}
		}; 
	}
}

function mobileFilters(filter) {

}


// if screen is desktop, activate desktop. if mobile, activate mobile

if (window.innerWidth < 1200) {
	// Mobile

} else {
	// Desktop
	populateCategoriesDesktop();
	populateYearsDesktop();
	desktopFilters();
}











