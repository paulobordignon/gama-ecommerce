import { useDispatch, useSelector } from 'react-redux';

import { POCard, POHeader } from '@src/components'
import { Button, Main, Nav } from './styles'
import { RootStore } from '@src/store';
import { removeItems } from '@src/store/modules/cart';

export function Cart() {
  const cartItems = useSelector((store: RootStore) => store.cartReduce)
  const dispatch = useDispatch()

  return (
    <>
      <POHeader />
      <Main>
        <Button
          disabled={!cartItems.length}
          onClick={() => {
            dispatch(removeItems());
          }}
        >
          Finalizar a compra
        </Button>
        <Nav>
          {cartItems.map((item) => <POCard 
            pokemon={
              {
                'name': item.name as string, 
                sprites:{'front_default': item.url as string}
              }
            }
            inCart={true}
            key={item.name}
          />)}
        </Nav>
      </Main>
    </>
  )
}
