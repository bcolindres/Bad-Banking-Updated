const express = require('express');
const cors = require('cors');
const dal = require('./dal.js');

const app = express();
app.use(express.static('public'));
app.use(cors());

const port = 3000;
app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});

// create user account
app.get('/account/create/:name/:email/:password', async (req, res) => {
    try {
        const users = await dal.find(req.params.email);
        if (users.length > 0) {
            console.log('User already exists');
            return res.status(400).send('User already exists');
        }
        const user = await dal.create(req.params.name, req.params.email, req.params.password);
        console.log(user);
        res.status(201).send(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// login user
app.get('/account/login/:email/:password', async (req, res) => {
    try {
        const users = await dal.find(req.params.email);
        if (users.length === 0) {
            return res.status(400).send('Login failed: user not found');
        }
        const user = users[0];
        if (user.password === req.params.password) {
            res.status(200).send(user);
        } else {
            res.status(400).send('Login failed: wrong password');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// find user account
app.get('/account/find/:email', async (req, res) => {
    try {
        const users = await dal.find(req.params.email);
        console.log(users);
        res.status(200).send(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// find one user by email - alternative to find
app.get('/account/findOne/:email', async (req, res) => {
    try {
        const user = await dal.findOne(req.params.email);
        console.log(user);
        res.status(200).send(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// update - deposit/withdraw amount
app.get('/account/update/:email/:amount', async (req, res) => {
    try {
        const amount = Number(req.params.amount);
        const response = await dal.update(req.params.email, amount);
        console.log(response);
        res.status(200).send(response);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// all accounts
app.get('/account/all', async (req, res) => {
    try {
        const docs = await dal.all();
        console.log(docs);
        res.status(200).send(docs);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
