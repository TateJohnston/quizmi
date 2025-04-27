import { Paper, Typography, Box } from "@mui/material";
import InputField from "./InputField";
import Buttons from "./Buttons";
import { useContext, useState, useEffect } from "react";
import { SubjectContext } from "../context/SubjectContext";
import { CurrentQuizContext } from "../context/CurrentQuiz";

const CreateQuiz = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const { selectedSubjectName, selectedSubjectQuizzes } =
    useContext(SubjectContext);
  const { currentQuizName, postCurrentQuiz, hasQuizzes } =
    useContext(CurrentQuizContext);

  useEffect(() => {
    console.log("Questions: ", questions);
  }, [questions]);
  useEffect(() => {
    console.log("Answers: ", answers);
  }, [answers]);

  const storeQuestionAndAnswer = () => {
    setQuestions((prevQuestions) => [...prevQuestions, question]);
    setAnswers((prevAnswers) => [...prevAnswers, answer]);

    setAnswer("");
    setQuestion("");
  };

  return !hasQuizzes && currentQuizName ? (
    <div
      style={{
        width: "600px",
        height: "400px",
        backgroundColor: "whitesmoke",
        border: "1px solid rgb(133, 176, 210,0.3)",
        margin: "auto",
      }}
    >
      <div
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Typography>{selectedSubjectName}</Typography>
        <Typography>{currentQuizName}</Typography>
        <Typography>Question {questions.length + 1}</Typography>
        <InputField
          onChange={(e) => setQuestion(e.target.value)}
          multiline={true}
          rows={3}
          width={"300px"}
          backgroundColor="white"
          type={"text"}
          label={"Question..."}
          value={question}
        />
        <InputField
          onChange={(e) => setAnswer(e.target.value)}
          multiline={true}
          maxRows={3}
          width={"300px"}
          backgroundColor="white"
          type={"text"}
          label={"Answer..."}
          value={answer}
        />
      </div>
      <Buttons
        onClick={() => {
          postCurrentQuiz({ questions, answers });
        }}
        color="whitesmoke"
        backgroundColor="none"
        variant={"contained"}
        content={"Save Quiz"}
      />
      <Buttons
        onClick={() => storeQuestionAndAnswer()}
        backgroundColor="white"
        variant={"contained"}
        content={"Add Question"}
      />
    </div>
  ) : (
    ""
  );
};

export default CreateQuiz;
