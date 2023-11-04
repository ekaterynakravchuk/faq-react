import { useState } from "react";
import "./App.css";
import data from "./data";
import SingleFAQ from "./components/SingleFAQ";

function App() {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  function toggleFAQ(id) {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  }
  return (
    <>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleFAQ
            key={question.id}
            {...question}
            activeId={activeId}
            toggleFAQ={toggleFAQ}
          />
        );
      })}
    </>
  );
}

export default App;
