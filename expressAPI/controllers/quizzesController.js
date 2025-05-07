const users = require("../models/users");

const addSubject = (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    if (!user.quizzes) {
      user.quizzes = [];
    }
    user.quizzes.push(req.body);
    res.status(201).json({
      result: `${req.body.subject} added successfully`,
    });
  } else {
    res.status(404).json({ result: "User not found" });
  }
};

const addQuizName = (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((user) => user.id === userId);
  const subject = req.body.subject;

  if (user) {
    let found = false;
    for (let quizType of user.quizzes) {
      if (quizType.subject === subject) {
        quizType.quiz.push(req.body.quiz);
        found = true;
        break;
      }
    }

    if (!found) {
      user.quizzes.push({
        subject: subject,
        quiz: [req.body.quiz],
      });
    }

    res.status(201).json({
      result: `Quiz Name: ${req.body.quiz.quizName} added to Subject: ${subject} Successfully.`,
      UpdatedUser: user,
    });
  } else {
    res.status(404).json({ result: "User not found" });
  }
};

const updateQuiz = (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    const quizzes = user.quizzes;
    const quizSubject = req.params.subjectName;
    const quizName = req.params.quizName;
    const quizQuestions = req.body.questions;
    const quizAnswers = req.body.answers;

    for (let quizType of quizzes) {
      if (quizType.subject === quizSubject) {
        for (let quiz of quizType.quiz) {
          if (quiz.quizName === quizName) {
            quiz.questions.push(...quizQuestions);
            quiz.answers.push(...quizAnswers);
            break;
          }
        }
      }
    }
    res
      .status(201)
      .json({ result: `Quiz updated successfully`, UpdatedUser: user });
  } else {
    res.status(404).json({ result: "User not found" });
  }
};

const getQuiz = (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    const quizzes = user.quizzes;
    const quizSubject = decodeURIComponent(req.params.subjectName);
    const quizName = decodeURIComponent(req.params.quizName);

    for (let quizType of quizzes) {
      if (quizType.subject === quizSubject) {
        for (let quiz of quizType.quiz) {
          if (quiz.quizName === quizName) {
            return res.status(200).json(quiz);
          }
        }
      }
    }
    return res.status(404).json({ result: "Quiz not found" });
  } else {
    res.status(404).json({ result: "User not found" });
  }
};

module.exports = {
  addSubject,
  addQuizName,
  updateQuiz,
  getQuiz,
};
