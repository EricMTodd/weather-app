import mainViews from '../views/mainViews';

const headerControllers = (() => {
	const apiKey = '8d9b598296f463cb05d7baea7c741c65';

	const fetchWeatherData = async (data) => {
		console.log(data.city);
		try {
			let response = await fetch(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly,alerts&appid=${apiKey}`
			);
			response = await response.json();
			console.log(response);
		} catch (err) {}
	};

	const fetchCityData = async (city) => {
		try {
			let response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
			);
			response = await response.json();
			let data = {
				city: response.name,
				coord: response.coord,
			};
			fetchWeatherData(data);
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
