import React from "react";
import {
  Container,
  Section,
  ServicesContent,
  Title,
  Category,
} from "./Services.style";
import SateliteDish from "./../../assets/img/section/services/category-satelite-dish.png";
import Plane from "./../../assets/img/section/services/category-plane.png";
import Microphone from "./../../assets/img/section/services/category-microphone.png";
import PowerSuply from "./../../assets/img/section/services/category-power-suply.png";

function Services(props) {
  return (
    <Section>
      <Container>
        <ServicesContent>
          <Title>
            <h4 className="title">CATEGORY</h4>
            <h1 className="desc">We Offer Best Services</h1>
          </Title>
          <Category>
            <div className="card">
              <img src={SateliteDish} alt="" className="card__image" />
              <h4 className="card__title">Calculated Weather</h4>
              <p className="card__desc">
                Built Wicker longer
                <br />
                admire do barton
                <br />
                vanity itself do in it
              </p>
            </div>
            <div className="card">
              <img src={Plane} alt="" className="card__image" />
              <h4 className="card__title">Best Flight</h4>
              <p className="card__desc">
                Engrossed listening.
                <br />
                Park gate sell they west
                <br />
                hard for the.
              </p>
            </div>
            <div className="card">
              <img src={Microphone} alt="" className="card__image" />
              <h4 className="card__title">Local Events</h4>
              <p className="card__desc">
                Barton vanity itself do
                <br />
                in it. Preferd to men it
                <br />
                engrossed listening.
              </p>
            </div>
            <div className="card">
              <img src={PowerSuply} alt="" className="card__image" />
              <h4 className="card__title">Customization</h4>
              <p className="card__desc">
                We deliver outsourced
                <br />
                aviation services for
                <br />
                military customers
              </p>
            </div>
          </Category>
        </ServicesContent>
      </Container>
    </Section>
  );
}

export default Services;
