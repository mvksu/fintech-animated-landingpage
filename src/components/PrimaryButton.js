import styled from "styled-components"


export default function PrimaryButton(props) {
    return (
        <ButtonStyled>
            {props.name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background-color: var(--accent-pink);
    padding: 0.8rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 25px;
    outline: none;
    border: none;
`