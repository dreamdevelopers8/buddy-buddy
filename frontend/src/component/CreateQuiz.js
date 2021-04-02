import React, { useEffect, useState } from "react";
import question from "../quiz";

const CreateQuiz = () => {
  const [name, setName] = useState("");
  const [nameEntered, setNameEntered] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerArray, setAnswerArray] = useState([]);
  const [isSubmitted,setIssubmitted] = useState(false);

  const handleOnchange = (e) => {
    setSelectedOption(e);
  };
  const ansArray = answerArray;

  const handleNextClick = () => {
    setSelectedOption(0);
    setCurrentIndex(currentIndex + 1);
    ansArray.push(selectedOption);
    setAnswerArray(ansArray);
    console.log(answerArray);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length > 0) {
      setNameEntered(true);
    } else {
      setNameEntered(false);
    }
  };

  const handleSubmitClick = () => {
    setSelectedOption(0);
    ansArray.push(selectedOption);
    setAnswerArray(ansArray);
    console.log(answerArray);
    setIssubmitted(true);
  }

  useEffect(() => {
    setQuestions(question);
  }, []);

  return (
    <div>
     {!isSubmitted && <input
        onChange={(e) => handleNameChange(e)}
        type="text"
        placeholder="enter your name"
      ></input>}
      {!isSubmitted && questions.length && (
        <div>
          <h1>{questions[currentIndex].question}</h1>
          <div className="radio-toolbar">
            {questions[currentIndex].options.map((opt,i) => (
              <button key={i} onClick={() => handleOnchange(i+1)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
      {currentIndex !== questions.length - 1 && (
        <div>
          <button
            disabled={selectedOption === 0}
            onClick={() => handleNextClick()}
          >
            Next
          </button>
        </div>
      )}

      {!isSubmitted && currentIndex === questions.length - 1 && (
        <button disabled={!nameEntered} onClick={()=>handleSubmitClick()}>Submit & create quiz</button>
      )}
      {isSubmitted && <div>
        <h1>Congratulations on your new quiz . share the below link with your friends</h1>
        </div>}
    </div>
  );
};

export default CreateQuiz;
