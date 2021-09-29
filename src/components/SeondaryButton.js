import styled from "styled-components"
import arrow from "./../img/arrow.svg"

export default function SecondaryButton(props) {
    return (
        <SecondaryButtonStyled>
            {props.name}
            <img src={arrow} alt="" />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 0.8rem 2.2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 25px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
        padding-left: 1rem;
    }
`