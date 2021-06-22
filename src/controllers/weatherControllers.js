import storageControllers from './storageControllers';

const weatherControllers = (() => {
	let storageObject = storageControllers.load();
	const getCityName = () => {
		let input = document.querySelector('#search-input');
		if (!input.value) {
			return console.log(storageObject.city);
		}
		console.log('getCityName');
	};
	return {
		getCityName,
	};
})();

export default weatherControllers;
