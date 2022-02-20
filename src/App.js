import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/index";
import UnitDetail from "./pages/UnitDetail";
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
          <Route
            path="/unit/:id"
            element={
              <div>
                <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                />
                <UnitDetail />
              </div>
            }
          />
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
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
