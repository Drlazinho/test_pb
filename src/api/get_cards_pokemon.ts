import { api } from '../lib/axios';

export type FilterPokemonProps = {
  types?: string;
  name?: string;
  pageSize?: number; // Novo parâmetro
  page?: number; // Novo parâmetro
  rarity?: string;
  supertype?: string;
};

export async function getCardsPokemon(filters: FilterPokemonProps) {
  const buildQueryParam = (key: string, value?: string) =>
    value ? `${key}:"${value.trim().replace(/\s+/g, ' ')}"` : '';

  // Separar os filtros que vão para a query 'q' e os demais
  const { pageSize = 4, page = 1, ...queryFilters } = filters;

  const query = Object.entries(queryFilters)
    .map(([key, value]) => buildQueryParam(key, value as string))
    .filter(Boolean)
    .join(' ');

  // Adicionar os parâmetros de paginação
  const response = await api.get('/cards', {
    params: {
      ...(query ? { q: query } : {}),
      ...(pageSize ? { pageSize } : {}),
      ...(page ? { page } : {}),
    },
  });

  return response.data;
}


// import { api } from '../lib/axios'

// export type FilterPokemonProps = {
//   types?: string
//   name?: string
//   pageSize?: number
//   rarity?: string
//   supertype?: string
// }

// export async function getCardsPokemon(filters: FilterPokemonProps) {
//   const buildQueryParam = (key: string, value?: string) =>
//     value ? `${key}:"${value.trim().replace(/\s+/g, ' ')}"` : '';

//   const query = Object.entries(filters)
//     .map(([key, value]) => buildQueryParam(key, value as string))
//     .filter(Boolean) 
//     .join(' '); 

//   const response = await api.get('/cards', {
//     params: query ? { q: query } : {},
//   });

//   return response.data;
// }


// // https://api.pokemontcg.io/v2/cards?q=types:fire
//   // https://api.pokemontcg.io/v2/cards?q=types:fire%20name:Magmar

// //https://api.pokemontcg.io/v2/cards?q=name:caterpie&pageSize=20&page=1