import { Button, Typography } from "@mui/material";
import InputField from "./InputField";
import Buttons from "./Buttons";
import { CombinedContext } from "../context/CombinedContext";

import { useContext, useEffect, useState } from "react";

import { ResultsContext } from "../context/ResultsContext";

const Quiz = () => {
  const { currentQuizName, quizQuestions, quizAnswers, hasQuizzes } =
    useContext(CombinedContext);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [index, setIndex] = useState(0);
  const [givenAnswer, setGivenAnswer] = useState("");
  const { selectedSubjectName } = useContext(CombinedContext);
  const { results, setResults, quizDone, setQuizDone } =
    useContext(ResultsContext);

  useEffect(() => {
    setIndex(0);
    setGivenAnswer("");
    setCurrentQuestion("");
    setQuizDone(false);
    setResults([]);
  }, [currentQuizName]);

  useEffect(() => {}, [currentQuestion]);
  const lastIndex = quizQuestions.length - 1;

  const checkIfCorrect = (question, answerGiven, questionIndex) => {
    const correctAnswer = quizAnswers[questionIndex];
    const questionNumber = questionIndex + 1;
    const isCorrect = answerGiven === correctAnswer;

    const resultsObject = {
      questionNumber: questionNumber,
      question: question,
      answer: correctAnswer,
      answerGiven: answerGiven,
      isCorrect: isCorrect,
    };
    setResults((prev) => [...prev, { resultsObject }]);
  };

  return !quizDone && currentQuizName && hasQuizzes ? (
    <div
      style={{
        width: "400px",
        height: "600px",
        backgroundColor: "whitesmoke",
        border: "1px solid rgb(133, 176, 210,0.3)",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Typography
          fontWeight={"bold"}
          textTransform={"uppercase"}
          variant="h2"
        >
          {currentQuizName}
        </Typography>
        <Typography textTransform={"uppercase"} padding={"10px"} variant="h6">
          {selectedSubjectName}
        </Typography>
      </div>

      {!currentQuestion ? (
        <Buttons
          onClick={() => setCurrentQuestion(quizQuestions[index])}
          color="whitesmoke"
          backgroundColor="none"
          variant={"contained"}
          content={"Start Quiz"}
        />
      ) : (
        <>
          <Typography
            fontWeight={"bold"}
            variant="h6"
            textTransform={"uppercase"}
          >
            Question {index + 1}/{quizQuestions.length}
          </Typography>
          <Typography variant="h6" textAlign={"justify"} padding={"0px 20px"}>
            {quizQuestions[index]}
          </Typography>
          <InputField
            onChange={(e) => setGivenAnswer(e.target.value)}
            multiline={true}
            maxRows={3}
            width={"300px"}
            backgroundColor="white"
            type={"text"}
            label={"Answer here"}
            value={givenAnswer}
          />
          {lastIndex === index ? (
            <Buttons
              onClick={() => {
                checkIfCorrect(currentQuestion, givenAnswer, index);
                setQuizDone(true);
              }}
              color="whitesmoke"
              backgroundColor="none"
              variant={"contained"}
              content={"Finish Quiz"}
            />
          ) : (
            <Buttons
              onClick={() => {
                checkIfCorrect(currentQuestion, givenAnswer, index);
                setGivenAnswer("");
                setIndex((prev) => prev + 1);
              }}
              color="whitesmoke"
              backgroundColor="none"
              variant={"contained"}
              content={"Next Question"}
            />
          )}
        </>
      )}
    </div>
  ) : (
    <></>
  );
};
export default Quiz;
