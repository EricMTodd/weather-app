const indexControllers = (() => {
	const apiKey = '8d9b598296f463cb05d7baea7c741c65';

	const getCityTemp = async (city) => {
		try {
			const str = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

			let response = await fetch(str);
			let data = await response.json();
			return data.main.temp;
		} catch (err) {
			console.log(`Failure to fetch: ${err}`);
			alert(`${city} does not exist!`);
			window.location.reload();
		}
	};

	return {
		getCityTemp,
	};
})();

export default indexControllers;
