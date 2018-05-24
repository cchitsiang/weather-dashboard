import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

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

	app.use(function (req, res, next) {
		res.status(404).send({ status: 404, message: 'Not Found' });
	});
}
function routes(app) {
	app.get('/health', function (req, res, next) {
		res.send('OK');
	});

	const port = 8080;
	app.listen(port, () => {
		console.log(`App listening to port *:${port}. press ctrl + c to cancel`)
	});
}

const app = express();

middlewares(app);

routes(app);