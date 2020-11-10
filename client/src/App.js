import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Route exact path="/" component={Landing} />
    <section className="container">
      <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </section>
  </BrowserRouter>
);

export default App;
