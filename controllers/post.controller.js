const Post = require("../schemas/post.schema");

async function renderAllPosts(req, res) {
  const searchQuery = req.query.searchQuery || "";
  const allPosts = await Post.find({
    content: { $regex: searchQuery, $options: "i" },
  }).sort({ createdAt: -1 });
  
  res.render("index", {
    posts: allPosts,
    title: "HomePage",
    layout: "../views/layouts/main",
  });
}

async function getAllPosts(req, res) {
  const allPosts = await Post.find();
  res.json({ data: allPosts, message: "All Posts" });
}

async function createPost(req, res) {
  const newPost = await Post.create(req.body);
  res.json({ data: newPost, message: "Post created successfully" });
}

module.exports = { getAllPosts, createPost, renderAllPosts };
