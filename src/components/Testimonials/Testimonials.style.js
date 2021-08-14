import styled from "styled-components";

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

    @media screen and (max-width: 1024px) {
      font-size: 2rem;
    }
  }
`;
