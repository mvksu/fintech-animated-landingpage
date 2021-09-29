import styled from "styled-components"

export default function ChartStats({name, amount}) {
    return (
        <ChartStatsStyled>
                <p>{name}</p>
                <h4>{amount}</h4>
        </ChartStatsStyled>
    )
}

const ChartStatsStyled = styled.div`
    background-color: white;
    border-radius: 60px;
    border: 1px solid var(--border-colour);
    width: 48%;
    height: 15rem;
    padding: 2rem;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    h4{
        font-size: 3rem;
        color: var(--purple-primary)
    }

`