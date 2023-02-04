const express = require("express");

const postControllers = require("../controllers/post.controller");

const router = express.Router();

router.get("/", postControllers.renderAllPosts);
router.post("/", postControllers.createPost);

module.exports = router;
