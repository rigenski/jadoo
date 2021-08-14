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

export const LogosContent = styled.div`
  padding: 2.5rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .image {
    max-width: 8rem;
    filter: saturate(0);
    padding: 1rem 0.75rem;

    &:nth-child(3) {
      filter: saturate(1);
      box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
        0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
        0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
        0px 20px 13px rgba(0, 0, 0, 0.01),
        0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
        0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
    }

    @media screen and (max-width: 768px) {
      max-width: 6rem;
    }
  }
`;
