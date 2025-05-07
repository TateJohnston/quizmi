const express = require("express");
const {
  addSubject,
  addQuizName,
  updateQuiz,
  getQuiz,
} = require("../controllers/quizzesController");

const router = express.Router();

router.post("/subject/:id", addSubject);
router.post("/quizName/:id", addQuizName);
router.post("/quiz/:id/:subjectName/:quizName", updateQuiz);
router.get("/quiz/:id/:subjectName/:quizName", getQuiz);

module.exports = router;
