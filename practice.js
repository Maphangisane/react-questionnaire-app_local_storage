<div>
  <div class="ui menu">
    <a class="active item">Tab 1</a>
    <a class="item">Tab 2</a>
    <a class="item">Tab 3</a>
  </div>
  <div class="ui segment active tab">Tab 1 Content</div>
</div>;

//
<div>
  <div class="ui grid">
    <div class="four wide column">
      <div class="ui fluid vertical tabular menu">
        {/* <a class="active item">Tab 1</a> */}
        {/* use links to redirect to Homapage*/}
        <Link to="/QuestionnaireTable" className="active item">
          Homepage
        </Link>

        {/* <a class="item">Tab 2</a> */}
        {/* redirect to create questions */}
        <Link to="/create" className="item">
          Create
        </Link>

        {/* <a class="item">Tab 3</a> */}
        {/* redirect to fill questionnaire */}
        <Link to="/questionnaires" className="item">
          Questionnaires
        </Link>
      </div>
    </div>
    <div class="stretched twelve wide column">
      <div class="ui bottom attached segment active tab">Tab 1 Content</div>
    </div>
  </div>
</div>;

//
<div className="ui header fixed menu">
  {/* <img className="ui image" src={} alt="logo" /> */}
  {/* side nav columns */}
  <div className="three wide column">
    <div className="">
      {/* use links to redirect to Homapage*/}
      <Link to="/QuestionnaireTable" className="active item">
        Homepage
      </Link>
      {/* use links to redirect to dashboard*/}
      <Link to="/" className=" active item">
        Dashboard
      </Link>
      {/* redirect to create questions */}
      <Link to="/create" className="item">
        Create
      </Link>
      {/* redirect to fill questionnaire */}
      <Link to="/questionnaires" className="item">
        Questionnaires
      </Link>
    </div>
  </div>
</div>;

//

// App ui - returns the routes to create,dashboard and questionnaire
return (
  <div className="App ui container">
    {/* 3 routes */}{" "}
    <Router>
      {/* navigation - side navigation container*/}
      <div class="ui fixed menu">
        <div class="ui container">
          <div class="ui fluid vertical tabular menu">
            {/* <a class="active item">Tab 1</a> */}
            {/* use links to redirect to Homapage*/}

            <Link to="/" className="header item">
              ::before
              <img className="logo" src={logo} alt="logo.png"></img>
              Dashboard
            </Link>

            {/* <a class="item">Tab 2</a> */}
            {/* redirect to create questions */}
            <Link to="/create" className="item">
              Create
            </Link>

            {/* <a class="item">Tab 3</a> */}
            {/* redirect to fill questionnaire */}
            <Link to="/questionnaires" className="item">
              Questionnaires
            </Link>
          </div>
        </div>
        <div class="stretched twelve wide column">
          <div class="ui bottom attached segment active tab">Tab 1 Content</div>
        </div>
      </div>

      <Routes>
        {/* home */}
        {/* <Route
          // pass questions and counts for displaying

          path="/" // redirects to dashboard
          element={
            <div className="ui header">
              <h2>Welcome to Create Questionnaire App</h2>
              <p>Click Create to create new questionnaire </p>
            </div>
          }
        /> */}
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
          path="/questionnaires"
          element={
            // pass questions and functions to set counts and options
            <Questionnaires
              questions={questions}
              responses={responses}
              setResponses={setResponses}
              setAgreeCount={setAgreeCount}
              setNeutralCount={setNeutralCount}
              setDisagreeCount={setDisagreeCount}
            />
          }
        />
        {/* questionaires */}
        <Route
          path="/QuestionnaireTable"
          element={
            // pass questions and functions to set counts and options
            <QuestionnaireTable
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
    </Router>
  </div>
);
