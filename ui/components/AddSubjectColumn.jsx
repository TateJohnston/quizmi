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
import { useContext } from "react";
import Buttons from "./Buttons";
import { UserContext } from "../context/UserContext";

const AddSubjectColumn = () => {
  const [subjectText, setSubjectText] = useState("");
  const { quizList, setQuizList, fetchQuizzes } = useContext(QuizContext);
  const { userDetails } = useContext(UserContext);

  const addSubject = () => {
    const quizObject = { subject: subjectText, quizzes: [] };

    if (subjectText) {
      axios
        .post(`http://localhost:3000/quizzes/${userDetails.id}`, quizObject)
        .then((response) => {
          if (response.status === 201) {
            setSubjectText("");
            fetchQuizzes();
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        borderRight: "2px solid rgb(133, 176, 210)",
        width: "200px",
        textAlign: "center",
      }}
    >
      <InputField
        onChange={(e) => setSubjectText(e.target.value)}
        width={"80%"}
        label={"Add Subject"}
        value={subjectText}
        variant={"standard"}
        backgroundColor="white"
        marginTop="5px"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={addSubject}>
                <AddIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {quizList.map((subjects) => (
        <div key={subjects.subject}>
          <Buttons
            width={"100%"}
            backgroundColor="white"
            content={subjects.subject}
            marginTop={"20px"}
          ></Buttons>
        </div>
      ))}
    </div>
  );
};

export default AddSubjectColumn;
