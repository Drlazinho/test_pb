import { api } from '../lib/axios';

export type FilterPokemonProps = {
  types?: string;
  name?: string;
  pageSize?: number; 
  page?: number; 
  rarity?: string;
  supertype?: string;
};

export async function getCardsPokemon(filters: FilterPokemonProps) {
  const buildQueryParam = (key: string, value?: string) =>
    value ? `${key}:"${value.trim().replace(/\s+/g, ' ')}"` : '';

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
