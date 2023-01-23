import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import { SignInPost } from "../services/AxiosAuth";

export default function SignIn() {
  const [form, setForm] = useState({});
  const nav = useNavigate();
  const { setToken } = useContext(AuthContext);

  function ValidateForm(e) {
    e.preventDefault();
    SignInPost(form).then((res) => {
      setToken(res.data.token);
      nav("/");
    });
  }

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  return (
    <Form>
      <Title>
        MyWallet
      </Title>
      <Field
        placeholder="E-mail"
        onChange={(e) =>
          handleForm({
            name: e.target.name,
            value: e.target.value,
          })
        }
        type="email"
        required
      ></Field>
      <Field
        placeholder="Senha"
        onChange={(e) =>
          handleForm({
            name: e.target.name,
            value: e.target.value,
          })
        }
        type="password"
        required
      ></Field>
      <Login onClick={ValidateForm}>
        <h3>Entrar</h3>
      </Login>
      <Enter>
        <Link to="/sign-up" style={{ textDecoration: "none" }}>
          <h3>Primeira vez? Cadastre-se!</h3>
        </Link>
      </Enter>
    </Form>
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

const Field = styled.input`
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
      color: black;
    }
`;

const Login = styled.button`
  width: 326px;
  height: 46px;
  background: #a328d6;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
  border: none;
  h3 {
    width: 59px;
    height: 23px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
`;

const Enter = styled.div`
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
