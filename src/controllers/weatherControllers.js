import storageControllers from './storageControllers';

const weatherControllers = (() => {
	const apiKey = '8d9b598296f463cb05d7baea7c741c65';
	let storageObject = storageControllers.load();

	const getCityData = async () => {
		let input = document.querySelector('#search-input');

		if (!input.value) {
			return;
		}
		console.log(input.value);
		try {
			let response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${input.value.trim()}&appid=${apiKey}`
			);
			response = await response.json();
			console.log(response);
			storageObject.city = input.value;
			document.querySelector('#city-name').innerText = input.value;
			storageControllers.save(storageObject);
			input.value = '';
		} catch (err) {
			console.log(err);
		}
		return {};
	};
	return {
		getCityData,
	};
})();

export default weatherControllers;
