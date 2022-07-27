import styled from 'styled-components'

export const Main = styled.main`
    display: grid;
    padding-block: 5vh;
    padding-inline: 5vh;

    @media(min-width: 1025px) {
        padding-inline: 25vh;
    }
`

export const Nav = styled.nav`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 20vh);
    gap: 4vh;
`

export const Button = styled.button`
    display: grid;
    justify-self: center;
    margin-bottom: 4vh;
    background-color: #60c657;
    width: 25vh;
    padding-block: 1vh;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    white-space: nowrap;
`
