import React from "react";
import {
  Section,
  Container,
  BookTripContent,
  Desc,
  Values,
} from "./BookTrip.style";
import Vector from "./../../assets/img/section/book-trip/desc-values-vector.svg";
import WaterSport from "./../../assets/img/section/book-trip/desc-values-water-sport.svg";
import TaxiCar from "./../../assets/img/section/book-trip/desc-values-taxi-car.svg";

function BookTrip(props) {
  return (
    <Section>
      <Container>
        <BookTripContent>
          <Desc>
            <h4 className="title">Easy and Fast</h4>
            <h1 className="desc">Book Your Next Trip in 3 easy Steps</h1>
            <Values>
              <ul>
                <li>
                  <img className="values-image" src={Vector} />
                  <div className="values-body">
                    <h4 className="values-title">Choose Destination</h4>
                    <p className="values-desc">
                      Lorem ipsum dolor sit amet, consectetur adipsing elit.
                      Urna, tortor tempus.
                    </p>
                  </div>
                </li>
                <li>
                  <img className="values-image" src={WaterSport} />
                  <div className="values-body">
                    <h4 className="values-title">Make Payment</h4>
                    <p className="values-desc">
                      Lorem ipsum dolor sit amet, consectetur adipsing elit.
                      Urna, tortor tempus.
                    </p>
                  </div>
                </li>
                <li>
                  <img className="values-image" src={TaxiCar} />
                  <div className="values-body">
                    <h4 className="values-title">
                      Reach Airport on Selected Date
                    </h4>
                    <p className="values-desc">
                      Lorem ipsum dolor sit amet, consectetur adipsing elit.
                      Urna, tortor tempus.
                    </p>
                  </div>
                </li>
              </ul>
            </Values>
          </Desc>
        </BookTripContent>
      </Container>
    </Section>
  );
}

export default BookTrip;
