import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/";
import { View } from "./pages/Vizualizar/";
import { Cadastrar } from "./pages/Cadastrar/";
import { Editar } from "./pages/Editar/";
import { Menu } from "./components/Menu";
import { Login } from "./pages/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/listar" component={Home} />
          <Route path="/view" component={View} />
          <Route path="/cadastrar" component={Cadastrar} />
          <Route path="/editar" component={Editar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
