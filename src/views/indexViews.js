import indexControllers from '../controllers/indexControllers';

const indexViews = (async () => {
	const content = document.querySelector('#content');
	const renderCard = (() => {
		const card = document.createElement('div');
		card.classList.add('card');
		content.appendChild(card);

		const renderInput = (() => {
			let input = document.createElement('input');
			input.type = 'text';
			input.value = 'Denver';
			card.appendChild(input);
		})();

		const renderButton = (async () => {
			let button = document.createElement('button');
			button.innerText = 'Fetch';
			button.addEventListener('click', async (e) => {
				document.querySelector(
					'#temp-container'
				).innerText = `Current temp in ${
					document.querySelector('input').value
				}: ${await indexControllers.getCityTemp(
					document.querySelector('input').value
				)}° F`;
			});
			card.appendChild(button);
		})();

		const renderTempContainer = (async () => {
			let tempContainer = document.createElement('div');
			tempContainer.classList.add('container');
			tempContainer.id = 'temp-container';
			tempContainer.innerText = `Current temp in ${
				document.querySelector('input').value
			}: ${await indexControllers.getCityTemp(
				document.querySelector('input').value
			)}° F`;
			card.insertBefore(tempContainer, document.querySelector('input'));
		})();
	})();

	return {};
})();

export default indexViews;
