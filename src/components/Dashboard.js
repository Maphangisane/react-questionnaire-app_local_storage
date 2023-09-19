import React from "react";

// props - receives questions and counts for displaying purposes
const Dashboard = ({ questions, agreeCount, neutralCount, disagreeCount }) => {
  // we fetch data in this component
  // const questionsLength = questions.length;
  // component ui - displays the heading, question and options count
  return (
    // container
    <div className="Dashboard-container ui container">
      {/* heading */}
      {/* <div className="ui heading">
        <h1 className="ui center aligned icon header">Dashboard</h1>
      </div> */}
      {/*  */}
      <h1 class="ui center aligned icon header">
        <i class="circular dashboard icon"></i>
        Dashboard
      </h1>
      {/* cards to display # of questions and options count*/}
      <div className="ui statistics">
        {/* questions count */}
        <div className="purple ui large horizontal statistic">
          <div className="value">{questions.length}</div>
          <h3 className="label">Number of Questions</h3>
        </div>
        <div className="ui three statistics">
          {/* agree count */}
          <div className=" green small statistic">
            <h3 className="label">Agreements</h3>
            <div className="value">{agreeCount}</div>
          </div>
          {/* neutral count */}
          <div className="blue small statistic">
            <h3 className="label">Neutral</h3>
            <div className="value">{neutralCount}</div>
          </div>
          {/* disagree count */}
          <div className="red small statistic">
            <h3 className="label">Disagreements</h3>
            <div className="value">{disagreeCount}</div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Dashboard;
