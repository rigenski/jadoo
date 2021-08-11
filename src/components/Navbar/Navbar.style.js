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

  @media screen and (max-width: 768px) {
    margin-left: 2%;
    margin-right: 2%;
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #ff946d;
    right: -100%;
    top: 72px;
    text-align: center;
    transition: all 0.3s;
  }

  &.show {
    right: 0%;
  }
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    li {
      @media screen and (max-width: 768px) {
        display: block;
        margin-top: 3.6rem;
        line-height: 30px;
      }
    }

    a {
      text-decoration: none;
      margin: 0 0.4rem;
      padding: 0 0.8rem;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      color: #212832;

      @media screen and (max-width: 768px) {
        color: #fff;
      }
    }
  }
`;

export const Auth = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
  }

  a {
    text-decoration: none;
    padding: 0 0.8rem;
    font-family: "Roboto", sans-serif;
    color: #212832;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      color: #fff;
      display: block;
      margin-top: 3.6rem;
      line-height: 30px;
    }
  }

  .signup {
    margin-left: 0.8rem;
    border: 2px solid #212832;
    border-radius: 0.4rem;
    padding: 0.4rem 1.2rem;

    @media screen and (max-width: 768px) {
      border: 2px solid #fff;
      margin-left: 0;
    }
  }
`;

export const Drawer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }

  .menu {
    color: #000;
    height: 2rem;
  }
`;
