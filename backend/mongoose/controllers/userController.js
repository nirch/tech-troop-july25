const User = require("../models/User");

async function getUsers(req, res) {
  const users = await User.find();
  res.status(200).json(users);
}

async function getUserById(req, res) {
  const userId = req.params.id;
  const user = await User.findById(userId);
  res.status(200).json(user);
}

async function createUser(req, res) {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
}

async function updateUser(req, res) {
  const userId = req.params.id;
  const updateUser = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(updateUser);
}

async function deleteUser(req, res) {
  const userId = req.params.id;
  await User.deleteOne({ _id: userId });
  res.status(204).send();
}

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
