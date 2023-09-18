import { MongoClient } from "mongodb";
import { dbConfig } from "./db-config.js";

const { url } = dbConfig;

const client = new MongoClient(url)

const app = async () => {
    try {
        await client.connect()
        console.log('Connected to server')
    } catch (error) {
        console.log(error.stack)
    }
    client.close()
}

app()
