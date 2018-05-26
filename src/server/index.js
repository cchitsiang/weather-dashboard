import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import config from './config';
import WeatherService from './services/weather.service'

function middlewares(app) {
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use(bodyParser.json());

	app.use(express.static('dist/public'));

	app.use(helmet());

	app.options('*', cors());

	app.use(morgan('dev', {
		skip(req, res) {
			return res.statusCode < 400;
		},
		stream: process.stderr
	}));

	app.use(morgan('dev', {
		skip(req, res) {
			return res.statusCode >= 400;
		},
		stream: process.stdout
	}));

}
function routes(app) {
	app.get('/health', function (req, res, next) {
		res.send('OK');
	});

	app.get('/api/weather', WeatherService.getWeather);

	app.use(function (req, res, next) {
		res.status(404).send({ status: 404, message: 'Not Found' });
	});

	const port = config.get('port');
	app.listen(port, () => {
		console.log(`App listening to port *:${port}. press ctrl + c to cancel`)
	});
}

const app = express();

middlewares(app);

routes(app);