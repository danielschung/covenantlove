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
						<div class="left">
							<div class="time">${time}</div>
							<div class="plays">${plays} plays</div>
						</div>	
						<div class="right"></div>
					</div>
				</div>
			`;

			cardContainer.innerHTML += block;

			console.log(tags[0]);

			for (let t = 0; t < tags.length; t++) {

				let tagContainer = cardContainer.childNodes[1].childNodes[5].childNodes[3];
				let tag = tags[t];

				// console.log(tag[0]);

				let tagBlock = `
					<div class="tag">${tag}</div>
				`;

				tagContainer.innerHTML += tagBlock;
			};
		}

	} catch(error) {
		console.log(error);
	}
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



