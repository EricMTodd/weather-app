const storageControllers = (() => {
	const apiKey = '8d9b598296f463cb05d7baea7c741c65';

	let storageObject;

	const load = () => {
		return JSON.parse(localStorage.weatherly)
	}

	const instantiateLocalStorage = (async () => {
		if (!localStorage.weatherly) {
			try {
				let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${apiKey}`);
				response = await response.json()
				let storageString = JSON.stringify(response)
				await localStorage.setItem('weatherly', storageString)
			} catch (err) {
				console.log(err)
			}
		}
		console.log(localStorage)
	})();


	return {
		load,
	};
})();

export default storageControllers;
