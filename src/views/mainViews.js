import weatherControllers from '../controllers/weatherControllers';

const mainViews = (() => {
	const main = document.querySelector('main');

	const convertKelvinToFarenheit = (k) => {
		return Math.round(((k - 273.15) * 9) / 5 + 32);
	};

	const renderWeatherCard = async () => {
		let storageObject = await JSON.parse(localStorage.weatherly);

		const icon = storageObject.currentWeather.icon;
		const openWeatherMapIconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

		let card = document.createElement('div');
		card.classList.add('weather-card');
		main.appendChild(card);

		const renderCityName = (() => {
			const title = document.createElement('div');
			title.id = 'city-name';
			title.innerText = storageObject.cityName;
			card.appendChild(title);
		})();

		const renderWeatherIcon = (() => {
			const img = document.createElement('img');
			img.id = 'icon-container';
			img.src = openWeatherMapIconUrl;
			card.appendChild(img);
		})();

		const renderCityTemp = (() => {
			const temp = document.createElement('div');
			temp.id = 'current-temp';
			temp.innerText = `Currently: ${convertKelvinToFarenheit(
				storageObject.currentTemps.temp
			)} °F`;
			card.appendChild(temp);
		})();

		const renderDailyHigh = (() => {
			const high = document.createElement('div');
			high.id = 'daily-high';
			high.innerText = `High: ${convertKelvinToFarenheit(
				storageObject.currentTemps.temp_max
			)} °F`;
			card.appendChild(high);
		})();

		const renderDailyLow = (() => {
			const low = document.createElement('div');
			low.id = 'daily-low';
			low.innerText = `Low: ${convertKelvinToFarenheit(
				storageObject.currentTemps.temp_min
			)} °F`;
			card.appendChild(low);
		})();
	};

	return {
		renderWeatherCard,
	};
})();

export default mainViews;
