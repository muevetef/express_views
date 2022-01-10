const { MongoClient } = require('mongodb');

// Connection URL
const url = `mongodb+srv://toni:test123@cluster0.veuyq.mongodb.net/node-test?retryWrites=true&w=majority`
const client = new MongoClient(url);

// Database Name
const dbName = 'noce-tesc';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const blogs = db.collection('bloscs');
//   const findResult = await blogs.find({}).toArray();
//   console.log('Found documents =>', findResult);
const result = await blogs.insertOne({
    title: "sdfkljsdlfjkgh",
    resume: "sdfgsdfg",
    body: "dfgdfg",
    status: true
});

console.log(result)
  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
