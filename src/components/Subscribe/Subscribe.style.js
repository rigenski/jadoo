import styled from "styled-components";
import FormLetter from "./../../assets/img/section/subscribe/form-letter.svg";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 1024px) {
    margin-bottom: 2rem;
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

  @media screen and (max-width: 1024px) {
    padding: 6rem 8%;
  }

  .title {
    font-family: "Poppins", sans-serif;
    font-size: 1.75rem;
    color: #5e6282;
    margin-bottom: 6rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;
      margin-bottom: 4rem;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }

  .form-input {
    font-family: "Open Sans", sans-serif;
    font-size: 0.875rem;
    padding: 1rem 2rem;
    padding-left: 4rem;
    border-radius: 0.5rem;
    border: none;
    margin-right: 1rem;
    width: 100%;
    background-image: url(${FormLetter});
    background-repeat: no-repeat;
    background-position: 8%;

    @media screen and (max-width: 1024px) {
      width: auto;
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  .form-btn {
    font-family: "Open Sans", sans-serif;
    font-size: 0.875rem;
    padding: 1rem 2rem;
    box-sizing: border-box;
    border: none;
    color: #fff;
    border-radius: 0.5rem;
    background: linear-gradient(180deg, #ff946d 0%, #ff7d68 100%);
    cursor: pointer;
  }
`;
