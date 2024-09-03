import { MongoClient } from 'mongodb';

export const connect = async (ctx) => {
  const client = new MongoClient(ctx.env.mongo.url);
  const db = client.connect();
  ctx.dbs.mongo = {
    client,
    db,
  };
};

export const disconnect = async (ctx) => {
  ctx.dbs.client.close();
};
