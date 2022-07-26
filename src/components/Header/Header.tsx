import { Header, Logo } from './styles'

export function POHeader() {
  return (
    <Header>
      <Logo href='/'> Poke e-commerce </Logo>
      <img
        src='cart-icon.png'
        height={30}
        width={30}
        onClick={() => {console.log('test')}}
        style={{cursor: 'pointer'}}
      />
    </Header>
  )
}
