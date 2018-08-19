import RxDB from 'rxdb';
import collections from '../collections/index';
import config from './config';

RxDB.plugin(require('pouchdb-adapter-asyncstorage'));

class Database {
  async init() {
    try {
      this.db = await RxDB.create({
        name: config.dbName,
        password: config.dbPassword,
        adapter: 'asyncstorage',
      });
      await collections.forEach(async (collection) => {
        await this.db.collection(collection);
      });
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  }

  async getInstance() {
    if (!this.db) {
      await this.init();
    }

    return this.db;
  }
}

const database = new Database();
export default database;
