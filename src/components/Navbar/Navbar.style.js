import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
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
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 1.6rem;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
      margin: 0 0.4rem;
      padding: 0 0.8rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: #212832;
    }
  }
`;

export const Auth = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.4rem;

  a {
    text-decoration: none;
    padding: 0 0.8rem;
    font-family: "Roboto", sans-serif;
    color: #212832;
  }

  .signup {
    margin-left: 0.8rem;
    border: 2px solid #212832;
    border-radius: 0.4rem;
    padding: 0.4rem 1.2rem;
  }
`;
