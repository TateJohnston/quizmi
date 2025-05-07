const users = require("../models/users");

const createUser = (req, res) => {
  const newUser = { ...req.body, id: users.length + 1 };
  users.push(newUser);
  res.status(201).json(newUser);
};

const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

const getUserByEmail = (req, res) => {
  const userEmail = req.params.email;
  const user = users.find((user) => user.email === userEmail);
  user
    ? res.status(200).json(user)
    : res
        .status(404)
        .json({ result: `User with email ${userEmail} not found` });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
};
