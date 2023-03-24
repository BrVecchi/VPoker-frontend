import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiPokerHand } from "react-icons/gi";
import { TbPokerChip } from "react-icons/tb";
import styled from "styled-components";

export function RoomCard() {
  return (
    <Container>
      <IconContainer>
        <GiPokerHand color="#FFFFFF" size="98px" />
      </IconContainer>
      <Data>
        <Texts>
          <Format>Hold'en</Format>
          <Name>Nome da Sala</Name>
        </Texts>
        <Buyin>
          <TbPokerChip size="25px" color="#3F3F3F" opacity="0.7" />
          <span>10.000</span>
        </Buyin>
      </Data>
      <Info>
        <AiOutlineInfoCircle size="21px" color="#3F3F3F" opacity="0.8" />
      </Info>
      <Places>4/6</Places>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #4ed2a0;
  border-radius: 31px;
  font-family: "Quicksand", sans-serif;
  width: 408px;
  height: 188px;
  position: relative;
  &:hover {
    cursor: pointer;
    filter: saturate(135%);
    /* filter: grayscale(135%); */
  }
`;
const IconContainer = styled.div`
  margin-left: 40px;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 30px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Format = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #3f3f3f;
  opacity: 0.9;
`;

const Name = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;

const Buyin = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 16px;
  width: 98px;
  height: 31.9px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #3f3f3f;
    opacity: 0.9;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
`;
const Places = styled.span`
  position: absolute;
  bottom: 10%;
  right: 5%;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #3f3f3f;
  opacity: 0.7;
`;
