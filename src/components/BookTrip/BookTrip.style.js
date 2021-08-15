import styled from "styled-components";
import Decore1 from "./../../assets/img/section/book-trip/decore1.png";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 1024px) {
    margin-bottom: 1.75rem;
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

export const BookTripContent = styled.div`
  padding: 2.5rem 0;
  display: flex;
  justify-content: space-between;

  background-image: url(${Decore1});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 24rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    background-position: top 22rem right 10%;
    background-size: 20rem;
  }
`;

export const Desc = styled.div`
  display: block;
  width: 44%;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
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
    margin-bottom: 2.5rem;

    @media screen and (max-width: 1024px) {
      font-size: 2rem;
    }
  }
`;

export const Values = styled.ul`
  display: block;

  .values__item {
    list-style: none;
    display: flex;
    color: #5e6282;
    align-items: center;
    margin-bottom: 1.5rem;

    &:nth-child(1) {
      .values__icon {
        background-color: #f0bb1f;
      }
    }

    &:nth-child(2) {
      .values__icon {
        background-color: #f15a2b;
      }
    }

    &:nth-child(3) {
      .values__icon {
        background-color: #006380;
      }
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 1rem;
    }

    .values__icon {
      max-height: 2.5rem;
      max-width: 2.5rem;
      padding: 1rem;
      border-radius: 1rem;

      @media screen and (max-width: 768px) {
        max-height: 2rem;
        max-width: 2rem;
        padding: 0.825rem;
        border-radius: 0.825rem;
      }
    }

    .values__body {
      margin-left: 1rem;

      .values__title {
        font-family: "Poppins", sans-serif;
        color: #5e6282;
        font-size: 1rem;

        @media screen and (max-width: 768px) {
          font-size: 0.875rem;
        }
      }

      .values__desc {
        font-family: "Poppins", sans-serif;
        font-size: 0.875rem;

        @media screen and (max-width: 768px) {
          font-size: 0.75rem;
        }
      }
    }
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);

  .card__image {
    object-fit: cover;
    border-radius: 1rem;
    width: 20rem;

    @media screen and (max-width: 1024px) {
      width: 18rem;
    }
  }

  .card__title {
    font-family: "Poppins", sans-serif;
    color: #080809;
    margin: 1rem 0 0.5rem;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  .card__desc {
    font-family: "Poppins", sans-serif;
    color: #5e6282;
    margin-bottom: 1rem;
    font-size: 0.875rem;

    @media screen and (max-width: 76px) {
      font-size: 0.75rem;
    }
  }

  .card__label {
    display: flex;
    justify-content: space-between;

    .card__label_desc {
      display: flex;
      align-items: center;

      svg {
        height: 1rem;
        width: 1rem;
        margin-right: 1rem;
        color: black;

        @media screen and (max-width: 768px) {
          width: 0.875rem;
          height: 0.875rem;
        }
      }

      p {
        font-size: 1rem;
        font-family: "Poppins", sans-serif;
        color: #5e6282;

        @media screen and (max-width: 768px) {
          font-size: 0.875rem;
        }
      }
    }

    .card__label_icon {
      svg {
        height: 1rem;
        width: 1rem;

        @media screen and (max-width: 768px) {
          height: 0.875rem;
          width: 0.875rem;
        }
      }
    }
  }
`;

export const Option = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 1rem;

  li {
    text-align: center;
    padding: 0.5rem 0.75rem;
    background-color: #f5f5f5;
    margin-right: 0.5rem;
    border-radius: 50%;

    svg {
      width: 0.875rem;
      width: 0.875rem;
    }
  }
`;

export const Label = styled.div`
  display: flex;
  padding: 1rem;
  position: absolute;
  margin-top: 10rem;
  margin-left: 12rem;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  transition: all 0.3s;

  &:hover {
    transform: translate(0, -1rem);
  }

  @media screen and (max-width: 768px) {
    margin-left: 6rem;
  }

  .label__image {
    border-radius: 50%;
    margin-right: 1rem;
    width: 3.5rem;
    height: 3.5rem;
  }

  .label__body {
    .label__desc {
      font-size: 0.875rem;
      font-family: "Poppins", sans-serif;
      color: #5e6282;

      @media screen and (max-width: 768px) {
        font-size: 0.75rem;
      }
    }

    .label__title {
      font-family: "Poppins", sans-serif;
      color: #080809;
      font-size: 1rem;

      @media screen and (max-width: 768px) {
        font-size: 0.875rem;
      }
    }
  }

  .label__content {
    margin-top: 1rem;

    .label__content-title {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      margin-bottom: 0.25rem;

      @media screen and (max-width: 1024px) {
        font-size: 0.75rem;
      }

      .label__content-count {
        color: #8a79df;
      }
    }

    .label__content-progress {
      width: 6rem;
      height: 0.375rem;
      background-color: #f5f5f5;
      border-radius: 2rem;

      .label__content-progress--completed {
        width: 3rem;
        height: 0.375rem;
        background-color: #8a79df;
        border-radius: 2rem;
      }
    }
  }
`;
