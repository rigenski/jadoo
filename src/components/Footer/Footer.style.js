import styled from "styled-components";

export const FooterSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;

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

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const CompanyDesc = styled.div`
  display: block;

  .company__title {
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
  }

  .company__desc {
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
  }
`;

export const NavColumns = styled.div`
  display: flex;
`;

export const NavRow = styled.div`
  display: block;

  .nav__title {
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .nav__list {
    list-style: none;

    .nav__item {
      a {
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
      }
    }
  }
`;

export const Copyright = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
`;
