import { createContext, useState } from "react";

export const ResultsContext = createContext();

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [quizDone, setQuizDone] = useState(false);

  return (
    <ResultsContext.Provider
      value={{ results, setResults, quizDone, setQuizDone }}
    >
      {children}
    </ResultsContext.Provider>
  );
};
