import styled from 'styled-components'

export const Main = styled.main`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 20vh);
    gap: 4vh;
    padding-block: 5vh;
    padding-inline: 5vh;

    @media(min-width: 1024px) {
        padding-inline: 25vh;
    }
`
