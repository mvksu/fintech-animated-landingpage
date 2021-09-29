import styled from "styled-components"
import { InnerLayout } from "../styles/Layout"
import logo from '../img/logo.svg'

export default function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                        <img src={logo} alt="" />
                        <p>
                            Copyright @2021 MAndrzejczak <br />
                            All rights reserved
                        </p>
                    </div>
                    <ul className="bottom-nav">
                        <div className="links1">
                            <li>Team</li>
                            <li>Press</li>
                            <li>Fees</li>
                        </div>
                        <div className="links2">
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Affilites</li>
                        </div>
                        <div className="links3">
                            <li>Terms of use</li>
                            <li>Privacy Policy</li>
                            <li>Contact us</li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    height: 700px;
    padding: 0 18rem;
    @media screen and (max-width: 1210px) {
        padding: 0 9rem;
            }
    background-color: #DCE2F0;
    .footer-con {
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media screen and (max-width: 1210px) {
            grid-template-columns: 1fr;
            }
    }

    .logo-con {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        img {
            margin-right: 25px;
            width: 90px;
        }
        @media screen and (max-width: 1210px) {
            display: none;
            }
    }

    .bottom-nav {
        display: flex;
        justify-content: space-between;
        li {
            padding: 2rem 0;
            color: #16194F;
        }
    }
`