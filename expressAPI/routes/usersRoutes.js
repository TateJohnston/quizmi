const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserByEmail,
} = require("../controllers/usersController");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:email", getUserByEmail);

module.exports = router;
