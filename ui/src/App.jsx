import { useState } from "react";
import HomePage from "../containers/HomePage";
import MainPage from "../containers/MainPage";
import { QuizProvider } from "../context/QuizContext";
import { UserProvider } from "../context/UserContext";
import { PageContext, PageProvider } from "../context/PageContext";
import { useContext } from "react";

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
    <PageProvider>
      <UserProvider>
        <QuizProvider>
          <Pages />
        </QuizProvider>
      </UserProvider>
    </PageProvider>
  );
}

export default App;
