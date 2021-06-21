import mainViews from '../views/mainViews';

const headerControllers = (() => {
	const apiKey = '8d9b598296f463cb05d7baea7c741c65';

	const fetchCityData = async (city) => {
		try {
			let response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
			);
			response = await response.json();
			console.log(response);
			mainViews.renderCityWeather(city, response.coord.lon, response.coord.lat);
		} catch (err) {
			console.log(err);
		}
	};

	const getCity = () => {
		if (!document.querySelector('#city-search').value) {
			return alert('Please enter a city name.');
		}
		fetchCityData(document.querySelector('#city-search').value);
		document.querySelector('#city-search').value = '';
	};

	return {
		getCity,
	};
})();

export default headerControllers;
