import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { QuizContext } from "./QuizContext";

export const CombinedContext = createContext();

export const CombinedProvider = ({ children }) => {
  const [selectedSubjectName, setSelectedSubjectName] = useState("");
  const [selectedSubjectQuizzes, setSelectedSubjectQuizzes] = useState([]);

  const [currentQuizName, setCurrentQuizName] = useState("");
  const [showQuizMakerCard, setShowQuizMakerCard] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [hasQuizzes, setHasQuizzes] = useState(false);

  const { userDetails } = useContext(UserContext);
  const { quizList } = useContext(QuizContext);

  const getSubjectsQuizzes = (subject) => {
    setCurrentQuizName("");
    setShowQuizMakerCard(false);
    setHasQuizzes(false);

    const subjectObject = quizList.find(
      (subjects) => subjects.subject === subject
    );
    setSelectedSubjectName(subject);
    if (subjectObject && subjectObject.quiz) {
      setSelectedSubjectQuizzes(subjectObject.quiz);
    } else {
      setSelectedSubjectQuizzes([]);
    }
  };

  useEffect(() => {
    if (selectedSubjectName) {
      const subjectObject = quizList.find(
        (subjects) => subjects.subject === selectedSubjectName
      );
      if (subjectObject && subjectObject.quiz) {
        setSelectedSubjectQuizzes(subjectObject.quiz);
      } else {
        setSelectedSubjectQuizzes([]);
      }
    }
  }, [quizList]);

  // useEffect(() => {
  //   if (currentQuizName) {
  //     getCurrentQuiz();
  //   }
  //   console.log("current quiz name", currentQuizName);
  // }, [currentQuizName]);

  const getCurrentQuiz = () => {
    console.log("current quiz name", currentQuizName);
    axios
      .get(
        `http://localhost:3000/quiz/${userDetails.id}/${selectedSubjectName}/${currentQuizName}`
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          console.log("response data after get ", data);
          if (data.questions.length > 0) {
            setQuizQuestions(data.questions);
            setQuizAnswers(data.answers);
            setHasQuizzes(true);
          } else {
            setHasQuizzes(false);
            setShowQuizMakerCard(true);
          }
        }
      })
      .catch((error) => console.log("error: ", error));
  };

  const postCurrentQuiz = (quizObject) => {
    axios
      .post(
        `http://localhost:3000/quiz/${userDetails.id}/${selectedSubjectName}/${currentQuizName}`,
        quizObject
      )
      .then((response) => {
        if (response.status === 201) {
          setShowQuizMakerCard(false);
          console.log("quiz has been posted");
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <CombinedContext.Provider
      value={{
        setSelectedSubjectName,
        selectedSubjectName,
        selectedSubjectQuizzes,
        getSubjectsQuizzes,

        currentQuizName,
        setCurrentQuizName,
        postCurrentQuiz,
        getCurrentQuiz,
        quizQuestions,
        quizAnswers,
        hasQuizzes,
        setHasQuizzes,
        setShowQuizMakerCard,
        showQuizMakerCard,
      }}
    >
      {children}
    </CombinedContext.Provider>
  );
};
