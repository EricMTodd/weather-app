import mainViews from '../views/mainViews';
import StorageObjectModel from '../models/storageObjectModel';

const weatherControllers = (() => {
	const apiKey = '8d9b598296f463cb05d7baea7c741c65';

	const getCityData = async () => {
		const inputValue = document.querySelector('#search-input').value.trim();

		if (inputValue === '') {
			return;
		}

		try {
			let response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`
			);
			response = await response.json();

			const storageObject = new StorageObjectModel(
				response.name,
				response.coord,
				response.weather[0],
				response.main
			);

			const storageString = await JSON.stringify(storageObject);
			await localStorage.setItem('weatherly', storageString);
		} catch (err) {
			console.log(err);
		}
		document.querySelector('.weather-card').remove();
		mainViews.renderWeatherCard();
		document.querySelector('#search-input').value = '';
	};

	const checkTemp = async () => {
		try {
		} catch (err) {
			console.log(err);
		}
		let storageObject = JSON.parse(localStorage.weatherly);
		let response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${storageObject.cityName}&appid=${apiKey}`
		);

		response = await response.json();

		if (storageObject.currentTemps.temp !== response.main.temp) {
			console.log('Updating temperature...');

			const storageObject = new StorageObjectModel(
				response.name,
				response.coord,
				response.weather[0],
				response.main
			);

			const storageString = await JSON.stringify(storageObject);
			await localStorage.setItem('weatherly', storageString);

			document.querySelector('.weather-card').remove();
			return mainViews.renderWeatherCard();
		}
		return console.log('No changes in temperature.');
	};

	return {
		getCityData,
		checkTemp,
	};
})();

export default weatherControllers;
