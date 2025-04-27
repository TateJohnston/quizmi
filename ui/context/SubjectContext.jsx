import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { QuizContext } from "./QuizContext";

export const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {
  const [selectedSubjectName, setSelectedSubjectName] = useState("");
  const [selectedSubjectQuizzes, setSelectedSubjectQuizzes] = useState([]);
  const { userDetails } = useContext(UserContext);
  const { quizList } = useContext(QuizContext);

  const getSubjectsQuizzes = (subject) => {
    const subjectObject = quizList.find(
      (subjects) => subjects.subject === subject
    );
    if (subjectObject && subjectObject.quiz) {
      setSelectedSubjectName(subject);
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

  return (
    <SubjectContext.Provider
      value={{
        setSelectedSubjectName,
        selectedSubjectName,
        selectedSubjectQuizzes,
        getSubjectsQuizzes,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};
