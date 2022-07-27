import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { POHeader } from '@src/components'
import { Main } from './styles'
import { RootStore } from '@src/store';
import { removeItems } from '@src/store/modules/cart';

export function Cart() {
  const cartItems = useSelector((store: RootStore) => store.cartReduce)
  const dispatch = useDispatch()

  return (
    <>
      <POHeader />
      <Main>
        <button
          disabled={!cartItems.length}
          onClick={() => {
            dispatch(removeItems());
          }}
        >
          Comprar
        </button>
        {cartItems.map((item) => <p>{item.name}</p>)}
      </Main>
    </>
  )
}
