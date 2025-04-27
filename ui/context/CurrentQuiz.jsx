import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { SubjectContext } from "./SubjectContext";

export const CurrentQuizContext = createContext();

export const CurrentQuizProvider = ({ children }) => {
  const [currentQuizName, setCurrentQuizName] = useState("");
  const [showQuizMakerCard, setShowQuizMakerCard] = useState(false);
  const { userDetails } = useContext(UserContext);
  const { selectedSubjectName } = useContext(SubjectContext);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [hasQuizzes, setHasQuizzes] = useState(false);

  useEffect(() => {
    if (currentQuizName) {
      getCurrentQuiz();
    }
  }, [currentQuizName]);

  const postCurrentQuiz = (quizObject) => {
    axios
      .post(
        `http://localhost:3000/quiz/${userDetails.id}/${selectedSubjectName}/${currentQuizName}`,
        quizObject
      )
      .then((response) => {
        if (response.status === 201) {
          setShowQuizMakerCard(false);
          console.log(response.data);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  };

  const getCurrentQuiz = () => {
    axios
      .get(
        `http://localhost:3000/quiz/${userDetails.id}/${selectedSubjectName}/${currentQuizName}`
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          if (data.questions.length > 0) {
            console.log(data.questions, data.answers);
            setQuizQuestions(data.questions);
            setQuizAnswers(data.answers);
            setHasQuizzes(true);
          }
        }
      })
      .catch((error) => console.log("error: ", error));
  };

  return (
    <CurrentQuizContext.Provider
      value={{
        currentQuizName,
        setCurrentQuizName,
        postCurrentQuiz,
        getCurrentQuiz,
        quizQuestions,
        quizAnswers,
        hasQuizzes,
        setHasQuizzes,
      }}
    >
      {children}
    </CurrentQuizContext.Provider>
  );
};
