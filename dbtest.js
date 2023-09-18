import { MongoClient } from "mongodb";
import { dbConfig } from "./db-config.js";

const { url, dbName } = dbConfig;

const client = new MongoClient(url)

let personDocument = {
    name: { first: 'Alan', last: 'Turing' },
    birth: new Date(1912, 5, 23),
    death: new Date(1954, 5, 7),
    contribs: ['Turing machine', 'Turing test', 'Turingery']
};

const app = async () => {
    try {
        await client.connect()
        console.log('Connected to server')
        const db = client.db(dbName)
        const col = db.collection('people')
        await col.insertOne(personDocument)
    } catch (error) {
        console.log(error.stack)
    }
    client.close()
}

app()
