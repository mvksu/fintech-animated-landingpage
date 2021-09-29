import styled from "styled-components"
import { InnerLayout } from "../styles/Layout"
import card from "../img/creditcard.svg"

export default function CardSection() {
    return (
        <StyledCardSection>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            One card for all your payments
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolores itaque, quam autem similique rerum quas deleniti, debitis aut quasi voluptas temporibus ea. Nisi, ex.
                        </p>
                    </div>
                    <div className="card-right">
                        <img src={card} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </StyledCardSection>
    )
}

const StyledCardSection = styled.div`
    .card-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media screen and (max-width: 1340px) {
                grid-template-columns: 1fr;
            }
        .card-right {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 100%;
            }
        }
        .card-left {
            margin-right: 5rem; 
            @media screen and (max-width: 1340px) {
                margin-bottom: 5rem;
            }
        }
    }
`