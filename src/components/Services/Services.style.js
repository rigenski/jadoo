import styled from "styled-components";
import Decore1 from "./../../assets/img/section/services/decore1.svg";
import Decore2 from "./../../assets/img/section/services/decore2.svg";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
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

export const ServicesContent = styled.div`
  padding: 2.5rem 0;
  background-image: url(${Decore2});
  background-repeat: no-repeat;
  background-position: top 2rem right;
  background-size: 8rem;

  @media screen and (max-width: 768px) {
    background-position: top 3.2rem right;
    background-size: 6rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  .title {
    font-family: "Poppins", sans-serif;
    color: #5e6282;
    margin-bottom: 0.5rem;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  .desc {
    font-family: "Volkhov", serif;
    font-size: 2.5rem;

    @media screen and (max-width: 768px) {
      font-size: 1.625rem;
    }
  }
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  /* background-image: url(${Decore1});
  background-repeat: no-repeat;
  background-position: top 15rem left 28%;
  background-size: 4rem;

  @media screen and (max-width: 768px) {
    background-position: top 3.2rem right;
    background-size: 6rem;
  } */

  .card {
    text-align: center;
    padding: 2.5rem;
    margin-bottom: 1.5rem;

    &:nth-child(2) {
      border-radius: 2rem;
      background-color: #fff;
      box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
        0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
        0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
        0px 20px 13px rgba(0, 0, 0, 0.01),
        0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
        0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);

      @media screen and (max-width: 768px) {
        border-radius: 1rem;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 1.375rem;
      margin-bottom: 0.625rem;
    }

    .card__image {
      width: 50%;
    }

    .card__title {
      font-family: "Open Sans", sans-serif;
      color: #1e1d4c;
      font-size: 1.25rem;
      margin-bottom: 0.5rem;

      @media screen and (max-width: 768px) {
        font-size: 0.875rem;
      }
    }

    .card__desc {
      font-family: "Poppins", sans-serif;
      color: #5e6282;
      font-size: 1rem;

      @media screen and (max-width: 768px) {
        font-size: 0.75rem;
      }
    }
  }
`;
