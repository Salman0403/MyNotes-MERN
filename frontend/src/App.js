import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./container/Login/Login";
import Signup from "./container/Signup/Signup";
import AllNotes from "./container/AllNotes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path={"/signup"} component={Signup} />
            <Route exact path={"/allNotes"} component={AllNotes} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
