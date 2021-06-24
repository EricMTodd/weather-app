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
	};

	// renderWeatherCard();

	// setTimeout(() => {}, 500);

	return {
		renderWeatherCard,
	};
})();

export default mainViews;
