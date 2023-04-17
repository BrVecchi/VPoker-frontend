import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import { Logo } from "../../assets/Logo/Logo";
import { signUp } from "../../services/userApi";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast("As senha devem ser iguais");
    } else {
      try {
        await signUp(name, email, password);
        toast("Inscrito com sucesso! Por favor, faça login.");
        navigate("/sign-in");
      } catch (error) {
        toast("Não foi possível fazer o cadastro!");
      }
    }
  };

  return (
    <Container>
      <Title>
        <Logo />
      </Title>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">NOME DO USUÁRIO: </label>
        <input
          name="name"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">E-MAIL: </label>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Password">SENHA: </label>
        <input
          name="password"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="Confirm">CONFIRME A SENHA: </label>
        <input
          name="Confirm"
          required
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button>
          <Confirm name="confirm" type="submit">
            CADASTRAR
          </Confirm>
        </Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Quicksand", sans-serif;
  justify-content: center;
  align-items: center;
  background-color: #262626;

  form {
    background-color: #262626;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: "Quicksand", sans-serif;
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    opacity: 0.7;
    width: 60%;
    height: 60%;
    input {
      background: #262626;
      opacity: 0.7;
      opacity: 0.8;
      border: 2px solid #ffffff;
      border-radius: 17px;
      font-family: "Quicksand", sans-serif;
      color: #ffffff;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      width: 80%;
      height: 10%;
    }
    label {
      width: 80%;
    }
  }
`;
const Title = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b64358;
  margin-bottom: 5%;
`;

const Button = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-around;
  height: 10%;
  margin-top: 15%;
`;

const Confirm = styled.button`
  background: #b64358;
  border: none;
  border-radius: 31px;
  width: 60%;
  height: 100%;
  font-family: "Quicksand", sans-serif;
  color: #fff0f0;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  &:hover {
    cursor: pointer;
    filter: saturate(150%);
  }
`;
