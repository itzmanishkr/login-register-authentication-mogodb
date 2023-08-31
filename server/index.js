const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
// const router = express.router();
const Coll = require("./models/coll");



app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/mern-stack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(express.json())
app.post('/api/register', async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            dob: req.body.dob,

        })
        console.log(req.body)
        res.json({ status: 'ok' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate Email' })

    }
});
app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        
        
        if (user) {
            const token = jwt.sign({
                name: user.name,
                email: user.email,
            }, 'secret123')
            const users = await User.find({})
            Coll.vari = users;
        console.log(Coll.vari);

            return res.json({ status: 'ok', user: user })
        } else {
            return res.json({ status: 'error', user: false })
        }
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate Email' })

    }
});



   
// })
app.listen(1337, () => {
    console.log('server started at 1337')
})
