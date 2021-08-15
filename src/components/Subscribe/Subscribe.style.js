import styled from "styled-components";
import FormLetter from "./../../assets/img/section/subscribe/form-letter.svg";
import Decore from "./../../assets/img/section/subscribe/decore.svg";
import Decore2 from "./../../assets/img/section/subscribe/decore2.svg";
import Decore3 from "./../../assets/img/section/subscribe/decore3.svg";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  background-image: url(${Decore3});
  background-repeat: no-repeat;
  background-position: bottom right 10%;
  background-size: 8rem;

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

export const Icon = styled.div`
  position: relative;
  right: 0;

  .wrapper {
    position: absolute;
    background: linear-gradient(201.65deg, #747def 10.27%, #5e3be1 100%);
    padding: 0.75rem;
    border-radius: 50%;
    right: -1rem;
    top: -1rem;

    @media screen and (max-width: 768px) {
      padding: 0.5;
      right: 1rem;
      top: -1.25rem;
    }

    svg {
      width: 2rem;
      height: 2rem;

      @media screen and (max-width: 768px) {
        width: 1.375rem;
        height: 1.375rem;
      }
    }
  }
`;

export const SubscribeContent = styled.div`
  padding: 4rem 16%;
  display: flex;
  justify-content: justify-between;
  align-items: center;
  text-align: center;
  /* background-color: #f9f7fe; */
  background-color: #e4d9ff;
  flex-direction: column;
  border-top-left-radius: 5rem;
  border-bottom-right-radius: 1.5rem;
  background-image: url(${Decore}), url(${Decore2});
  background-repeat: no-repeat, no-repeat;
  background-position: bottom left 1rem, top right;
  background-size: 18rem, 12rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 6%;
    border-top-left-radius: 3rem;
    border-bottom-right-radius: 1rem;
    background-position: bottom left 0.6rem, top right;
    background-size: 14rem, 8rem;
  }

  .title {
    font-family: "Poppins", sans-serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: #5e6282;
    margin-bottom: 6rem;

    @media screen and (max-width: 768px) {
      font-size: 1.375rem;
      margin-bottom: 4rem;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  .form__input {
    font-family: "Montserrat", sans-serif;
    font-size: 0.875rem;
    padding: 1rem 2rem;
    padding-left: 4rem;
    border-radius: 0.5rem;
    border: none;
    margin-right: 0.875rem;
    width: 100%;
    background-image: url(${FormLetter});
    background-repeat: no-repeat;
    background-position: 2rem;

    @media screen and (max-width: 768px) {
      width: auto;
      padding-left: 2.5rem;
      margin-right: 0;
      margin-bottom: 0.75rem;
      background-position: 0.75rem;
    }
  }

  .form__btn {
    font-family: "Open Sans", sans-serif;
    font-size: 0.875rem;
    padding: 1rem 2rem;
    box-sizing: border-box;
    border: none;
    color: #fff;
    border-radius: 0.5rem;
    background: linear-gradient(180deg, #ff946d 0%, #ff7d68 100%);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(0.96);
    }
  }
`;
