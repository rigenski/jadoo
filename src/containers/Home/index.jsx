import React, { Fragment } from "react";
import BookTrip from "../../components/BookTrip";
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
      {/* <BookTrip></BookTrip> */}
    </Fragment>
  );
}

export default Home;
