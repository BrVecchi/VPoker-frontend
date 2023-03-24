import { ImSpades } from "react-icons/im";
import styled from "styled-components";

export function Logo() {
  return (
    <Container>
      <ImSpades size="53px" color="#FFFFFF" />
      <Text>V.POKER</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.span`
  margin-left: 30px;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 53px;
  letter-spacing: 0.23em;
  color: #ffffff;
  opacity: 0.7;
  font-family: "Quicksand", sans-serif;
`;
