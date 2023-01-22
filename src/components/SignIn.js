import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();
    /* const {setToken} = useContext(AuthContext); */

    function ValidateAll(){
        const API = "http://localhost:5000/sign-in";
        const request = axios.post(API, {email, password});
        request.then((res) => {
            nav("/home")
            /* setToken(res.data) */
            console.log(res.data)
            localStorage.setItem("user",JSON.stringify(res.data))
        })
        request.catch(() => {
            alert("Informações de login inválidas. Verifique novamente")
            setEmail("")
            setPassword("");
        })
    }

    function ValidateLogin(event){
        event.preventDefault();
        ValidateAll();
    }
  return (
    <LoginContainer onSubmit={ValidateLogin}>
            <Logo>
                MyWallet
            </Logo>
            <Field>
                <input
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                />
            </Field>
            <Field>
                <input
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                />
            </Field>
            <Login>
                <h3>Entrar</h3>
            </Login>
            <Enter>
                <Link
                    to="/sign-up"
                    style={{ textDecoration: 'none' }}
                >
                    <h3>Primeira vez? Cadastre-se!</h3>
                </Link>
            </Enter>
        </LoginContainer>
  );
}

const Logo = styled.div`
    width: 147px;
    height: 50px;
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: white;
    margin-bottom:24px;
`

const LoginContainer = styled.form`
    width: 375px;
    height: 667px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #8C11BE;
`

const Field = styled.div`
    input{
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        padding-left:15px;
        border-radius: 5px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        border: none;
        display:flex;
        align-items: center;
        margin-bottom:13px;
        ::placeholder{
            color: black;
        }
    }
`

const Login = styled.button`
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom:36px;
    border:none;
    h3{
        width: 59px;
        height: 23px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }
`

const Enter = styled.div`
    h3{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        cursor: pointer;
    }
`