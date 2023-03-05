import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AllNotes from "./components/AllNotes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path={"/signup"} component={Signup}  />
          <Route exact path={"/allNotes"} component={AllNotes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
