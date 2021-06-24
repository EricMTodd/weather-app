import weatherControllers from '../controllers/weatherControllers';

const mainViews = (() => {
	const main = document.querySelector('main');

	const renderWeatherCard = async () => {
		let storageObject = await JSON.parse(localStorage.weatherly);

		let card = document.createElement('div');
		card.classList.add('weather-card');
		main.appendChild(card);

		const renderCityName = (() => {
			const title = document.createElement('div');
			title.id = 'city-name';
			title.innerText = storageObject.cityName;
			card.appendChild(title);
		})();

		const renderCityTemp = (() => {
			const temp = document.createElement('div');
			temp.id = 'city-temp';
			temp.innerText = `${Math.round(
				((storageObject.currentTemps.temp - 273.15) * 9) / 5 + 32
			)} °F`;
			card.appendChild(temp);
		})();
	};

	return {
		renderWeatherCard,
	};
})();

export default mainViews;
