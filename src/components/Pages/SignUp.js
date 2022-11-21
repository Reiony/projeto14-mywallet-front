import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Cadastro() {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()
    const nav = useNavigate();
    const API = "http://localhost:5000/sign-up"
    function ValidateSignUp(event) {
        event.preventDefault()
        if (password === confirm){
            const userinfo = {
                name: user,
                email: email,
                password: password
            }
            const promise = axios.post (API, userinfo);
            promise.then(()=>nav("/"));
            promise.catch((error)=>console.log(error));
        } else {
            alert ("As senhas digitadas não coincidem. Tente novamente.")
        }

    }
    return (
        <FormSignUp onSubmit={ValidateSignUp}>
            <Logo>
                MyWallet
            </Logo>
            <Field>
                <input
                    placeholder="Nome"
                    onChange={(e) => setUser(e.target.value)}
                    type="name"
                    required
                />
            </Field>
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
            <Field>
                <input
                    placeholder="Confirme a senha"
                    onChange={(e) => setConfirm(e.target.value)}
                    type="confirm"
                    required
                />
            </Field>
            <Register><h3>Cadastrar</h3></Register>
            <SignIn>
                <Link
                    to="/"
                    style={{ textDecoration: 'none' }}>
                    <h3>Já tem uma conta? Entre agora!</h3>
                </Link>
            </SignIn>
        </FormSignUp>
    )
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
const FormSignUp = styled.form`
    width: 375px;
    height: 667px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #8C11BE;
`
const Field = styled.input`
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

const Register = styled.div`
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

const SignIn = styled.div`
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