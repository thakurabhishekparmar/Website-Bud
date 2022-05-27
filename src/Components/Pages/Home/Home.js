import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./home.css";
import homepage from '../../Pages/homepage.jpg';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1> WELCOME!!!</h1>
      <p>Click to check the progress...</p>
      <button type="button" class="btn btn-primary">Get Started</button>
      <img src={homepage}></img>
    </div>

  );
};

export default Home;


