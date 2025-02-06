const { MongoClient } = require('mongodb');

// Connection URL

const URL = "mongodb+srv://<yourID>:<password>@nodelearning.v85hq.mongodb.net/";
const client = new MongoClient(URL);
const dbName = "hellonode";

async function main() {
    await client.connect();
    console.log("Connected to the server");
    const db = client.db(dbName);
    const collection = db.collection("user");

    const data = {
        firstName :"Aditya",
        lastName :"Bhagat",
        city :"khesar",
        phoneNo :"7070904945",
    }

    // Insert many document
    // const insertone = await collection.insertMany([data]);
    // console.log("Data inserted successfully", insertone);

    // Find a document
    // const finddata = await collection.find({}).toArray();
    // console.log("Data found", finddata);

    // Update a document
    // const updatedocs =await collection.updateOne({firstName:"Aastha"},{$set:{city:"Bilaspur"}});
    // console.log("Data updated", updatedocs);


    // Delete a document 
    const deletedata = await collection.deleteOne({firstName:"Aditya"});
    console.log("Data deleted", deletedata);
    
    const finddata = await collection.find({}).toArray();
    console.log("Data found", finddata);



    return 'done';
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
