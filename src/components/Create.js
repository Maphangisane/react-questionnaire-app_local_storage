import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// receives questions state and function to set i
const Create = ({ questions, setQuestions }) => {
  // states
  // creating a navigate variable to redirect
  const navigate = useNavigate();
  // new state for question input
  const [inputValue, setInputValue] = useState("");
  // state for question ID used for editing
  const [updateQuestionId, setUpdateQuestionId] = useState("");
  // state for new question
  const [updateQuestionText, setUpdateQuestionText] = useState("");

  // useEffect to set data
  useEffect(() => {
    // set item to local storage db called myQuestions using questions state
    localStorage.setItem("Questions", JSON.stringify(questions));
  }, [questions]); // dependent on questions state

  // UseEffect to fetch data
  useEffect(() => {
    // new variable to get questions from db
    const Questions = JSON.parse(localStorage.getItem("Questions")) || [];
    // set the state using new variable
    setQuestions(Questions);
  }, [setQuestions]); // dependent on setQuestion function

  // handle input change
  const handleInputChange = (event) => {
    // takes event and set its target
    setInputValue(event.target.value);
  };

  // add question
  const addQuestion = () => {
    // checks if input is empty
    if (inputValue.trim() === "") {
      return;
    }
    // new variable to assign id and input
    const newQuestion = {
      id: Date.now(),
      text: inputValue,
    };
    // setting questions
    // takes previous questions as arg and calls function to set questions and pass new question to existing array
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

    // clears the form
    setInputValue("");
  };

  // delete function - receives quesion id
  const handleDelete = (questionId) => {
    // takes question id as arg
    // create new variable to hold filtred questions
    const updatedQuestions = questions.filter(
      // call filter method on questions using id
      (question) => question.id !== questionId //function to filter id
    );
    // sets new state using filtered questions
    setQuestions(updatedQuestions);
  };

  // edit function to populate form/input - receives question id
  const handleUpdate = (questionId) => {
    //take question id as arg
    //new variable and use find method to grab the data of id
    const questionToUpdate = questions.find(
      (question) => question.id === questionId //function to find id
    );
    // set the id
    setUpdateQuestionId(questionId);
    // set the question
    setUpdateQuestionText(questionToUpdate.text);
  };

  // update function
  const handleSaveEdit = () => {
    // new var - we loop thru questions using map t
    const updatedQuestions = questions.map((question) => {
      // we check if question id is same as the one we want to edit
      if (question.id === updateQuestionId) {
        //if id is the same we add edited question to list/array
        return { ...question, text: updateQuestionText };
      }
      // adn return the question list / array
      return question;
    });

    // clear the form
    setQuestions(updatedQuestions);
    setUpdateQuestionId("");
    setUpdateQuestionText("");
  };

  return (
    // component ui
    <div className="ui container">
      <div className="ui header">
        {/* heading */}
        <h1 className="ui center aligned icon header">
          <i className="circular users icon"></i>
          Creating a Questionnaire
        </h1>
      </div>

      {/* input div */}
      <div className="ui inverted grey segment">
        <div className="ui massive fluid action input">
          {/* question input */}
          <input
            // input id
            id="Question"
            // inpu type
            type="text"
            // input placeholder - to remind user
            placeholder="create a questionnaire"
            // value of input
            value={inputValue}
            // function to detect change to input
            onChange={handleInputChange}
          />

          {/* submit button - calls add question function*/}
          {/* <br /> */}
          <button className="ui button" onClick={addQuestion}>
            Add Question
          </button>
        </div>
      </div>

      {/* questions list */}
      <div className="ui header">
        {/* heading */}
        <h2>List of Questions</h2>
      </div>
      {/* unordered list to display question by list  */}
      <div className="ui celled list">
        <ul>
          {/* loop thru the questions array using map function passing question as parameter */}
          {questions.map((question) => (
            <li
              // pass question id as key
              key={question.id}
            >
              {/* check if edit id same as question */}
              {updateQuestionId === question.id ? (
                <>
                  {/* if true dispaly new input that updates the question */}
                  <div className="ui massive fluid action input">
                    <input
                      // iput type
                      type="text"
                      // input is new question
                      value={updateQuestionText}
                      // set the edited text to input value
                      onChange={(e) => setUpdateQuestionText(e.target.value)}
                    />
                    {/* submit button calls the update function */}
                    <button className="ui button" onClick={handleSaveEdit}>
                      Save
                    </button>
                  </div>
                </>
              ) : (
                // else diplay the list of question in the array/state
                <div className="questions-list ui middle celled list">
                  <div className="item">
                    {/* question text */}
                    <div class="content">
                      <h4 class="header">{question.text}</h4>{" "}
                      <div>
                        {/* edit icons - calls edit function using question id paramete */}

                        <i
                          className="edit icon"
                          onClick={() => handleUpdate(question.id)}
                        ></i>

                        {/* delete icons - calls delete function using question id parameter*/}

                        <i
                          className="trash icon"
                          onClick={() => handleDelete(question.id)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                // else diplay the list of question in the array/state
                // <>
                //   {question.text} {/* question text */}
                //   {/* edit icons - calls edit function using question id paramete */}
                //   <button
                //     className="fa-solid fa-pen"
                //     onClick={() => handleUpdate(question.id)}
                //   ></button>
                //   {/* delete icons - calls delete function using question id parameter*/}
                //   <button
                //     className="fa-regular fa-trash-can"
                //     onClick={() => handleDelete(question.id)}
                //   ></button>
                // </>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* button to  */}
      <button
        className="ui center aligned button"
        onClick={() => navigate("/questionnaire")}
      >
        create questionaire
      </button>
    </div>
  );
};

export default Create;
