import { Card } from './styles'

export function POCard() {
  return (
    <Card>
      <img
        src='cart-icon.png'
        height={30}
        width={30}
        onClick={() => {console.log('test')}}
        style={{cursor: 'pointer'}}
      />
      teste
    </Card>
  )
}
