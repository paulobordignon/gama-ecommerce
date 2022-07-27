import { IPokemon } from '@src/pages/Home/types'

export interface ICard {
    pokemon: IPokemon;
    inCart?: boolean;
}