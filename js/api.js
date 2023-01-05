const url = 'https://danielschung.github.io/covenantlove/js/data.json';

const getData = async (request) => {
	try {
		const res = await fetch(url);
		const data = await res.json();

		if (!res.ok) {
			console.log(data.description);
			return;
		}

		let id = data.sermons[0].id;
		let passage = data.sermons[0].passage;
		let title = data.sermons[0].title;
		let speaker = data.sermons[0].speaker;
		let date = data.sermons[0].date;
		let plays = data.sermons[0].plays;
		let tags = data.sermons[0].tags;

		console.log(passage);

		let cards = document.getElementsByClassName('card');
		let dataPoints = cards[0].children;
		// console.log(dataPoints);

		// cards[0].innerHTML = value

	} catch(error) {
		console.log(error);
	}
}

const createCards {
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



