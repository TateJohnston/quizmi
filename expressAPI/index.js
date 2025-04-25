const express = require("express");
const cors = require("cors");
const users = require("./models/users");
const quizzes = require("./models/quizzes");
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/users", (req, res) => {
  const newUser = { ...req.body, id: users.length + 1 };
  users.push(newUser);
  res.status(201).json(users);
});
app.get("/users", (req, res) => {
  res.status(200).json(users);
});
app.get("/users/:email", (req, res) => {
  let userEmail = req.params.email;
  let user = users.find((user) => user.email === userEmail);
  user
    ? res.status(200).json(user)
    : res
        .status(404)
        .json({ result: `User with email ${userEmail} not found` });
});

app.post("/quizzes/:id", (req, res) => {
  let userId = Number(req.params.id);
  let user = users.find((user) => user.id === userId);
  if (user) {
    if (!user.quizzes) {
      user.quizzes = [];
    }
    user.quizzes.push(req.body);
    res.status(201).json({ result: "Subject added successfully" });
  } else {
    res.status(404).json({ result: "User not found" });
  }
});
app.get("/quizzes", (req, res) => {
  res.status(200).json(quizzes);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
