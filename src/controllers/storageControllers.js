import StorageObjectModel from '../models/storageObjectModel';

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

				const storageString = JSON.stringify(storageObject);
				localStorage.setItem('weatherly', storageString);
			} catch (err) {
				console.log(err);
			}
		}
	})();

	return {};
})();

export default storageControllers;
