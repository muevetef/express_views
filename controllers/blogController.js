const Blog = require("../models/Blog");

const blog_index = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render("index", { title: "Inicio", blogs });
  } catch (err) {
    console.log(err);
  }

  /*   Blog.find()
    .then((blogs) => {
      res.render("index", { title: "Inicio", blogs });
    })
    .catch((err) => console.log(err)); */
};

const blog_details = (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => {
      res.render("detail", { title: blog.title, blog });
    })
    .catch((err) => {
      console.log(err);
      res.render("404", { title: "Blog no encontrado" });
    });
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "Crear un blog nuevo" });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  console.log(blog);
  blog
    .save()
    .then((result) => {
      console.log("Registro guardado", result);
      res.redirect("/blog");
    })
    .catch((err) => console.log(err));
};

const blog_update_get = (req, res) => {
  //buscar el blog a actualizar y renderizar la vista
  Blog.findById(req.params.id)
    .then((blog) => {
      res.render("update", { title: "Editar el blog", blog });
    })
    .catch((err) => console.log(err));
};

const blog_update_post = (req, res) => {
  console.log(req.params.id);
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      console.log("Registro actualizado", result);
      res.redirect("/blog/" + req.params.id);
    })
    .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => {
      //console.log(result);
      res.json({ redirect: "/" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_update_get,
  blog_update_post,
};
