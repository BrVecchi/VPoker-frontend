import { RiMoneyDollarCircleLine } from "react-icons/ri";
import styled from "styled-components";

import flushPoker from "../../assets/imgs/flushPoker.png";
import playerImg from "../../assets/imgs/playerImg.png";

export function Room() {
  return (
    <>
      <Container>
        <TableContainer>
          <Table>
            <TableInfos>
              <Pot>Pot: 6,485</Pot>
              <Cards>
                <CardImages src={flushPoker} />
              </Cards>
              <Bet>3,000</Bet>
            </TableInfos>
            <Player1>
              <Image>
                <PlayerImage src={playerImg} />
              </Image>
              <PlayerInfo>
                <PlayerName>Player1</PlayerName>
                <ChipsInfo>
                  <RiMoneyDollarCircleLine size={20} />
                  <ChipsValue>10.000</ChipsValue>
                </ChipsInfo>
              </PlayerInfo>
            </Player1>
            <Player2></Player2>
            <Player3></Player3>
            <Player4></Player4>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle, #222947 25%, #000000 125%);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(300px);
`;

const TableContainer = styled.div`
  width: 60%;
  height: 60%;
`;

const Table = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0c6744;
  border-radius: 50%;
  border: 25px solid #6d7922;
  position: relative;
`;

const Player1 = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 90px;
  border: 5px solid #4ed2a0;
  background: rgba(0, 0, 0, 0.06);
  position: absolute;
  top: -20%;
`;
const Player2 = styled.div`
  width: 200px;
  height: 90px;
  border: 5px solid #4ed2a0;
  background: rgba(0, 0, 0, 0.06);
  position: absolute;
  bottom: -20%;
`;
const Player3 = styled.div`
  width: 200px;
  height: 90px;
  border: 5px solid #4ed2a0;
  background: rgba(0, 0, 0, 0.06);
  position: absolute;
  left: -20%;
`;
const Player4 = styled.div`
  width: 200px;
  height: 90px;
  border: 5px solid #4ed2a0;
  background: rgba(0, 0, 0, 0.06);
  position: absolute;
  right: -20%;
`;

const Image = styled.div`
  width: 90px;
  height: 90px;
  border: 10px solid rgba(0, 0, 0, 0);
`;
const PlayerImage = styled.img`
  width: 100%;
`;
const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PlayerName = styled.span`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;
const ChipsInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 25px;
  background-color: #ffffff;
  opacity: 0.95;
  border-radius: 10px;
`;
const ChipsValue = styled.span`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: black;
  margin-left: 5px;
`;

const Pot = styled.span`
  background-color: rgba(0, 0, 0, 0.3);
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;

const Cards = styled.div`
  width: 250px;
  height: 70px;
`;

const CardImages = styled.img`
  width: 100%;
`;

const Bet = styled.span`
  background-color: rgba(0, 0, 0, 0.3);
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  margin-top: 10px;
`;

const TableInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
