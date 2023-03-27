import { useState } from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function RoomForm(props: any) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [format, setFormat] = useState("");
  const [buyIn, setBuyIn] = useState("");

  const navigateForRoom = (e: any) => {
    e.preventDefault();
    navigate("/room");
  };
  return (
    <Container>
      <Title>
        <Text>Cadastro da Sala</Text>
      </Title>
      <form onSubmit={navigateForRoom}>
        <LabelName htmlFor="name">NOME DA SALA: </LabelName>
        <Name
          name="name"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <LabelFormat htmlFor="format">FORMATO: </LabelFormat>
        <Format
          name="format"
          required
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="holden">Texas Hold`em</option>
          <option value="draw">Five Card Draw</option>
        </Format>

        <LabelBuyIn htmlFor="BuyIn">BUY-IN: </LabelBuyIn>
        <BuyIn
          name="buy-in"
          required
          type="number"
          value={buyIn}
          onChange={(e) => setBuyIn(e.target.value)}
        ></BuyIn>
        <Buttons>
          <Cancel name="cancel">
            <IoClose size={25} color="#000000" opacity="0.3" />
          </Cancel>
          <Confirm name="confirm" type="submit">
            <IoCheckmark size={25} color="#000000" opacity="0.3" />
          </Confirm>
        </Buttons>
      </form>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Quicksand", sans-serif;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Quicksand", sans-serif;
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    opacity: 0.7;
    height: 100%;
    input,
    select {
      background: #222947;
      opacity: 0.7;
      border-radius: 13px;
      height: "8%";
      font-family: "Quicksand", sans-serif;
      color: #ffffff;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      width: 80%;
      margin-top: 2%;
    }
    label {
      margin-top: 7%;
      width: 80%;
    }
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;
const Text = styled.span`
  font-family: "Quicksand", sans-serif;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  opacity: 0.7;
`;
const LabelName = styled.label``;
const LabelFormat = styled.label``;
const LabelBuyIn = styled.label``;
const Name = styled.input``;
const Format = styled.select``;
const BuyIn = styled.input``;

const Buttons = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-around;
  height: 5%;
  margin-top: 15%;
`;
const Cancel = styled.button`
  background: #ea748a;
  border: none;
  border-radius: 18px;
  width: 40%;
  height: 200%;
  &:hover {
    cursor: pointer;
    filter: saturate(145%);
  }
`;
const Confirm = styled.button`
  background: #4ed2a0;
  border: none;
  border-radius: 18px;
  width: 40%;
  height: 200%;
  &:hover {
    cursor: pointer;
    filter: saturate(150%);
  }
`;