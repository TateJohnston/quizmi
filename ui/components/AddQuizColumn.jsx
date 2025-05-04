import {
  Button,
  InputAdornment,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputField from "./InputField";
import { QuizContext } from "../context/QuizContext";
import { useState } from "react";
import axios from "axios";
import { useContext, useEffect } from "react";
import Buttons from "./Buttons";
import { UserContext } from "../context/UserContext";
import { CombinedContext } from "../context/CombinedContext";

const AddQuizColumn = () => {
  const [quizNameText, setQuizNameText] = useState("");
  const { quizList, setQuizList, fetchQuizzes } = useContext(QuizContext);
  const { userDetails } = useContext(UserContext);
  const { selectedSubjectName, selectedSubjectQuizzes } =
    useContext(CombinedContext);
  const [clickedButton, setClickedButton] = useState(null);
  const { setCurrentQuizName, getCurrentQuiz } = useContext(CombinedContext);

  useEffect(() => {}, [selectedSubjectQuizzes.length]);

  const addQuiz = () => {
    const quizObject = {
      subject: selectedSubjectName,
      quiz: { quizName: quizNameText, questions: [], answers: [] },
    };

    if (quizNameText) {
      axios
        .post(`http://localhost:3000/quizName/${userDetails.id}`, quizObject)
        .then((response) => {
          if (response.status === 201) {
            setQuizNameText("");
            fetchQuizzes();
            console.log("New Quiz Array", response.data);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <div
      style={{
        height: "calc(100vh - 102px)",
        borderRight: "2px solid rgb(133, 176, 210)",
        width: "50%",
        textAlign: "center",
      }}
    >
      <InputField
        onChange={(e) => setQuizNameText(e.target.value)}
        width={"80%"}
        label={"Add Quiz"}
        value={quizNameText}
        variant={"standard"}
        backgroundColor="white"
        marginTop="5px"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={addQuiz}>
                <AddIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {selectedSubjectQuizzes.length > 0 ? (
        selectedSubjectQuizzes.map((subject) => (
          <div key={subject.quizName}>
            <Buttons
              onClick={() => {
                setCurrentQuizName(subject.quizName);
                setClickedButton(subject.quizName);
                getCurrentQuiz();
              }}
              width={"100%"}
              backgroundColor={
                clickedButton === subject.quizName
                  ? "rgb(133, 176, 210,0.2)"
                  : "white"
              }
              content={subject.quizName}
              marginTop={"20px"}
            />
          </div>
        ))
      ) : (
        <Typography marginTop={"20px"} color="lightgray">
          Empty...
        </Typography>
      )}
    </div>
  );
};

export default AddQuizColumn;
