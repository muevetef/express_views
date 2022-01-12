const express = require("express");
const morgan = require("morgan");
const blogRoutes = require('./routes/blogRoutes')
const mongoose = require('mongoose')

const app = express();

const PORT = process.env.PORT || 5000;

const user = "toni"
const pass = "test123"
const uri = `mongodb+srv://${user}:${pass}@cluster0.veuyq.mongodb.net/node-test`

mongoose.connect(uri).then((result) => {
    console.log("Conectado a Atlas!!")
    app.listen(PORT, () => console.log("Servidor arrancado ok!"));
}).catch(err => console.log("Esto no va ", err))


//Registrar en motor de plantillas
app.set("view engine", "ejs");
app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));


app.get('/', (req, res) => {
  res.redirect('/blog')
})

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.use('/blog', blogRoutes)

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
