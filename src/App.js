import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/index";
import Units from "./pages/Units/index";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
            <li className="app-li">
              <Link to="/units">Units</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/unit/:id">jhf</Route>
          <Route
            path="/units"
            element={
              <div>
                <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                />
                <Units />
              </div>
            }
          ></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
