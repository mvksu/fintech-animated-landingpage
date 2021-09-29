import styled from "styled-components"
import SecondaryButton from "./SeondaryButton"
import phone from "./../img/phone.svg"
import ring1 from "./../img/ring_orange.svg"
import message1 from "./../img/message_pink.svg"
import message2 from "./../img/message_blue.svg"
import { Fade } from "react-reveal"

export default function HeaderContent() {
    return (
        <HeaderContentStyled>
            <Fade left>
                <div className="left-content">
                    <div className="left-text-container">
                        <h1>Smart banking for freelancers</h1>
                        <p className="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex exercitationem eaque expedita! Cum provident, velit illum numquam vel praesentium animi maxime, dolor</p>
                        <SecondaryButton name="Register Now" />
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className="right-content">
                    <img src={phone} alt="" className="phone" />
                    <img src={ring1} alt="" className="ring1" />
                    <img src={message1} alt="" className="message_pink" />
                    <img src={message2} alt="" className="message_blue" />
                </div>
            </Fade>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
    
    .left-content {
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white {
            color: white;
        }
        h1 {
            font-size: 4rem;
            font-weight: 600;
            @media screen and (max-width: 700px) {
                font-size: 3rem;
            }
        }

        .white {
            line-height: 1.8rem;
        }
    }

    .right-content {
        position: relative;
        display: flex;
        justify-content: center;
        object-fit: contain;
        .phone{
            width: 80%;
        }
        .ring1 {
            position: absolute;
            bottom: 10%;
            right: 10%;
            left: auto;
            animation: move 13s infinite;
            transform: all .5s ease-in-out;
        }
        .message_pink {
            position: absolute;
            top: 0;
            right: 10%;
            left: auto;
            animation: move 3s infinite;
            transform: all .5s ease-in-out;
        }
        .message_blue {
            position: absolute;
            bottom: 15%;
            left: 0;
            animation: move 3.3s infinite;
            animation-delay: 0.3s;
            transform: all .5s ease-in-out;
        }
    }

    //Header Animations
    .message1 {
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(10deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
        }
    }
`