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

export const LogosContent = styled.div`
  padding: 2.5rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  img {
    max-width: 8rem;
    filter: saturate(0);

    &:nth-child(3) {
      filter: saturate(1);
    }

    @media screen and (max-width: 768px) {
      padding: 0.75rem 0.25rem;
      max-width: 6rem;
    }
  }
`;
