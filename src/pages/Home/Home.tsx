import { useCallback, useEffect, useRef, useState } from 'react';

import { POCard, POHeader } from '@src/components'
import { getPokemon } from "@src/services/PokeApi/getPokemon";
import { Main } from './styles'
import { IPokemon } from './types';

export function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [pokemonPosition, setPokemonPosition] = useState<number>(20);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const observer = useRef<any>();

  async function getPokemons() {
    setIsLoading(true);
    for (const [idx] of Array(pokemonPosition).entries()) {
      // THE INITIAL POSITION WILL BE DIFERENT OF 0 AFTER FIRST RUN
      // BECAUSE THE POKEMONS IS ALREADY LOADED. THE INITIAL POSITION ALWAYS GROWS AFTER THE NEW RUN
      let initialPosition = pokemonPosition === 20 ? 0 : pokemonPosition - 10;
      if (idx >= initialPosition) {
        await getPokemon({id: idx+1}).then(({ data }) => {
          setPokemons(prevState => [...prevState, data])
        });
      }
    }
    setIsLoading(false);
  }

  const lastCardRef = useCallback(
    (node: any) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPokemonPosition((prevState) => (prevState + 10));
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  useEffect(() => {
    getPokemons();
  }, [pokemonPosition])

  return (
    <>
      <POHeader />
      <Main>
        {pokemons?.map((item, index) => {
          if (pokemons.length === index + 1) {
            return (
              <POCard ref={lastCardRef} pokemon={item} key={item.name}/>
            );
          } else {
            return <POCard pokemon={item} key={item.name}/>;
          }
        })}
      </Main>
    </>
  )
}
