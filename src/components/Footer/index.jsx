import React from "react";
import {
  CompanyDesc,
  Container,
  Copyright,
  FooterSection,
  NavColumns,
  NavRow,
  Wrapper,
} from "./Footer.style";

function Footer() {
  return (
    <FooterSection>
      <Container>
        <Wrapper>
          <CompanyDesc>
            <h1 className="company__title">Jadoo.</h1>
            <p className="company__desc">
              Book your trip in minute, get full Control for much longer.
            </p>
          </CompanyDesc>
          <NavColumns>
            <NavRow>
              <h4 className="nav__title">Company</h4>
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#">About</a>
                </li>
                <li className="nav__item">
                  <a href="#">Contact</a>
                </li>
                <li className="nav__item">
                  <a href="#">More</a>
                </li>
              </ul>
            </NavRow>
          </NavColumns>
        </Wrapper>
        <Copyright>All rights reserved@jadoo.co</Copyright>
      </Container>
    </FooterSection>
  );
}

export default Footer;
