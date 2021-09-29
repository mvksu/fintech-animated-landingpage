import styled from "styled-components"
import { InnerLayout } from "../styles/Layout";
import Card from "./Card";

export default function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-heading">An exceptional service, <span>at the right place</span></h3>
                <p>Start with our free plan and switch to the premium as you grow</p>
            </InnerLayout>
            <div className="card-container">
                <Card
                    account="Free"
                    price="0"
                    text={'Manage your business with a simple and efficient account'}
                />
                <Card
                    account="Premium"
                    price="10"
                    text={'Take another step into your financial freedom with a premium account'}
                />
                
            </div>
        </PaymentStyled>
    )
}

const PaymentStyled = styled.section`
    p{
        text-align: center;
    }
    .card-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;