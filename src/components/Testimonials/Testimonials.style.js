import styled from "styled-components";

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

export const TestimonialsContent = styled.div`
  padding: 2.5rem 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Desc = styled.div`
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  width: 44%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  .title {
    font-family: "Poppins", sans-serif;
    color: #5e6282;
    margin-bottom: 0.5rem;
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
