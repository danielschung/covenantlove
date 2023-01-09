console.log('filter.js works');

const categories = [ 
	'abuse','alcohol','anointing','assurance','authority','bible','blessings','character','christian life','church','committment','community','compromise','conflicts','core values','counseling','cross','current issues','dating','depression','discernment','discipleship','discouragement','dreams','easter','end times','evangelism','faith','faithfulness','family','fasting','fear','first love','forgiveness','freedom','friendship','future','Gods will','good friday','gospel','grace','gratitude','growth','guidance','habits','happiness','hardships','healing','heart motives','hell','Holy Spirit','humility','hunger','j-gen','joy','justice','justification','leadership','lock-in','loneliness','love','marriage','maturity','meditation','mentoring','metoo','missions','money','obedience','parenting','passover','perseverance','planning','politics','pornography','prayer','pride','provision','purpose','quiet time','racism','reconciliation','repentance','restoration','resurrection','revenge','revival','salvation','servanthood','serving','sex','sin','social justice','sovereignty','spiritual gifts','spiritual warfare','stewardship','temptation','thanksgiving','training','tribulation','unity','victim','victory','vision','word','worship'
]

const series = ['Romans Series', 'John Series']


// Populate Categories Container

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

// Elements

function init(filter) {
	let dropdown = document.getElementById(`${filter}-dropdown`);
	let button = document.querySelector(`nav .${filter}`);
	let backdrop = document.querySelector('div.black');

	button.addEventListener('click', function(e) {
		e.preventDefault();
		if ( !$(dropdown).hasClass('active') ) {
			$(backdrop).fadeIn(300);
			$(button).addClass('active');
			$(dropdown).addClass('active').animate({ top:'0' }, '200ms');
		} else {
			$(backdrop).fadeOut(300);
			$(button).removeClass('active');
			$(dropdown).removeClass('active').animate({ top:'-70%' }, '200ms');
		}

		backdrop.addEventListener('click', function() {
			$(backdrop).fadeOut(300);
			$(button).removeClass('active');
			$(dropdown).removeClass('active').animate({ top:'-70%' }, '200ms');
		})
	})
}

init('series');
init('categories');
init('year');










