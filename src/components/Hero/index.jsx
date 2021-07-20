import React from "react";
import {
  Section,
  Container,
  HeroContent,
  Desc,
  Image,
  CTA,
} from "./Hero.style";
import HeroImage from "./../../assets/img/hero-image.png";

function Hero(props) {
  return (
    <Section>
      <Container>
        <HeroContent>
          <Desc>
            <h4 className="tagline">BEST DESTINATIONS AROUND THE WORLD</h4>
            <h1 className="heading">
              Travel, enjoy
              <br />
              and live a new and
              <br /> full life
            </h1>
            <p className="desc">
              Built Wicket longer admire do barton vanity itself do in it.{" "}
              <br />
              Preferred to sportsmen it engrossed listerning. Par gate
              <br /> sell they west hand for the.
            </p>
            <CTA>
              <button className="cta">Find out more</button>
              <div className="play-demo">
                <button className="play-button">
                  <div className="play-button-icon"></div>
                </button>
                Play Demo
              </div>
            </CTA>
          </Desc>
          <Image>
            <img src={HeroImage} />
          </Image>
        </HeroContent>
      </Container>
    </Section>
  );
}

export default Hero;
