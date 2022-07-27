import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { POHeader } from '@src/components'
import { Main } from './styles'
import { RootStore } from '@src/store';

export function Cart() {
  const cartItems = useSelector((store: RootStore) => store.cartReduce)

  return (
    <>
      <POHeader />
      <Main>
        {cartItems.map((item) => <p>{item.name}</p>)}
      </Main>
    </>
  )
}
