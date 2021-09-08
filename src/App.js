import "./App.css";
import Countries from "./containers/Countries";
import Languages from "./containers/Languages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <div>
            <Link className="App-nav-elem" to="/">
              Home
            </Link>
            <Link className="App-nav-elem" to="/countries">
              Countries
            </Link>
            <Link className="App-nav-elem" to="/languages">
              Languages
            </Link>
          </div>
        </nav>

        <Switch>
          <Route path="/countries">
            <Countries />
          </Route>
          <Route path="/languages">
            <Languages />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <h2>Welcome to LandRyna app!</h2>
      <div>Use navigation bar to go to Countries or Languages. Good luck!</div>
    </>
  );
};

export default App;
