import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_URI as string;

let client: MongoClient | null = null;

export async function connectToDatabase () {
  // Creating a client connect if doesn't exist
  if (!client) {
    const conection = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true
      },
      timeoutMS: 10000,
      maxPoolSize: 5,
    });
    client = conection;
    await client.connect();
  } 
  const db = client.db('luna-news');
  const newsCollection = db.collection('news');
  
  return newsCollection;
}

