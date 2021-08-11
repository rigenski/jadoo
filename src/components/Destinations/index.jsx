import React from "react";
import {
  Section,
  Container,
  DestinationsContent,
  Title,
  Destination,
} from "./Destinations.style";
import RomeItaly from "./../../assets/img/section/destination/destination-rome.png";
import NavigationVector from "./../../assets/img/section/destination/destination-navigation.svg";

function Destinations(props) {
  return (
    <Section>
      <Container>
        <DestinationsContent>
          <Title>
            <h4 className="title">Top Selling</h4>
            <h1 className="desc">Top Destinations</h1>
          </Title>
          <Destination>
            <div className="card">
              <img src={RomeItaly} alt="" className="card-image" />
              <div className="card-title">
                <p>Rome, Italy</p>
                <p>$5,42k</p>
              </div>
              <div className="card-desc">
                <img src={NavigationVector} alt="" />
                <p>10 Days Trip</p>
              </div>
            </div>
            <div className="card">
              <img src={RomeItaly} alt="" className="card-image" />
              <div className="card-title">
                <p>Rome, Italy</p>
                <p>$5,42k</p>
              </div>
              <div className="card-desc">
                <img src={NavigationVector} alt="" />
                <p>10 Days Trip</p>
              </div>
            </div>
            <div className="card">
              <img src={RomeItaly} alt="" className="card-image" />
              <div className="card-title">
                <p>Rome, Italy</p>
                <p>$5,42k</p>
              </div>
              <div className="card-desc">
                <img src={NavigationVector} alt="" />
                <p>10 Days Trip</p>
              </div>
            </div>
          </Destination>
        </DestinationsContent>
      </Container>
    </Section>
  );
}

export default Destinations;
