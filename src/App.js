import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Docentes from "./components/Docentes";
import Pedidos from "./components/Pedidos";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/Docentes">
            <Docentes />
          </Route>
          <Route path="/Pedidos">
            <Pedidos />
          </Route>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
