import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./container/Login/Login";
import Signup from "./container/Signup/Signup";
import AllNotes from "./container/AllNotes";

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
