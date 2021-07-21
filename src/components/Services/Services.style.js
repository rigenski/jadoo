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

export const ServicesContent = styled.div`
  padding: 2.4rem 0;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

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

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .card {
    text-align: center;
  }

  .card:nth-child(2) {
    padding: 2.4rem;
    border-radius: 1.6rem;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
      0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
      0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
      0px 20px 13px rgba(0, 0, 0, 0.01),
      0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
      0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  }

  .card-image {
    margin-bottom: 1.2rem;
  }

  .card-title {
    font-family: "Open Sans", sans-serif;
    color: #1e1d4c;
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  .card-desc {
    font-family: "Poppins", sans-serif;
    color: #5e6282;
  }
`;
