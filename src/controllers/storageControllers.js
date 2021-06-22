const storageControllers = (() => {
	const checkStorageStatus = (() => {
		if (!localStorage.weatherly) {
			let storageObject = { city: 'Denver' };
			let storageString = JSON.stringify(storageObject);
			localStorage.setItem('weatherly', storageString);
		}
		console.log(localStorage);
	})();
	return {};
})();

export default storageControllers;
