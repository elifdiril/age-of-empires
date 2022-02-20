import React from "react";
import AgeOfEmpires from "../../assets/AgeOfEmpires.png";
import "./home.scss";

function Home() {
  return (
    <div className="homeDiv">
      <span className="home-span">Home Page</span>
      <img src={AgeOfEmpires} alt="AgeOfEmpires" />
    </div>
  );
}

export default Home;
