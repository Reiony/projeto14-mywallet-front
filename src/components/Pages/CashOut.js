import styled from "styled-components";


export default function CashOutRegistry() {
    return (
        <CashOutPage>
            <h3>Nova saída</h3>
            <Field>
                <input
                    placeholder="Valor"
                />
            </Field>
            <Field>
                <input
                    placeholder="Descrição"
                />
            </Field>
            <ConfirmButton>
                <h4>
                    Salvar saída
                </h4>
            </ConfirmButton>
        </CashOutPage >
    )
}

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
const ConfirmButton = styled.button`
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    margin-bottom:36px;
    border:none;
    cursor:pointer;
    h4{
        height: 23px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }
`
const CashOutPage = styled.form`
    width: 375px;
    height: 667px;
    display:flex;
    padding:25px;
    align-items: center;
    flex-direction: column;
    background: #8C11BE;
    h3{
        width: 326px;
        height: 31px;
        margin-bottom:40px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`