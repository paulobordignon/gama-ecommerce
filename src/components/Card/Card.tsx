import { forwardRef } from "react";

import { Button, Card } from './styles'
import { ICard } from './types';

export const POCard = forwardRef<HTMLDivElement, ICard>(({pokemon}: ICard, ref) => {
  return (
    <Card ref={ref}>
      <img
        src={pokemon?.sprites?.front_default}
        height={75}
        width={75}
      />
      {pokemon.name}
      <Button onClick={() => {console.log('buyed')}}>Buy</Button>
    </Card>
  )
})
