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

export const DestinationsContent = styled.div`
  padding: 2.5rem 0;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 3rem;

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

export const Destination = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .card {
    text-align: center;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
      0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
      0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
      0px 20px 13px rgba(0, 0, 0, 0.01),
      0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
      0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
    margin-bottom: 1.5rem;
    border-radius: 1.5rem;

    @media screen and (max-width: 768px) {
      border-radius: 1rem;
    }

    .card-image {
      width: 16rem;
      height: 18rem;
      object-fit: cover;
      border-top-left-radius: 1.5rem;
      border-top-right-radius: 1.5rem;

      @media screen and (max-width: 768px) {
        width: 10rem;
        height: 12rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }
    }

    .card-title {
      display: flex;
      justify-content: space-between;
      font-family: "Poppins", sans-serif;
      padding: 1rem;
      padding-bottom: 0.5rem;
      color: #5e6282;
      font-size: 1rem;

      @media screen and (max-width: 768px) {
        font-size: 0.875rem;
        padding: 0.75rem;
        padding-bottom: 0.375rem;
      }
    }

    .card-desc {
      display: flex;
      font-family: "Poppins", sans-serif;
      padding: 0 1rem 1.5rem;
      color: #5e6282;
      font-size: 0.825rem;

      @media screen and (max-width: 768px) {
        font-size: 0.75rem;
        padding: 0 0.75rem 1rem;
      }

      .card-desc_icon {
        margin-right: 0.5rem;

        svg {
          width: 0.825rem;

          @media screen and (max-width: 768px) {
            width: 0.75rem;
          }
        }
      }
    }
  }
`;
