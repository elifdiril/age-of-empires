import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/units">Units</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/unit/:id">jhf</Route>
          <Route path="/units">jhg</Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
