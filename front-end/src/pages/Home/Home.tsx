import { useEffect, useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../../components/Header/Header';
import { RoomCard } from '../../components/RoomCard/RoomCard';
import { RoomForm } from '../../components/RoomForm/RoomForm';
import useRooms, { RoomInfo } from '../../hooks/api/useRoom';

export function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState<RoomInfo[]>([]);
  const { getRoomsInfo } = useRooms();
  const navigate = useNavigate();
  console.log(rooms);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const goToRoom = () => {
    navigate("/room");
  };

  useEffect(() => {
    async function fetchRoomsInfo() {
      const data = await getRoomsInfo();
      setRooms(data);
    }

    fetchRoomsInfo();
  }, [modalIsOpen]);

  if (!rooms) {
    return <span>loading</span>;
  }

  return (
    <Container>
      <Header />
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        // onAfterOpen={}
        onRequestClose={closeModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(000, 000, 000, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            height: "70%",
            backgroundColor: "#222947",
            border: "none",
            borderRadius: "4%",
          },
        }}
        contentLabel="Example Modal"
      >
        <RoomForm closeModal={closeModal} />
      </Modal>
      <Title>
        <Text>Rooms</Text>
      </Title>
      <RoomsContainer>
        <Rooms>
          {rooms.map((room, index) => {
            return (
              <RoomCard
                key={index}
                name={room.name}
                format={room.format_id}
                buyin={room.buyin}
                capacity={6}
                onClick={goToRoom}
              />
            );
          })}
        </Rooms>
      </RoomsContainer>
      <AddIcon onClick={openModal}>
        <IoIosAdd size={90} color="#4ED2A0" />
      </AddIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8% 0 8%;
  padding-top: calc(95px + 5%);
  background-color: #222947;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const Title = styled.div`
  width: 100%;
`;

const Text = styled.span`
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  opacity: 0.6;
`;

const RoomsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-content;
`;

const Rooms = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 5%;
  gap: 40px;
`;

const AddIcon = styled.div`
  border-radius: 50%;
  width: 115px;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: absolute;
  bottom: 60px;
  right: 80px;
  &:hover {
    cursor: pointer;
  }
`;
