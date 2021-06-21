const mainViews = (() => {
	const main = document.querySelector('main');

	const renderWeatherInfoCard = (response) => {
		let card = document.createElement('div');
		card.classList.add('card');
		main.appendChild(card);

		const renderCity = (() => {
			let div = document.createElement('div');
			div.classList.add('city-container');
			div.innerText = response.name;
			card.appendChild(div);
		})();

		const renderTemperature = (() => {
			let div = document.createElement('div');
			div.classList.add('temperature-container');
			div.innerText = `${
				Math.round((response.main.temp - 273.15) * 9) / 5 + 32
			} F°`;
			card.appendChild(div);
		})();
	};

	const renderCityWeather = (response) => {
		renderWeatherInfoCard(response);
	};
	return {
		renderCityWeather,
	};
})();

export default mainViews;
