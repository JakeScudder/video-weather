import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Showcase from "./components/Showcase";
import Menu from "./components/Menu";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Showcase} />
        <Menu />
      </div>
    </Router>
  );
};

export default App;
