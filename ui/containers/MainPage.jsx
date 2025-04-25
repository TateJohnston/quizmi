import { useContext, useEffect, useState } from "react";
import AddSubjectColumn from "../components/AddSubjectColumn";
import Navbar from "../components/NavBar";
import { QuizContext } from "../context/QuizContext";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const MainPage = () => {
  const { quizList, setQuizList, fetchQuizzes } = useContext(QuizContext);
  const { userDetails } = useContext(UserContext);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ marginTop: "0px" }}>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          width: "25%",
          flexDirection: "row",
        }}
      >
        <AddSubjectColumn />
      </div>
    </div>
  );
};

export default MainPage;
