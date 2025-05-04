import { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";
import { Box, Typography } from "@mui/material";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import Buttons from "./Buttons";
import { CombinedContext } from "../context/CombinedContext";

const Results = () => {
  const { results, quizDone } = useContext(ResultsContext);
  const { currentQuizName, setCurrentQuizName } = useContext(CombinedContext);

  return (
    quizDone && (
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
        {results.map((q) => (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                gap: "10px",
                color: q.resultsObject.isCorrect ? "green" : "red",
              }}
            >
              <Typography variant="h6" key={q.resultsObject.questionNumber}>
                Question {q.resultsObject.questionNumber}.
              </Typography>
              <div>
                <Typography variant="h6">
                  Question: {q.resultsObject.question}
                </Typography>
                <Typography variant="h6">
                  Answer: {q.resultsObject.answer}
                </Typography>
                <Typography variant="h6">
                  Your Answer: {q.resultsObject.answerGiven}
                </Typography>
              </div>

              {q.resultsObject.isCorrect ? (
                <ThumbUpOffAltRoundedIcon />
              ) : (
                <ThumbDownAltRoundedIcon />
              )}
            </div>
          </>
        ))}
        <Buttons
          onClick={() => {
            const prevQuizName = currentQuizName;
            setCurrentQuizName("");
            setTimeout(() => {
              setCurrentQuizName(prevQuizName);
            }, 0);
          }}
          content={"Retake Test"}
          color="whitesmoke"
          backgroundColor="none"
          variant={"contained"}
        />
      </div>
    )
  );
};

export default Results;
