import './style.css';
import storageControllers from './controllers/storageControllers';
import headerViews from './views/headerViews';
import mainViews from './views/mainViews';
import weatherControllers from './controllers/weatherControllers';

const app = (() => {
	// setInterval(() => {
	// 	window.location.reload();
	// }, 10000);

	// const minuteInMillies = 60000;

	setInterval(() => {
		weatherControllers.checkTemp();
	}, 300000);

	return {};
})();