import styled from "styled-components"
import questions from "./../questions"
import { InnerLayout } from "../styles/Layout"
import lines from "./../img/lines.svg"
import Question from "./Question"

export default function FAQsection() {
    return (
        <FAQStyled>
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span></h3>
                <p className="c-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate numquam unde adipisci quia. Perferendis rerum a voluptate id ut sequi, similique aspernatur saepe laudantium!</p>
                <div className="lines">
                    <img src={lines} alt="" />
                </div>
                <div className="questions-container">
                    {
                    questions.map(q => {
                        return <Question key={q.id} question={q.question} answer={q.answer}/>  
                    })
                    }
                </div>
            </InnerLayout>
        </FAQStyled>
    )
}

const FAQStyled = styled.section`
    .c-para {
        width: 60%;
        margin: 0 auto;
    }
    .questions-container {
        padding-top: 4rem;
    }
    .lines {
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }
`