const express = require('express');
const UserModel = require('../models/user.model');
const cors = require('cors');

const app = express();
const port = 8080;

// middlewares
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Request type ${req.method}`);
    console.log(req.body);
    next();

})

// requisições
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello World</h1>");
})

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).send(users);

    }
    catch(error){
        return res.status(500).send(error.message);
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id)
        res.status(200).send(user)

    } catch (error) {
        return res.status(500).send(error.message);
    }
})

app.post('/users', async (req, res) => {
    try{
        const user = await UserModel.create(req.body);
        res.status(201).send(user);

    } catch(error){
        res.status(500).send(error.message);
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);
        res.status(200).send("User: " + user.firstName + " deleted")

    } catch (error) {
        return res.status(500).send(error.message)
    }
})

app.listen(port, () => {
    console.log(`Server is runing at port ${port}`)
})