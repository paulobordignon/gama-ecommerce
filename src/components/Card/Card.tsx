import { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card } from './styles'
import { ICard } from './types';
import { RootStore } from '@src/store';
import { setNewItem } from "@src/store/modules/cart";

export const POCard = forwardRef<HTMLDivElement, ICard>(({pokemon}: ICard, ref) => {
  const [wasBought, setWasBought] = useState<boolean>(false)
  const cartItems = useSelector((store: RootStore) => store.cartReduce)
  const dispatch = useDispatch()

  useEffect(() => {
    cartItems.filter(cartItem => {
      if (cartItem.name == pokemon.name){
        setWasBought(true);
      }
    })
  }, [])

  return (
    <Card ref={ref}>
      <img
        src={pokemon?.sprites?.front_default}
        height={75}
        width={75}
      />
      {pokemon.name}
      <Button
        disabled={wasBought}
        onClick={() => {
          dispatch(setNewItem({
            name: pokemon.name, 
            url: pokemon?.sprites?.front_default
          })); 
          setWasBought(true);
        }}
      >
        {wasBought? 'In cart' : 'Buy'}
      </Button>
    </Card>
  )
})
