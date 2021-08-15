import styled from "styled-components";
import DecoreBackground from "./../../assets/img/section/hero/decore-background.svg";

export const Main = styled.main`
  padding-top: 5.5rem;
  background-image: url(${DecoreBackground});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 46%;

  @media screen and (max-width: 1024px) {
    background-size: 60%;
  }

  @media screen and (max-width: 768px) {
    background-size: 80%;
  }
`;
