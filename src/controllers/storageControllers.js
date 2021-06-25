import StorageObjectModel from '../models/storageObjectModel';
import mainViews from '../views/mainViews';

const storageControllers = (() => {
	const apiKey = '8d9b598296f463cb05d7baea7c741c65';

	const instantiateLocalStorage = (async () => {
		if (!localStorage.weatherly) {
			try {
				let response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${apiKey}`
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
		} else {
			try {
				const storageObject = JSON.parse(localStorage.weatherly);

				let response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${storageObject.cityName}&appid=${apiKey}`
				);
				response = await response.json();

				const newStorageObject = new StorageObjectModel(
					response.name,
					response.coord,
					response.weather[0],
					response.main
				);

				const storageString = await JSON.stringify(newStorageObject);
				await localStorage.setItem('weatherly', storageString);
			} catch (err) {
				console.log(err);
			}
		}
		mainViews.renderWeatherCard();
	})();

	return {};
})();

export default storageControllers;
