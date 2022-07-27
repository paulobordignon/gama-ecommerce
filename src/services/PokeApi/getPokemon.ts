import { baseApi } from "./config/api";

interface IPokemonPayload {
    id: number
}

export function getPokemon(payload: IPokemonPayload) {
    return baseApi.get(`/pokemon/${payload.id}`);
}
