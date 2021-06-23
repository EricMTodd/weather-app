import storageControllers from '../controllers/storageControllers';

const mainViews = (() => {
	let storageObject = storageControllers.load();

	const main = document.querySelector('main');
	const renderWeatherCard = (() => {
		let card = document.createElement('div');
		card.classList.add('weather-card');
		main.appendChild(card);

		const renderCityName = (() => {
			const title = document.createElement('div');
			title.classList.add('city-name');
			title.innerText = storageObject.city;
			card.appendChild(title);
		})();
	})();

	return {};
})();

export default mainViews;
