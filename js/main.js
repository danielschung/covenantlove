console.log('works');

const url = 'https://danielschung.github.io/covenantlove/js/data.json';

function getData(name) {
	fetch(url)
		.then(res => res.json())
		.then(data => {
			console.log(data);
		});
}

getData('19931008');
