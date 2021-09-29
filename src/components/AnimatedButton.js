import styled from 'styled-components'
import arrow from './../img/arrow.svg'
import blob1 from './../img/blob_bottom.svg'
import blob2 from './../img/blob_top.svg'

export default function AnimatedButton({ name }) {
    return (
        <AnimatedButtonStyled>
            {name}
            <img src={arrow} alt="" className="arrow"/>
            <img src={blob1} alt="" className="blob1"/>
            <img src={blob2} alt="" className="blob2"/>
        </AnimatedButtonStyled>
    )
}

const AnimatedButtonStyled = styled.button`
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
    position: relative;
    overflow: hidden;
    transition: all .4s ease-in-out;
    .arrow {
        padding-left: 1rem;
        transition: all .4s ease-in-out;
    }

    &:hover {
        .blob1 {
            transform: translateX(200px);
        }
        .blob2 {
            transform: translateX(-200px);
        }
        .arrow {
            margin-left: 1rem;
        }
    }

    .blob1, .blob2 {
        transition: all .4s ease-in-out;
        position: absolute;
    }
    .blob1 {
        bottom: 0;
    }
    .blob2 {
        top: 0;
        right: 0;
    }
`