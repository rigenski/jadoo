import styled from "styled-components";
import HeroDescDecore from "./../../assets/img/hero-desc-decore.png";
import HeroImagePlane from "./../../assets/img/hero-image-plane.png";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  margin-left: 8%;
  margin-right: 8%;
  max-width: 1280px;

  @media screen and (max-width: 1024px) {
    margin-left: 4%;
    margin-right: 4%;
  }
`;

export const HeroContent = styled.div`
  padding: 2.4rem 0;
  display: flex;
  justify-content: space-between;
`;

export const Desc = styled.div`
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  width: 50%;

  .tagline {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-size: 1.2rem;
    color: #df6951;
    margin: 0 0 0.8rem 0;
  }

  .heading {
    font-family: "Volkhov", serif;
    color: #181e4b;
    font-size: 4.6rem;
    margin: 0 0 1.6rem 0;
    background-image: url(${HeroDescDecore});
    background-repeat: no-repeat;
    background-position: 13rem 4.8rem;
  }

  .desc {
    font-family: "Poppins", sans-serif;
    color: #5e6282;
    font-size: 1rem;
    margin: 0 0 1.6rem 0;
  }
`;

export const CTA = styled.div`
  display: flex;

  .cta {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    padding: 0.8rem 1.2rem;
    border: none;
    color: white;
    background-color: #f1a501;
    border-radius: 0.4rem;
    margin-right: 2.4rem;
    box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.25);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(0.96);
      box-shadow: 0px 15px 25px rgba(241, 165, 1, 0.2);
    }
  }

  .play-demo {
    display: flex;
    color: #5e6282;
    font-family: "Poppins", sans-serif;
    align-items: center;
  }

  .play-button {
    border: none;
    background-color: #df6951;
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50%;
    margin-right: 0.8rem;
    box-shadow: 0px 15px 30px rgba(223, 105, 81, 0.4);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(0.96);
      box-shadow: 0px 12px 25px rgba(223, 105, 81, 0.3);
    }
  }

  .play-button-icon {
    margin-left: 0.8rem;
    width: 0;
    height: 0;
    border-top: 0.4rem solid transparent;
    border-left: 0.8rem solid #fff;
    border-bottom: 0.4rem solid transparent;
  }
`;

export const Image = styled.div`
  display: block;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    background-image: url(${HeroImagePlane}), url(${HeroImagePlane});
    background-repeat: no-repeat, no-repeat;
    background-position: 6rem 2rem, 31rem 4.2rem;
  }
`;
