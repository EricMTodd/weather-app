const mainViews = (() => {
	const renderCityWeather = (city, lon, lat) => {
		console.log(`City: ${city},\nLongitute: ${lon},\nLatitude: ${lat}`);
	};
	return {
		renderCityWeather,
	};
})();

export default mainViews;
