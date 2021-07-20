import React, { Fragment } from "react";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

function Home(props) {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Hero></Hero>
    </Fragment>
  );
}

export default Home;
