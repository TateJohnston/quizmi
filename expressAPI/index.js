const express = require("express");
const cors = require("cors");
const users = require("./models/users");
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json(users);
});
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
