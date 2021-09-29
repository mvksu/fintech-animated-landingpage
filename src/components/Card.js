import styled from "styled-components"
import cardimg from "./../img/creditcard.svg"
import check from "./../img/check.svg"
import checkdisabled from "./../img/check-disabled.svg"
import active from "./../img/active.svg"
import inactive from "./../img/inactive.svg"

export default function Card({ account, price, text }) {
    return (
        <CardStyled>
            <h4>{account}</h4>
            <h3>${price} <span className="smaller">/m</span></h3>
            <p>{text}</p>
            <button>Get Started</button>
            <div className="card-container">
                <img src={cardimg} alt="" />
            </div>
            <div className="plan-container">
                <img src={active} alt="" />
                <img src={inactive} alt="" />
            </div>
            <ul>
                <li><img src={check} alt="" />10 free local transfers</li>
                <li><img src={check} alt="" />Free ATM withdrawals in Dollar</li>
                <li><img src={check} alt="" />Free payments to others Draft account</li>
                <li><img src={check} alt="" />Prepaid debit cards</li>
                <li><img src={check} alt="" />Virtual cards</li>
                <li><img src={checkdisabled} alt="" />Priority 24/7 support</li>
                <li><img src={checkdisabled} alt="" />Exchange 24 currencies</li>
                <li><img src={checkdisabled} alt="" />Multi user access</li>
            </ul>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    background-color: white;
    border-radius: 60px;
    border: 1px solid var(--border-colour);
    color: black;
    width: 500px;
    padding: 2rem;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1640px) {
                margin-bottom: 2rem;
                width: 90%;
            }
    button {
        cursor: pointer;
        padding: 1rem 1.4rem;
        border-radius: 20px;
        background-color: white;
        border: 0.8px solid black;
        margin-bottom: 2rem;
        font-size: inherit;
        &:hover {
            background-color: var(--purple-primary);
            color: white;
        }
    }
    .plan-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        margin: 1rem 0;
    }
    h4{
        font-size: 3rem;
        margin-top: 1.5rem;
    }
    h3{
        font-size: 2rem;
        margin-top: 2rem;
        .smaller {
        font-size: 70%;
    }
    }
    p {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .card-container {
        padding-top: 1rem;
        img{
            width: 75%;
        }
    }
    ul {
        li {
        padding: 0.6rem 0;
        img {
            margin-right: 0.3rem;
            width: 24px;
        }
        &:nth-child(6) {
            color: #B7B7B7;
        }
        &:nth-child(7) {
            color: #B7B7B7;
        }
        &:nth-child(8) {
            color: #B7B7B7;
        }
    }
    
}
`