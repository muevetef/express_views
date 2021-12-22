const express = require("express");
const morgan = require("morgan");
const uuid = require("uuid");

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Servidor arrancado ok!"));

//Registrar en motor de plantillas
app.set("view engine", "ejs");

const blogs = [
  {
    id: 1,
    title: "Primer Blog",
    resume: "Resumen del primer blog",
    body: "dfgsdfgñiijasdkfj ",
  },
  {
    id: 2,
    title: "Segundo Blog",
    resume: "Resumen del segundo blog",
    body: "dfgsdfgñiijasdkfj ",
  },
  {
    id: 3,
    title: "Tercero Blog",
    resume: "Resumen del tercero blog",
    body: "dfgsdfgñiijasdkfj ",
  },
];

app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.redirect('/blog')
})

app.get("/blog", (req, res) => {
  console.log(req.query);
  res.render("index", { title: "Inicio", blogs });
})

app.post("/blog", (req, res) => {
  const blog = { id: uuid.v4(), ...req.body };
  blogs.push(blog);
  res.redirect("/");
});


app.get("/blog/create", (req, res) => {
  res.render("create", { title: "Crear un blog nuevo" });
});

app.get("/blog/:id", (req, res) => {
  console.log(req.params);
  const blog = blogs.find((blog) => blog.id == req.params.id);
  console.log(blog)
  res.render("detail", { title: blog.title, blog });
});

app.delete('/blog/:id', (req, res) => {
  //elimina el elemento del array
  blogs.forEach((blog, index) => {
    if(blog.id == req.params.id ){
      blogs.splice(index, 1)
    }
  });
  res.json({redirect: '/'})
})

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
