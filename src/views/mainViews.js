const mainViews = (() => {
	const main = document.querySelector('main');

	const renderWeatherCard = () => {
		let storageObject = JSON.parse(localStorage.weatherly);

		let card = document.createElement('div');
		card.classList.add('weather-card');
		main.appendChild(card);

		const renderCityName = (() => {
			const title = document.createElement('div');
			title.id = 'city-name';
			title.innerText = storageObject.cityName;
			card.appendChild(title);
		})();
	};

	setTimeout(() => {
		renderWeatherCard();
	}, 500);

	return {
		renderWeatherCard,
	};
})();

export default mainViews;
