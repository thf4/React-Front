import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { View } from "./pages/Vizualizar/index";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/view" component={View} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
