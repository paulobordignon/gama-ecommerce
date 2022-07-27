import { setNewItem } from "@src/store/modules/cart";
import { forwardRef } from "react";
import { useDispatch } from "react-redux";

import { Button, Card } from './styles'
import { ICard } from './types';

export const POCard = forwardRef<HTMLDivElement, ICard>(({pokemon}: ICard, ref) => {
  const dispatch = useDispatch();

  return (
    <Card ref={ref}>
      <img
        src={pokemon?.sprites?.front_default}
        height={75}
        width={75}
      />
      {pokemon.name}
      <Button 
        onClick={() => dispatch(setNewItem({
          name: pokemon.name, 
          url: pokemon?.sprites?.front_default
        }))}
      >
        Buy
      </Button>
    </Card>
  )
})
