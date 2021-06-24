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
	return {
		getCityData,
	};
})();

export default weatherControllers;
