const Post = require("../models/Post");

async function getPosts(req, res) {
  const posts = await Post.find().populate("author", "name");
  res.status(200).json(posts); 
}

async function createPost(req, res) {
  const newPost = new Post(req.body);
  await newPost.save();
  res.status(201).json(newPost);
}

module.exports = { getPosts, createPost };
