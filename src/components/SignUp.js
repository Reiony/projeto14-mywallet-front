import styled from "styled-components";
import { Link } from "react-router-dom";
import { SignUpPost } from "../services/AxiosAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({});
  const nav = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function sendForm(e) {
    e.preventDefault();
    SignUpPost(form).then((res) => {
      nav("/sign-in");
    });
  }

  return (
    <>
      <Form>
        <Title>MyWallet</Title>
        <Input
          placeholder="Digite seu nome"
          name="name"
          type="text"
          onChange={(e) => {
            handleForm({ name: e.target.name, value: e.target.value });
          }}
        ></Input>
        <Input
          placeholder="Digite seu e-mail"
          name="name"
          type="text"
          onChange={(e) => {
            handleForm({ name: e.target.name, value: e.target.value });
          }}
        ></Input>
        <Input
          placeholder="Digite sua senha"
          name="password"
          type="password"
          onChange={(e) => {
            handleForm({ name: e.target.name, value: e.target.value });
          }}
        ></Input>
        <Input
          placeholder="Confirme sua senha"
          name="confirmpassword"
          type="password"
          onChange={(e) => {
            handleForm({ name: e.target.name, value: e.target.value });
          }}
        ></Input>
        <Register onClick={sendForm}>
          <h3> Cadastrar </h3>
        </Register>
        <SignIn>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Já tem uma conta? entre agora!</h3>
          </Link>
        </SignIn>
      </Form>
    </>
  );
}

const Title = styled.div`
  width: 147px;
  height: 50px;
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: white;
  margin-bottom: 24px;
`;

const Form = styled.form`
  width: 375px;
  height: 667px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #8c11be;
`;

const Input = styled.input`
  width: 326px;
  height: 58px;
  background: #ffffff;
  padding-left: 15px;
  border-radius: 5px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  border: none;
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  ::placeholder {
    color: grey;
  }
`;

const Register = styled.button`
  width: 326px;
  height: 46px;
  background: #a328d6;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
  border: none;
  cursor: pointer;
  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
`;

const SignIn = styled.div`
  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    cursor: pointer;
  }
`;
