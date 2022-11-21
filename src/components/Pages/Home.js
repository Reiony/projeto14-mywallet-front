import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const user= localStorage.getItem("user");
    const userOBJ = JSON.parse(user);
    const nav = useNavigate();
    const [transactions, setTransactions] = useState ([])
    function UserLogout (e){
        e.preventDefault();
        nav("/")
    }
    return (
        <MainPage>
            <UserTop>
                <h3>Olá, {userOBJ}</h3>
                <ion-icon name="exit-outline" onClick={UserLogout}></ion-icon>
            </UserTop>
            <RegistryEntries >
                {transactions.length===0 ?
                <div><p>Não há registros de entrada ou saída</p></div> : 
                <>
                </>
                }
            </RegistryEntries>
            <Operations>
                <Link to="/cash-in" style={{ textDecoration: 'none' }}>
                <CashIn >
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <h3>Nova entrada</h3>
                </CashIn>
                </Link>
                <Link to="/cash-out" style={{ textDecoration: 'none' }}>
                <CashOut>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <h3>Nova saída</h3>
                </CashOut>
                </Link>
            </Operations>
        </MainPage>
    )
}

const MainPage = styled.div`
    width: 375px;
    height: 667px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #8C11BE;
`

const UserTop = styled.div`
    display:flex;
    width:326px;
    justify-content: space-between;
    align-items: center;
    margin-bottom:26px;
    h3{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    ion-icon{
        width:24px;
        height:24px;
        color:white;
    }
`

const RegistryEntries = styled.div`
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom:13px;
    div{
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        p{
        width: 180px;
        height: 46px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
        }
    }
`

const Operations = styled.div`
    display:flex;
    width:326px;
    justify-content:space-between;
    align-items:center;
    
`

const CashIn = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:10px;
    cursor:pointer;
    h3{
        width: 64px;
        height: 40px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
    ion-icon{
        color: white;
        width:25px;
        height:25px;
    }
`

const CashOut = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:10px;
    cursor:pointer;
    h3{
        width: 64px;
        height: 40px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
    ion-icon{
        color: white;
        width:25px;
        height:25px;
    }
`