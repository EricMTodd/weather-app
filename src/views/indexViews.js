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
				renderTempContainer();
			});
			card.appendChild(button);
		})();

		const renderTempContainer = async () => {
			if (!document.querySelector('#temp-container')) {
				let tempContainer = document.createElement('div');
				tempContainer.classList.add('container');
				tempContainer.id = 'temp-container';
				tempContainer.innerText = `Current temp in ${
					document.querySelector('input').value
				}: ${await indexControllers.getCityTemp(
					document.querySelector('input').value
				)}° F`;
				card.insertBefore(tempContainer, document.querySelector('input'));
			} else {
				document.querySelector('input').value.trim();
				if (document.querySelector('input').value === '') {
					document.querySelector('input').value = 'Denver';
				}
				document.querySelector(
					'#temp-container'
				).innerText = `Current temp in ${
					document.querySelector('input').value
				}: ${await indexControllers.getCityTemp(
					document.querySelector('input').value
				)}° F`;
			}
		};
		renderTempContainer();
	})();

	return {};
})();

export default indexViews;
