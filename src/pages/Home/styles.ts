import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 10vh;
    padding-inline: 5vh;
    font-size: 16px;
    font-weight: bold;
    
    @media(min-width: 1024px) {
        padding-inline: 25vh;
        font-size: 20px;
    }
`
