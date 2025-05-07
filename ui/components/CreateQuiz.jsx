import { Paper, Typography, Box } from "@mui/material";
import InputField from "./InputField";
import Buttons from "./Buttons";
import { useContext, useState, useEffect } from "react";
import { CombinedContext } from "../context/CombinedContext";

const CreateQuiz = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const { selectedSubjectName, selectedSubjectQuizzes } =
    useContext(CombinedContext);
  const { currentQuizName, postCurrentQuiz, hasQuizzes } =
    useContext(CombinedContext);
  const { showQuizMakerCard } = useContext(CombinedContext);

  useEffect(() => {}, [questions]);
  useEffect(() => {}, [answers]);

  const storeQuestionAndAnswer = () => {
    setQuestions((prevQuestions) => [...prevQuestions, question]);
    setAnswers((prevAnswers) => [...prevAnswers, answer]);

    setAnswer("");
    setQuestion("");
  };

  return !hasQuizzes && currentQuizName && showQuizMakerCard ? (
    <div
      style={{
        width: "600px",
        height: "400px",
        backgroundColor: "whitesmoke",
        border: "1px solid rgb(133, 176, 210,0.3)",
        margin: "auto",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", fontWeight: "bolder" }}
        >
          {selectedSubjectName}
        </Typography>
        <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
          {currentQuizName}
        </Typography>
        <Typography
          variant="h5"
          sx={{ textTransform: "capitalise", fontStyle: "italic" }}
        >
          Question {questions.length + 1}
        </Typography>
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
          setQuestions("");
          setAnswers("");
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
