const express = require("express");

const app = express();
const userRoutes = require("./routes/usersRoutes");

app.use("/users", userRoutes);

module.exports = app;
