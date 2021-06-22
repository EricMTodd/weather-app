const storageControllers = (() => {
	const checkStorageStatus = (() => {
		if (!localStorage.weatherly) {
			localStorage.setItem('weatherly', '');
		}
		console.log(localStorage);
	})();
	return {};
})();

export default storageControllers;
