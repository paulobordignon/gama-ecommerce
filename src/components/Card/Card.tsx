import { Button, Card } from './styles'
import { ICard } from './types';

export function POCard({pokemon}: ICard) {
  return (
    <Card>
      <img
        src={pokemon?.sprites?.front_default}
        height={75}
        width={75}
      />
      {pokemon.name}
      <Button onClick={() => {console.log('buyed')}}>Buy</Button>
    </Card>
  )
}
