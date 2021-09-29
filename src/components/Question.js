import { useState } from "react"
import styled from "styled-components"
import plus from "./../img/plus.svg"
import minus from "./../img/minus.svg"
import { Fade } from 'react-reveal'

export default function Question({ question, answer }) {
    const [toggle, setToggle] = useState(false)
    return (
        <Fade left cascade>
            <QuestionStyled onClick={() => setToggle(!toggle)}>
                <div className="q-con">
                    <div className="toggler">
                        <h4>{question}</h4>
                        <button onClick={() => setToggle(!toggle)}>
                            {
                                toggle ?
                                    <img src={plus} alt="" />
                                    :
                                    <img src={minus} alt="" />
                            }
                        </button>
                    </div>
                    {toggle && <p>{answer}</p>}
                </div>

            </QuestionStyled>
        </Fade>
    )
}

const QuestionStyled = styled.div`
    background-color: #fff;
    margin: 1rem 0;
    padding: 1.4rem 1rem;
    color: black;
    border-radius: 25px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    .toggler {
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .4s ease-in-out;
        button {
            background-color: transparent;
            outline: none;
            cursor: pointer;
            border: none;
        }
    }
    h4 {
        font-size: 1.3rem;
    }
`