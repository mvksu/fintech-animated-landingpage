import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import avatar1 from "../img/avatar1.svg"
import avatar2 from "../img/avatar2.svg"
import avatar3 from "../img/avatar3.svg"
import avatar4 from "../img/avatar4.svg"
import avatar5 from "../img/avatar5.svg"
import messaging from "../img/conversation.svg"
import bgCircle from "../img/circleBg.svg"

export default function MessagingSection() {
    return (
        <InnerLayout>
            <MessageStyled>
                <div className="message-container">
                    <div className="left-items">
                        <h4 className="secondary-heading">
                            We support you in 5 diffrent languages
                        </h4>
                        <p className="messaging-p">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, rerum odio consequatur facere libero natus saepe consequuntur aperiam minus nostrum delectus nulla. Accusantium, exercitationem quos!
                        </p>
                        <div className="images-container">
                            <img src={avatar1} alt="" className="image-1" />
                            <img src={avatar2} alt="" className="image-2" />
                            <img src={avatar3} alt="" className="image-3" />
                            <img src={avatar4} alt="" className="image-4" />
                            <img src={avatar5} alt="" className="image-5" />
                            <p>&nbsp; +21</p>
                        </div>
                        <img src={bgCircle} alt="" className="bgCircle" />
                    </div>
                    <div className="right-items">
                        <img src={messaging} alt="" />
                        <img src={bgCircle} alt="" className="bgCircle" />
                    </div>
                </div>
            </MessageStyled>
        </InnerLayout>
    )
}

const MessageStyled = styled.section`
    .message-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media screen and (max-width: 1347px) {
            grid-template-columns: 1fr;
            }
        
    }
    .left-items{
        position: relative;
        .messaging-p{
            padding: 2rem 0;
        }
        .images-container {
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5 {
                margin-left: -15px;
            }
        }
        .bgCircle {
            position: absolute;
            top: -10%;
            left: -5%;
            z-index: -1;
        }
    }
    .right-items{
        position: relative;
        display: flex;
        justify-content: center;
        .bgCircle {
            position: absolute;
            bottom: -10%;
            right: -10%;
            z-index: -1;
        }
        img:first-child {
            margin-top: 3rem;
            width: 80%;
        }
    }
`