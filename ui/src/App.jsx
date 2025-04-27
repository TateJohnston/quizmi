import { useState } from "react";
import HomePage from "../containers/HomePage";
import MainPage from "../containers/MainPage";
import { QuizProvider } from "../context/QuizContext";
import { UserProvider } from "../context/UserContext";
import { PageContext, PageProvider } from "../context/PageContext";
import { useContext } from "react";
import { SubjectProvider } from "../context/SubjectContext";
import { CurrentQuizProvider } from "../context/CurrentQuiz";
import { ResultsContextProvider } from "../context/ResultsContext";

function App() {
  const Pages = () => {
    const { page } = useContext(PageContext);
    return (
      <>
        {page === 1 && <HomePage />}
        {page === 2 && <MainPage />}
      </>
    );
  };
  return (
    <UserProvider>
      <QuizProvider>
        <SubjectProvider>
          <CurrentQuizProvider>
            <ResultsContextProvider>
              <PageProvider>
                <Pages />
              </PageProvider>
            </ResultsContextProvider>
          </CurrentQuizProvider>
        </SubjectProvider>
      </QuizProvider>
    </UserProvider>
  );
}

export default App;
