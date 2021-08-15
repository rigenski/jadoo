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
import { Main } from "./Home.style";

function Home() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Main>
        <Hero />
        <Services />
        <Destinations />
        <BookTrip />
        <Testimonials />
        <Logos />
        <Subscribe />
      </Main>
      <Footer />
    </Fragment>
  );
}

export default Home;
