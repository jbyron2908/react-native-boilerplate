import RxDB, { QueryChangeDetector } from 'rxdb';
import collections from '../collections/index';

QueryChangeDetector.enable();
QueryChangeDetector.enableDebugging();

RxDB.plugin(require('pouchdb-adapter-asyncstorage'));

class Database {
  async init() {
    try {
      this.db = await RxDB.create({
        name: 'myFinanceDB',
        adapter: 'asyncstorage',
        password: 'myFinanceDBPassword',
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
