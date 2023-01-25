import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const nav = useNavigate();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      nav("/sign-in");
    }
    const getuserToken = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("http://localhost:5000/transactions", getuserToken)
      .then((res) => {
        setUser(res.data.user);
        setTransactions(res.data.transactions);
        let preBalance = 0;
        transactions.forEach((transaction) => {
          if (transaction.type === "entry") {
            preBalance += Number(transaction.value);
          } else {
            preBalance -= Number(transaction.value);
          }
        });
        setBalance(preBalance);
      })
      .catch((err) => {
        console.log(err);
      });
  },);

  return (
    <HomeContainer>
      <UserTop>
        <h3>Olá, {user.name}</h3>
        <ion-icon
          name="exit-outline"
          onClick={() => nav("/sign-in")}
        ></ion-icon>
      </UserTop>
      <RegistryEntries>
        {transactions.length === 0 ? (
          <NoEntries>
            <p>Não há registros de entrada ou saída</p>
          </NoEntries>
        ) : (
          <>
            <Entries>
              {transactions.map((transaction, i) => (
                <Entry key={i}>
                  <div className="registryDate">
                    <h2>{transaction.createdAt.slice(0, 5)}</h2>
                  </div>
                  <div className="registryDetails">
                    <h3>{transaction.description}</h3>
                    <Teste type={transaction.type}>{transaction.value}</Teste>
                  </div>
                </Entry>
              ))}
            </Entries>
            <Balance value={balance}>
              <h3>SALDO</h3>
              <h4>R$ {balance.toFixed(2)}</h4>
            </Balance>
          </>
        )}
      </RegistryEntries>
      <Operations>
        <Link to="/new-entry" style={{ textDecoration: "none" }}>
          <CashIn>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h3>Nova entrada</h3>
          </CashIn>
        </Link>
        <Link to="/new-exit" style={{ textDecoration: "none" }}>
          <CashOut>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <h3>Nova saída</h3>
          </CashOut>
        </Link>
      </Operations>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 375px;
  height: 667px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #8c11be;
`;

const UserTop = styled.div`
  display: flex;
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

const RegistryEntries = styled.div`
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 13px;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const NoEntries = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 180px;
    height: 46px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
`;

const Entries = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 24px 12px 24px 12px;
  gap: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px lightgrey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: lightgrey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(150, 150, 150);
  }
`;

const Entry = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
  .registryDate {
    display: flex;
    h2 {
      width: 48px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-right: 8px;
      color: #c6c6c6;
    }
  }
  .registryDetails {
    display: flex;
    justify-content: space-between;
    width: 100%;
    h3 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    }
  }
`;

const Teste = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: ${(props) => (props.type === "entry" ? "green" : "red")};
`;

const Balance = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 12px 24px 12px;
  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
  }
  h4 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: ${(props) => (props.value >= 0 ? "green" : "red")};
  }
`;

const Operations = styled.div`
  display: flex;
  width: 326px;
  justify-content: space-between;
  align-items: center;
`;

const CashIn = styled.div`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  h3 {
    width: 64px;
    height: 40px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }
  ion-icon {
    color: white;
    width: 25px;
    height: 25px;
  }
`;

const CashOut = styled.div`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  h3 {
    width: 64px;
    height: 40px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }
  ion-icon {
    color: white;
    width: 25px;
    height: 25px;
  }
`;
