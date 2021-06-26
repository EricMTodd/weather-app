import './style.css';
import storageControllers from './controllers/storageControllers';
import headerViews from './views/headerViews';
import mainViews from './views/mainViews';
import weatherControllers from './controllers/weatherControllers';

const app = (() => {
	setInterval(() => {
		weatherControllers.checkWeather();
	}, 900000);

	return {};
})();
