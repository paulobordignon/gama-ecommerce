import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 10vh;
    background-color: #161B22;
    padding-inline: 5vh;
    font-size: 16px;
    font-weight: bold;
    
    @media(min-width: 1024px) {
        padding-inline: 25vh;
        font-size: 20px;
    }
`
