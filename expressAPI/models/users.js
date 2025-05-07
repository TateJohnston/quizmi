const users = [
  {
    name: "Tate Johnston",
    email: "myproject@gmail.com",
    password: "testing123",
    id: 1,
    quizzes: [
      {
        subject: "mathematics",
        quiz: [
          {
            quizName: "Addition",
            questions: ["2 + 2", "1+1", "10 + 2", "30 + 3"],
            answers: ["4", "2", "12", "33"],
          },
          {
            quizName: "Subtraction",
            questions: ["20-10", "30-12", "100-10", "200-50"],
            answers: ["10", "18", "90", "150"],
          },
        ],
      },
      {
        subject: "geography",
        quiz: [
          {
            quizName: "capitals",
            questions: [
              "What's the Capital of France",
              "What's the Capital of Italy",
              "What's the Capital of Finland",
            ],
            answers: ["Paris", "Rome", "Helsinki"],
          },
          {
            quizName: "Continents",
            questions: [
              "What Continent is Mongolia in",
              "What Continent is China in",
              "What Continent is Peru in",
            ],
            answers: ["Asia", "Asia", "South America"],
          },
        ],
      },
    ],
  },
  {
    name: "Testing",
    email: "testing@gmail.com",
    password: "test",
    id: 2,
    quizzes: [
      {
        subject: "Testing Quiz1",
        quiz: [
          {
            quizName: "test1",
            questions: ["2 + 2", "1+1", "10 + 2", "30 + 3"],
            answers: ["4", "2", "12", "33"],
          },
          {
            quizName: "test2",
            questions: ["20-10", "30-12", "100-10", "200-50"],
            answers: ["10", "18", "90", "150"],
          },
        ],
      },
      {
        subject: "TestingQuiz2",
        quiz: [
          {
            quizName: "test3",
            questions: [
              "What's the Capital of France",
              "What's the Capital of Italy",
              "What's the Capital of Finland",
            ],
            answers: ["Paris", "Rome", "Helsinki"],
          },
          {
            quizName: "test4",
            questions: [
              "What Continent is Mongolia in",
              "What Continent is China in",
              "What Continent is Peru in",
            ],
            answers: ["Asia", "Asia", "South America"],
          },
        ],
      },
    ],
  },
];

module.exports = users;
