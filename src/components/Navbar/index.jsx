import React from "react";
import {
  Container,
  Header,
  Logo,
  Wrapper,
  Menu,
  Auth,
  Nav,
} from "./Navbar.style";
import LogoJadoo from "./../../assets/img/logo/logo-jadoo.svg";

function Navbar(props) {
  return (
    <Header>
      <Container>
        <Wrapper>
          <Logo src={LogoJadoo} />
          <Menu>
            <Nav>
              <ul className="list">
                <li>
                  <a href="#">Destinations</a>
                </li>
                <li>
                  <a href="#">Hotels</a>
                </li>
                <li>
                  <a href="#">Flights</a>
                </li>
                <li>
                  <a href="#">Bookings</a>
                </li>
              </ul>
            </Nav>
            <Auth>
              <a className="login" href="#">
                Login
              </a>
              <a className="signup" href="#">
                Sign up
              </a>
            </Auth>
          </Menu>
        </Wrapper>
      </Container>
    </Header>
  );
}

export default Navbar;
