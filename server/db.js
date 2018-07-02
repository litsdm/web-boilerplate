import { MongoClient } from 'mongodb';

require('dotenv').config()

const dbName = process.env.AS_ENV === 'production'
  ? 'ds125479.mlab.com:25479/tourney-prod'
  : 'ds125031.mlab.com:25031/tourney-dev';

const MONGO_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${dbName}`;

let _db;

const dataBase = {
  connectToServer: (done) => {
    MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, (err, db) => {
      _db = db;
      return done(err);
    });
  },
  get: () => _db
};

export default dataBase;
