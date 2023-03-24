import styled from "styled-components";

import { Header } from "../../components/Header/Header";
import { RoomCard } from "../../components/RoomCard/RoomCard";

export function Home() {
  return (
    <Container>
      <Header />
      <Title>
        <Text>Rooms</Text>
      </Title>
      <RoomCard />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 95px;
  background-color: #222947;
  height: 100vh;
  width: 100%;
`;

const Title = styled.div``;

const Text = styled.span``;
