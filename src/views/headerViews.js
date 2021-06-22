import weatherControllers from '../controllers/weatherControllers';

const headerViews = (() => {
	const header = document.querySelector('header');
	const renderAppTitle = (() => {
		const div = document.createElement('div');
		div.id = 'app-title';
		div.innerText = 'Weatherly';
		header.appendChild(div);
	})();

	const renderSearchIcon = (() => {
		const icon = document.createElement('i');
		icon.id = 'search-icon';
		icon.classList.add('fa');
		icon.classList.add('fa-search');
		icon.addEventListener('click', (e) => {
			weatherControllers.getCityName();
		});
		header.appendChild(icon);
	})();

	const renderSearchBar = (() => {
		const input = document.createElement('input');
		input.id = 'search-input';
		input.placeholder = 'Search for a city';
		input.autocomplete = 'off';
		input.addEventListener('keypress', (e) => {
			if (e.keyCode === 13) {
				weatherControllers.getCityName();
			}
		});
		header.appendChild(input);
	})();
	return {};
})();

export default headerViews;
