console.log('api.js works');

const url = 'https://danielschung.github.io/covenantlove/js/data.json';
const cardContainer = document.getElementById('results').childNodes[1];

const getData = async (request) => {
	try {
		const res = await fetch(url);
		const data = await res.json();

		if (!res.ok) {
			console.log(data.description);
			return;
		}

		let num = data.sermons.length;
		
		for (let i = 0; i < num; i++) {

			let id = data.sermons[i].id;
			let passage = data.sermons[i].passage;
			let title = data.sermons[i].title;
			let speaker = data.sermons[i].speaker;
			let date = data.sermons[i].date;
			let plays = data.sermons[i].plays;
			let tags = data.sermons[i].tags;
			let time = data.sermons[i].time;

			let block = `
				<div class="card">
					<div class="top">
						<div class="speaker">${speaker}</div>
						<div class="date">${date}</div>
					</div>
					<div class="middle">
						<h2 class="title">${title}</h2>
						<h3 class="passage">${passage}</h3>
					</div>
					<div class="bottom">
						<div class="time">0:00 | ${time}</div>
						<div class="plays">${plays} plays</div>
					</div>
				</div>
			`;

			cardContainer.innerHTML += block;
		}

	} catch(error) {
		console.log(error);
	}
}

function createCards() {
	//write code to create cards after you figure out css
}

// const addPlay = {
// 	plays:1
// };

// const postData = async (name) => {
// 	try {
// 		const res = await fetch(url, {
// 			method: 'POST',
// 			header: {
// 				'Content-Type':'application/json'
// 			},
// 			body: addPlay
// 		});
// 		const data = await res.json();

// 		if (!res.ok) {
// 			console.log(data.description);
// 			return;
// 		}

// 		console.log(data);
// 	} catch(error) {
// 		console.log(error);
// 	}
// }


getData();



