import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ConceptContainer from "./container/ConceptContainer";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/concept" component={ConceptContainer} />
          <Redirect to="/concept" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
