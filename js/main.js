console.log('works');

const url = 'https://danielschung.github.io/covenantlove/js/data.json';	
// const url = 'https://reqres.in/api/users';

function getData(name) {
	fetch(url)
		.then(res => res.json())
		.then(data => {
			console.log(data.support);
		});
}

getData('19931008');
