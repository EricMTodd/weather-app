import './style.css';
import storageControllers from './controllers/storageControllers';
import headerViews from './views/headerViews';
import mainViews from './views/mainViews';
import weatherControllers from './controllers/weatherControllers';

const app = (() => {
	setInterval(() => {
		console.log('Checking temperature...');
		weatherControllers.checkTemp();
	}, 300000);

	return {};
})();
