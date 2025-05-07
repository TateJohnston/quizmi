import { useContext, useEffect, useState } from "react";
import AddSubjectColumn from "../components/AddSubjectColumn";
import Navbar from "../components/Navbar";
import { QuizContext } from "../context/QuizContext";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import AddQuizColumn from "../components/AddQuizColumn";
import { CombinedContext } from "../context/CombinedContext";

import CreateQuiz from "../components/CreateQuiz";
import Quiz from "../components/Quiz";
import Results from "../components/Results";

const MainPage = () => {
  const { fetchQuizzes } = useContext(QuizContext);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ marginTop: "0px" }}>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            width: "25%",
            flexDirection: "row",
          }}
        >
          <AddSubjectColumn />
          <AddQuizColumn />
        </div>
        <CreateQuiz />
        <Quiz />
        <Results />
      </div>
    </div>
  );
};

export default MainPage;
