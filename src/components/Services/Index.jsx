import React from "react";
import {
  Container,
  Section,
  ServicesContent,
  Title,
  Category,
} from "./Services.style";
import SateliteDish from "./../../assets/img/services-category-satelite-dish.png";

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
              <img src={SateliteDish} alt="" className="card-image" />
              <h4 className="card-title">Calculated Weather</h4>
              <p className="card-desc">
                Built Wicker longer
                <br />
                admire do barton
                <br />
                vanity itself do in it
              </p>
            </div>
            <div className="card">
              <img src={SateliteDish} alt="" className="card-image" />
              <h4 className="card-title">Calculated Weather</h4>
              <p className="card-desc">
                Built Wicker longer
                <br />
                admire do barton
                <br />
                vanity itself do in it
              </p>
            </div>
            <div className="card">
              <img src={SateliteDish} alt="" className="card-image" />
              <h4 className="card-title">Calculated Weather</h4>
              <p className="card-desc">
                Built Wicker longer
                <br />
                admire do barton
                <br />
                vanity itself do in it
              </p>
            </div>
            <div className="card">
              <img src={SateliteDish} alt="" className="card-image" />
              <h4 className="card-title">Calculated Weather</h4>
              <p className="card-desc">
                Built Wicker longer
                <br />
                admire do barton
                <br />
                vanity itself do in it
              </p>
            </div>
          </Category>
        </ServicesContent>
      </Container>
    </Section>
  );
}

export default Services;
