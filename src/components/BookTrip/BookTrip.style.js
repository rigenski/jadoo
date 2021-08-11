import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 6.4rem;
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
  padding: 2.4rem 0;
  display: flex;
  justify-content: space-between;
`;

export const Desc = styled.div`
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  width: 44%;

  .title {
    font-family: "Poppins", sans-serif;
    color: #5e6282;
    margin-bottom: 0.8rem;
  }

  .desc {
    font-family: "Volkhov", serif;
    font-size: 2.4rem;
    margin-bottom: 2.4rem;
  }
`;

export const Values = styled.div`
  display: flex;

  li {
    list-style: none;
    display: flex;
    color: #5e6282;
    align-items: center;
    margin-bottom: 1.2rem;
  }

  .values-image {
    background-color: #f0bb1f;
    max-height: 2.4rem;
    max-width: 2.4rem;
    padding: 1rem;
    border-radius: 1.2rem;
  }

  .values-body {
    margin-left: 1.2rem;
  }

  .values-title {
    font-family: "Poppins", sans-serif;
    color: #5e6282;
    margin-bottom: 0%.8rem;
  }

  .values-desc {
    font-family: "Poppins", sans-serif;
  }
`;
