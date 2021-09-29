import styled from "styled-components";
import bg from '../img/bg.svg'
import HeaderContent from "./HeaderContent";
import Navigation from "./Navigation";

function Header() {
    return (
        <HeaderStyled>
            <div className="header-content">
                <Navigation />
                <HeaderContent />
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content {
        padding: 0 20rem;
        @media screen and (max-width: 1550px) {
        padding: 0rem 16rem;
    }
    @media screen and (max-width: 1400px) {
        padding: 0rem 12rem;
    }
    @media screen and (max-width: 1215px) {
        padding: 0rem 8rem;
    }
    @media screen and (max-width: 1100px) {
        padding: 0rem 4rem;
    }
    @media screen and (max-width: 990px) {
        padding: 0rem 2rem;
    }
    }
`;

export default Header;