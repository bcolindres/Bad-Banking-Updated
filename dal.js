const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
let db = null;

async function connectDB() {
    if (db) return db; // if already connected, return the db instance
    const client = new MongoClient(url, { useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected successfully to db server");
        db = client.db(dbName);
        return db;
    } catch (err) {
        console.error("Failed to connect to db server", err);
        throw err;
    }
}


// create user account using the collection.insertOne function
async function create(name, email, password) {
    try {
        const db = await connectDB();
        const collection = db.collection('users');
        const doc = { name, email, password, balance: 0 };
        await collection.insertOne(doc, { w: 1 });
        return doc;
    } catch (err) {
        throw err;
    }
}

// find user account
async function find(email) {
    try {
        const db = await connectDB();
        const customers = await db
            .collection('users')
            .find({ email: email })
            .toArray();
        return customers;
    } catch (err) {
        throw err;
    }
}

// find user account
async function findOne(email) {
    try {
        const db = await connectDB();
        const customer = await db
            .collection('users')
            .findOne({ email: email });
        return customer;
    } catch (err) {
        throw err;
    }
}

// update - deposit/withdraw amount
async function update(email, amount) {
    try {
        const db = await connectDB();
        const result = await db
            .collection('users')
            .findOneAndUpdate(
                { email: email },
                { $inc: { balance: amount } },
                { returnOriginal: false }
            );
        return result.value;
    } catch (err) {
        throw err;
    }
}

// return all users by using the collection.find method
async function all() {
    try {
        const db = await connectDB();
        const customers = await db
            .collection('users')
            .find({})
            .toArray();
        return customers;
    } catch (err) {
        throw err;
    }
}

module.exports = { create, findOne, find, update, all };
