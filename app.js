const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Servidor arrancado ok!"))

//Registrar en motor de plantillas
app.set('view engine', 'ejs')
//app.set('views', 'misViews')//Por defecto la carpeta para las vistas es views

app.get('/', (req, res) =>{
    const blogs = [
        {title: 'Primer Blog', resume: "Resumen del primer blog"},
        {title: 'Segundo Blog', resume: "Resumen del segundo blog"},
        {title: 'Tercero Blog', resume: "Resumen del tercero blog"}
    ]
    res.render('index', {title: 'Inicio', blogs})
})

app.get('/about', (req, res) =>{
    res.render('about', {title: 'about'})
})

app.get('/blog/create', (req, res) => {
    res.render('create', {title: "Crear un blog nuevo"})
})

app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
    
})