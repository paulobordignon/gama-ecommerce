import { useEffect, useState } from 'react';
import { POCard, POHeader } from '@src/components'
import { Main } from './styles'
import { IPokemon } from './types';
import { pokeApi } from "@src/services/api";

function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  let pokemonPosition = 30;

  async function getPokemons() {
    for (const [idx] of Array(pokemonPosition).entries()) {
      await pokeApi.get(`/pokemon/${idx+1}`).then(({ data }) => {
        setPokemons(prevState => [...prevState, data])
      });
    }
  }

  useEffect(() => {
    getPokemons();
  }, [pokemonPosition])

  return (
    <>
      <POHeader />
      <Main>
        {
          pokemons.map(item => <POCard pokemon={item} key={item.name}/>)
        }
      </Main>
    </>
  )
}

export default Home
