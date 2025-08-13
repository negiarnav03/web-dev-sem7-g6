const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'chitkaraUniversityG4';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');

  // the following code examples can be pasted here...
    // const insertResult = await collection.insertMany([{
    //     name: "Priyanshu",
    //     class: "G4",
    //     rollNo: 230411 
    //    },
    //    {
    //     name: "Pratyukt",
    //     class: "G4",
    //     rollNo: 230412 
    //    },
    //    {
    //     name: "Deepak",
    //     class: "G5",
    //     rollNo: 230413 
    //    },{
    //     name: "Priyanshu",
    //     class: "G5",
    //     rollNo: 230414 
    //    },{
    //     name: "Priyanshu",
    //     class: "G6",
    //     rollNo: 230415 
    //    }
    // ]);
    // console.log('Inserted documents =>', insertResult);

    // FIND ALL
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());