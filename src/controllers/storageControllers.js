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

	const save = () => {
		console.log('save');
	};
	return {
		load,
	};
})();

export default storageControllers;
