import styled from "styled-components";

import { Logo } from "../../assets/Logo/Logo";

export function Header() {
  return (
    <Container>
      <LogoBox>
        <Logo />
      </LogoBox>
      <Auth>
        <SignUp>
          <span>sign-up</span>
        </SignUp>
        <SignIn>
          <span>sign-in</span>
        </SignIn>
      </Auth>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 95px;
  background-color: #b64358;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  margin-left: 40px;
`;

const Auth = styled.div`
  margin-right: 20px;
  display: flex;
`;

const SignUp = styled.div`
  padding: 8px;

  span {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.155em;
    color: #ffffff;
    opacity: 0.4;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;
const SignIn = styled.div`
  background: #ffffff;
  opacity: 0.7;
  border-radius: 9px;
  padding: 8px;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  span {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.155em;
    color: #b64358;
    opacity: 0.8;
  }
`;
