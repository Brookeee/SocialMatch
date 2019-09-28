import React from "react";
import app from "./base";

import "./home.css";

const Home = () => {
  return (
    <>

      {<button onClick={() => app.auth().signOut()}>Sign Out </button>}
    </>
  );
};

export default Home;
