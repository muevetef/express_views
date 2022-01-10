const blogs = require("../models/blog")
const uuid = require("uuid");

const blog_index = (req, res) => {
    console.log(req.query);
    res.render("index", { title: "Inicio", blogs });
  }

const blog_details = (req, res) => {
    console.log(req.params);
    const blog = blogs.find((blog) => blog.id == req.params.id);
    console.log(blog);
    res.render("detail", { title: blog.title, blog });
  };

const blog_create_get = (req, res) => {
    res.render("create", { title: "Crear un blog nuevo" });
  }

const blog_create_post = (req, res) => {
    const blog = { id: uuid.v4(), ...req.body };
    blogs.push(blog);
    res.redirect("/");
  }

const blog_update_get = (req, res) => {
  //buscar el blog a actualizar y renderizar la vista
  const blog = blogs.find((blog) => blog.id == req.params.id);
  res.render("update", { title: "Editar el blog", blog });
}

const blog_update_post = (req, res) => {
  //buscar el blog a actualizar y renderizar la vista
  blogs.forEach((blog, index) => {
    if (blog.id == req.params.id) {
      // blogs[index].title = req.body.title;
      // blogs[index].resume = req.body.resume;
      // blogs[index].body = req.body.body;
      blogs[index] = {id: blog.id, ...req.body}
    }
  });

  res.redirect("/blog/"+ req.params.id);
  
}


const blog_delete = (req, res) => {
    //elimina el elemento del array
    blogs.forEach((blog, index) => {
      if (blog.id == req.params.id) {
        blogs.splice(index, 1);
      }
    });
    res.json({ redirect: "/" });
  }

  module.exports = {
      blog_index,
      blog_details,
      blog_create_get,
      blog_create_post,
      blog_delete,
      blog_update_get,
      blog_update_post
  }