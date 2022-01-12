const mongoose = require('mongoose')

const user = "toni"
const pass = "test123"
const uri = `mongodb+srv://${user}:${pass}@cluster0.veuyq.mongodb.net`

mongoose.connect(uri).then(() => {
    console.log("Conectado a Atlas!!")
}).catch(err => console.log("Esto no va ", err))