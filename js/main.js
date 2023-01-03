console.log('works');

function getData() {
	fetch('https://danielschung.github.io/covenantlove/js/data.json', {
		method: 'GET'
	})
	.then((response) => response.json())
	.then((data) => console.log(data));
}

getData();

