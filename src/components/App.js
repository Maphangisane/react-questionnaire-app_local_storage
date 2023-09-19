// packages
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// styles
import "./App.css";
// components
import Create from "./Create";
import Dashboard from "./Dashboard";
import Questionnaire from "./Questionnaire";
import Sidebar from "./Sidebar";

function App() {
  // 5 global states
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [agreeCount, setAgreeCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [disagreeCount, setDisagreeCount] = useState(0);

  return (
    <Router>
      <Sidebar>
        <Routes>
          {/* Dashboard */}
          <Route
            // pass questions and counts for displaying
            exact // matches exact path
            path="/" // redirects to dashboard
            element={
              // component to display

              <Dashboard
                // props passed down

                questions={questions}
                agreeCount={agreeCount}
                neutralCount={neutralCount}
                disagreeCount={disagreeCount}
              />
            }
          />
          {/* create */}
          <Route
            path="/create"
            element={
              // pass questions and the function to set
              <Create questions={questions} setQuestions={setQuestions} />
            }
          />
          {/* questionaires */}

          <Route
            path="/questionnaire"
            element={
              // pass questions and the function to set
              <Questionnaire
                questions={questions}
                responses={responses}
                setResponses={setResponses}
                setAgreeCount={setAgreeCount}
                setNeutralCount={setNeutralCount}
                setDisagreeCount={setDisagreeCount}
              />
            }
          />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
