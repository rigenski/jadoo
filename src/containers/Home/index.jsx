import React, { Fragment } from "react";
import BookTrip from "../../components/BookTrip";
import Destinations from "../../components/Destinations";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Logos from "../../components/Logos";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import Subscribe from "../../components/Subscribe";
import Testimonials from "../../components/Testimonials";

function Home(props) {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Destinations></Destinations>
      <BookTrip></BookTrip>
      <Testimonials></Testimonials>
      <Logos></Logos>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </Fragment>
  );
}

export default Home;
