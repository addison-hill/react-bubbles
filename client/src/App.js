import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <Link className="link" to="/">Login</Link>
          <Link className="link" to="/bubble-page">Bubble Page</Link>
        </nav>
        <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubble-page" component={BubblePage} />
        <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
