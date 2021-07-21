import React, { Fragment } from "react";
import Destinations from "../../components/Destinations";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services/Index";

function Home(props) {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Destinations></Destinations>
    </Fragment>
  );
}

export default Home;
