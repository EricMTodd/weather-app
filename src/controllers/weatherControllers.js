const weatherControllers = (() => {
	const apiKey = '8d9b598296f463cb05d7baea7c741c65';

	const getCityData = async () => {
		const inputValue = document.querySelector('#search-input').value.trim()
		console.log('getCityData')
		if (inputValue === "") {
			return 
		}
		try {
			let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`)
			response = await response.json()

			const save = ((response) => {
				let storageString = JSON.stringify(response)
				localStorage.setItem('weatherly', storageString)
			})()

		} catch(err) {
			console.log(err)
		}
		return {};
	};
	return {
		getCityData,
	};
})();

export default weatherControllers;
