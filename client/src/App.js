import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import "./App.css";

//redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </section>
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
