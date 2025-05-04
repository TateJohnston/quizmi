import { useState } from "react";
import HomePage from "../containers/HomePage";
import MainPage from "../containers/MainPage";
import { QuizProvider } from "../context/QuizContext";
import { UserProvider } from "../context/UserContext";
import { PageContext, PageProvider } from "../context/PageContext";
import { useContext } from "react";

import { ResultsContextProvider } from "../context/ResultsContext";
import { CombinedProvider } from "../context/CombinedContext";

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
        <CombinedProvider>
          <ResultsContextProvider>
            <PageProvider>
              <Pages />
            </PageProvider>
          </ResultsContextProvider>
        </CombinedProvider>
      </QuizProvider>
    </UserProvider>
  );
}

export default App;
