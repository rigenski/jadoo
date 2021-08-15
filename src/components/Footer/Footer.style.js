import styled from "styled-components";

export const FooterSection = styled.footer`
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

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CompanyDesc = styled.div`
  display: block;
  flex-basis: 20%;
  margin-bottom: 1rem;

  .company__title {
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    font-weight: 500;

    @media screen and (max-width: 1024px) {
      font-size: 2rem;
    }
  }

  .company__desc {
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;

    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`;

export const NavColumns = styled.div`
  display: flex;
`;

export const NavRow = styled.div`
  display: block;
  margin-left: 2rem;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: auto;
  }

  .nav__title {
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
  }

  .nav__list {
    list-style: none;

    .nav__item {
      a {
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        transition: all 0.3s;

        &:hover {
          color: #df6951;
        }

        @media screen and (max-width: 768px) {
          font-size: 0.875rem;
        }
      }
    }
  }
`;

export const Outbound = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Social = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 1rem;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    margin: 0;
  }

  .social__item {
    padding: 0.75rem;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(0.96);
    }

    &:nth-child(2) {
      margin: 0 0.75rem;
      background: conic-gradient(
        from 180deg at 50% 50%,
        #b8d2f1 0deg,
        #f289aa 60deg,
        #c68bf0 106.09deg,
        #d164da 153.75deg,
        #c963e8 221.25deg,
        #bfc2e8 258.75deg,
        #ffc999 288.75deg,
        #d0d8c9 315deg,
        #bad0f1 334.13deg,
        #ced8cb 358.97deg,
        rgba(255, 255, 255, 0) 360deg
      );
    }

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;

export const Discover = styled.div`
  display: block;

  .title {
    font-family: "Poppins", sans-serif;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .desc {
    display: flex;

    .card {
      display: flex;
      background-color: #080809;
      padding: 0.5rem 0.75rem;
      border-radius: 2rem;
      margin-right: 0.5rem;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        transform: scale(0.96);
      }

      .card__image {
        height: 1rem;
      }

      .card__desc {
        height: 1rem;
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
