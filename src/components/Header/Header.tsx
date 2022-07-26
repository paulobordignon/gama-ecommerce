import { Link } from "react-router-dom";

import { Header, Logo } from './styles'

export function POHeader() {
  return (
    <Header>
      <Link to='/' style={{textDecoration: 'none'}}>
        <Logo> Poke e-commerce </Logo>
      </Link>
      <Link to='/cart'>
        <img
          src='cart-icon.png'
          height={30}
          width={30}
        />
      </Link>
    </Header>
  )
}
