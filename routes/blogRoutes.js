const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");

router.get("/", blogController.blog_index);

router.post("/", blogController.blog_create_post);

router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_details);

router.get("/update/:id", blogController.blog_update_get);

router.post("/update", blogController.blog_update_post);

router.delete("/:id", blogController.blog_delete);

module.exports = router;
