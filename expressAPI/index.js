const express = require("express");
const cors = require("cors");
const users = require("./models/users");
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

app.post("/subject/:id", (req, res) => {
  let userId = Number(req.params.id);
  let user = users.find((user) => user.id === userId);
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
});

app.post("/quizName/:id", (req, res) => {
  let userId = Number(req.params.id);
  let user = users.find((user) => user.id === userId);
  let subject = req.body.subject;
  let quizzes = user.quizzes;

  if (user) {
    let found = false;
    for (let quizType of quizzes) {
      if (quizType.subject === subject) {
        quizType.quiz.push(req.body.quiz);
        found = true;
        break;
      }
    }

    if (!found) {
      quizzes.push({
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
});

app.post("/quiz/:id/:subjectName/:quizName", (req, res) => {
  let userId = Number(req.params.id);
  let user = users.find((user) => user.id === userId);

  if (user) {
    let quizzes = user.quizzes;
    let quizSubject = req.params.subjectName;
    let quizName = req.params.quizName;
    let quizQuestions = req.body.questions;
    let quizAnswers = req.body.answers;

    for (let quizType of quizzes) {
      if (quizType.subject === quizSubject) {
        for (let quiz of quizType.quiz)
          if (quiz.quizName === quizName) {
            quiz.questions.push(...quizQuestions);
            quiz.answers.push(...quizAnswers);
            break;
          }
      }
    }
    res
      .status(201)
      .json({ result: `Quiz updated successfully`, UpdatedUser: user });
  } else {
    res.status(404).json({ result: "User not found" });
  }
});

app.get("/quiz/:id/:subjectName/:quizName", (req, res) => {
  let userId = Number(req.params.id);
  let user = users.find((user) => user.id === userId);

  if (user) {
    let quizzes = user.quizzes;
    let quizSubject = req.params.subjectName;
    let quizName = req.params.quizName;

    for (let quizType of quizzes) {
      if (quizType.subject === quizSubject) {
        for (let quiz of quizType.quiz)
          if (quiz.quizName === quizName) {
            res.status(200).json(quiz);
            break;
          }
      }
    }
    res
      .status(201)
      .json({ result: `Quiz updated successfully`, UpdatedUser: user });
  } else {
    res.status(404).json({ result: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
