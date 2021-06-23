import storage from '../controllers/storageControllers'

const mainViews = (() => {
	const main = document.querySelector('main');

	const renderWeatherCard = () => {
		let storageObject = storage.load()
		let card = document.createElement('div');
		card.classList.add('weather-card');
		main.appendChild(card);

		const renderCityName = (() => {
			const title = document.createElement('div');
			title.id = 'city-name';
			title.innerText = storageObject.name;
			card.appendChild(title);
		})();
	};

	setTimeout(() => {
		renderWeatherCard()

	}, 500)

	return {};
})();

export default mainViews;
