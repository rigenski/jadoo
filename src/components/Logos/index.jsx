import React from "react";
import { Container, Section, LogosContent } from "./Logos.style";
import Axon from "./../../assets/img/section/logos/logo-axon.png";
import Jetstar from "./../../assets/img/section/logos/logo-jetstar.png";
import Expedia from "./../../assets/img/section/logos/logo-expedia.png";
import Qantas from "./../../assets/img/section/logos/logo-qantas.png";
import Alitalia from "./../../assets/img/section/logos/logo-alitalia.png";

function Logos() {
  return (
    <Section>
      <Container>
        <LogosContent>
          <img src={Axon} alt="axon logos" />
          <img src={Jetstar} alt="jetstar logos" />
          <img src={Expedia} alt="expedia logos" />
          <img src={Qantas} alt="qantas logos" />
          <img src={Alitalia} alt="alitalia logos" />
        </LogosContent>
      </Container>
    </Section>
  );
}

export default Logos;
