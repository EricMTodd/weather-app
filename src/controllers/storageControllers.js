const storageControllers = (() => {
	let storageObject;
	const instantiateLocalStorage = (() => {
		if (!localStorage.weatherly) {
			let storageString = JSON.stringify({ city: 'Denver' });
			localStorage.setItem('weatherly', storageString);
		}
		storageObject = JSON.parse(localStorage.weatherly);
	})();

	const load = () => {
		return storageObject;
	};

	const save = (data) => {
		let storageString = JSON.stringify(data);
		localStorage.setItem('weatherly', storageString);
		console.log(localStorage);
	};
	return {
		load,
		save,
	};
})();

export default storageControllers;
