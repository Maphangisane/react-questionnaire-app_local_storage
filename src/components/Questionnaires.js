import React from "react";
import { useNavigate } from "react-router-dom";

// props
const Questionnaires = ({
  // receives questions to grab id
  questions,
  // takes Responses and method to set them
  responses,
  setResponses,
  // takes methods to set the counts
  setAgreeCount,
  setNeutralCount,
  setDisagreeCount,
}) => {
  // creating a navigate variable to redirect
  const navigate = useNavigate();

  // function to handle radio input change
  const handleResponseChange = (questionId, responseValue) => {
    // takes question id and Response value as parameters
    setResponses(
      //call a method to set the responses
      (prevResponses) => ({
        // create a function with state as parameter and pass question id with Response value
        ...prevResponses, // using spread method
        [questionId]: responseValue, // assigns selected response value to question id
      })
    );

    // test to set the questionnaire
    if (responseValue === "Agree") {
      // if selected Response is agree
      setAgreeCount((prevCount) => prevCount + 1); // increment previous count
    } else if (responseValue === "Neutral") {
      // else check if selected Response is neutral
      setNeutralCount((prevCount) => prevCount + 1); //increment neutral count
    } else if (responseValue === "Disagree") {
      // else check if selected Response is disagree
      setDisagreeCount((prevCount) => prevCount + 1); ////increment neutral count
    }
  };

  // component ui - displays heading, list of questionnaires
  return (
    // container
    <div className="Questionnaire ui main">
      {/* heading */}
      <div className="ui heading">
        {/* header */}
        <h1>Questionnaire</h1>
        <h3>Please indicate whether you agree, neutral or disagree</h3>
      </div>

      {/* list of questionnaires */}
      <ul>
        {/* callling map function to loop thru questions */}
        {questions.map(
          (
            question // call map function on questions object and loop thru each question
          ) => (
            <li
              className="list"
              key={question.id} // pass question id as key
            >
              {/* displays the questions */}
              {question.text}
              {/* radio inputs container */}
              <div className="ui radio">
                {/* responses inputs agree */}
                <label>
                  {/* agree input*/}
                  <input
                    //input type
                    type="radio"
                    // input value
                    value="Agree"
                    //
                    checked={responses[question.id] === "Agree"}
                    // call function to detect change and pass question id and agree as value
                    onChange={() => handleResponseChange(question.id, "Agree")}
                  />
                  Agree
                </label>
                {/* responses inputs neutral */}
                <label>
                  {/* neutral */}
                  <input
                    type="radio"
                    value="Neutral"
                    checked={responses[question.id] === "Neutral"}
                    onChange={() =>
                      handleResponseChange(question.id, "Neutral")
                    }
                  />
                  Neutral
                </label>
                {/* responses inputs disagree */}
                <label>
                  {/* disagree */}
                  <input
                    type="radio"
                    value="Disagree"
                    checked={responses[question.id] === "Disagree"}
                    onChange={() =>
                      handleResponseChange(question.id, "Disagree")
                    }
                  />
                  Disagree
                </label>
              </div>
            </li>
          )
        )}
      </ul>
      {/* button to  */}
      <button onClick={() => navigate("/")}>Submit</button>
    </div>
  );
};

export default Questionnaires;
