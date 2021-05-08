import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/";
import { View } from "./pages/Vizualizar/";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/view" component={View} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
