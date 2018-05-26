import redis from 'redis';
import config from '../config';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
const redisClient = redis.createClient(config.get('redis.port'), config.get('redis.host'));

export default class Redis {
	static async get(key) {
		return redisClient.getAsync(key);
	}
	static async set(key, value) {
		return redisClient.setAsync(key, value);
	}
}