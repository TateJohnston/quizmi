import { createContext, useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizList, setQuizList] = useState([]);
  const { userDetails } = useContext(UserContext);

  const fetchQuizzes = () => {
    axios
      .get(`http://localhost:3000/users/${userDetails.email}`)
      .then((response) => {
        if (response.data.quizzes) {
          const quizzes = response.data.quizzes;
          setQuizList(quizzes);
        }
      })
      .catch((error) => console.error("error", error));
  };

  return (
    <QuizContext.Provider value={{ quizList, setQuizList, fetchQuizzes }}>
      {children}
    </QuizContext.Provider>
  );
};
