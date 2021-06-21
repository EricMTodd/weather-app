import headerControllers from '../controllers/headerControllers';

const headerViews = (() => {
	const header = document.querySelector('header');

	const renderTitle = (() => {
		let title = document.createElement('div');
		title.classList.add('container');
		title.id = 'title';
		title.innerText = 'Weatherly';
		header.appendChild(title);
	})();

	const renderSearchBar = (() => {
		let icon = document.createElement('i');
		icon.classList.add('material-icons');
		icon.innerText = 'search';
		icon.addEventListener('click', (e) => {
			headerControllers.getCity();
		});
		header.appendChild(icon);

		let input = document.createElement('input');
		input.id = 'city-search';
		input.type = 'text';
		input.placeholder = 'Search for a city';
		header.appendChild(input);
	})();

	const renderCityWeather = () => {};
	return {};
})();

export default headerViews;
