import React from "react";
import { useNavigate } from "react-router-dom";

// props
export const QuestionnaireTable = ({
  // receives questions to grab id
  questions,
  // takes responses and method to set them
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
    // takes question id and response value as parameters
    setResponses(
      //call a method to set the responses
      (prevResponses) => ({
        // create a function with state as parameter and pass question id with response value
        ...prevResponses, // using spread method
        [questionId]: responseValue, // assigns selected response value to question id
      })
    );

    // test to set the questionnaire
    if (responseValue === "Agree") {
      // if selected response is agree
      setAgreeCount((prevCount) => prevCount + 1); // increment previous count
    } else if (responseValue === "Neutral") {
      // else check if selected response is neutral
      setNeutralCount((prevCount) => prevCount + 1); //increment neutral count
    } else if (responseValue === "Disagree") {
      // else check if selected response is disagree
      setDisagreeCount((prevCount) => prevCount + 1); ////increment neutral count
    }
  };

  // componet ui - displays heading, list of questionnaires
  return (
    <div className="questionnaire-container ui container">
      <h1 class="ui center aligned icon header">
        <i class="circular dashboard icon"></i>
        Questionnaire
      </h1>
      <h3 class="ui center aligned icon header">
        Please indicate whether you agree, neutral or disagree.
      </h3>
      {/*  */}
      {/* <div className="ui heading">
        <h1>Questionnaire</h1>
        <h3>Please indicate whether you agree, neutral or disagree.</h3>
      </div> */}
      {/*  */}
      <table className="ui celled inverted grey table">
        <thead>
          <tr>
            <th>Questions</th>
            <th>Agree</th>
            <th>Neutral</th>
            <th>Disagree</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              {/* agree */}
              <td>{question.text}</td>
              <td>
                <input
                  type="radio"
                  //   name={`response_${i}`}
                  value="Agree"
                  checked={responses[question.id] === "Agree"}
                  onChange={() => handleResponseChange(question.id, "Agree")}
                />
              </td>
              {/* neutral */}
              <td>
                <input
                  type="radio"
                  //   name={`response_${index}`}
                  value="Neutral"
                  checked={responses[question.id] === "Neutral"}
                  onChange={() => handleResponseChange(question.id, "Neutral")}
                />
              </td>
              {/* disagree */}
              <td>
                <input
                  type="radio"
                  //   name={`response_${index}`}
                  value="Disagree"
                  checked={responses[question.id] === "Disagree"}
                  onChange={() => handleResponseChange(question.id, "Disagree")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="ui button" onClick={() => navigate("/")}>
        Submit
      </button>
    </div>
  );
};

export default QuestionnaireTable;
