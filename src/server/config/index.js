import convict from 'convict';

const config = convict({
	env: {
		doc: "The application environment.",
		format: ["production", "development", "test"],
		default: "development",
		env: "NODE_ENV"
	},
	port: {
		doc: "The port to bind.",
		format: "port",
		default: 8080,
		env: "PORT",
		arg: "port"
	},
	redis: {
		host: {
			doc: "Redis host name/IP",
			format: '*',
			default: '127.0.0.1',
			env: "REDIS_HOST"
		},
		port: {
			doc: "Redis port",
			default: 6379,
			env: "REDIS_PORT"
		}
	}
});

export default config.validate({ allowed: 'strict' });