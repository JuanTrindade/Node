const express = require('express');
const UserModel = require('../models/user.model');

const app = express();
const port = 8080;

app.use(express.json())

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send("<h1>Hello World</h1>")
})

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.status(200).send(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
    res.status(200).json(users)
})

app.post('/users', async (req, res) => {
    try{
        const user = await UserModel.create(req.body)

        res.status(201).json(user);
    } catch(error){
        res.status(500).send(error.message)
    }
})

app.listen(port, () => {
    console.log(`Server is runing at port ${port}`)
})