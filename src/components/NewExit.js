import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
export default function NewExit() {
  const { token } = useContext(AuthContext);
  const [form, setForm] = useState({});
  const nav = useNavigate();
  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
      type: "exit",
    });
  }

  function saveTransaction(e) {
    e.preventDefault();
    axios
    .post("http://localhost:5000/transactions",form, {headers: { Authorization: `Bearer ${token}`}})
    .then((res)=>{
        nav("/")
    })
  }
  return (
    <FormExit>
      <UserTop><h3>Nova Saída</h3></UserTop>
      <Field
        placeholder="Descrição"
        name="description"
        type="text"
        onChange={(e) =>
          handleForm({
            name: e.target.name,
            value: e.target.value,
          })
        }
      ></Field>
      <Field
        placeholder="Valor"
        name="value"
        type="number"
        onChange={(e) =>
          handleForm({
            name: e.target.name,
            value: e.target.value,
          })
        }
      ></Field>
      <RegistrySave onClick={saveTransaction}><h3>Salvar saída</h3></RegistrySave>
    </FormExit>
  );
}

const FormExit = styled.form`
  width: 375px;
  height: 667px;
  display: flex;
  padding-top: 25px;
  padding-left: 25px;
  flex-direction: column;
  background: #8c11be;
`;
const UserTop = styled.div`
  width: 326px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
  ion-icon {
    width: 24px;
    height: 24px;
    color: white;
  }
`;

const RegistrySave = styled.button`
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
    width: 165px;
    height: 23px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #ffffff;
  }
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
