import { api } from '../lib/axios'

export async function getCardsPokemon(filters : { type: string, name: string }) {
  const { type, name } = filters;

  let query = '';
  if (type) query += `types:${type}`;
  if (name) query += (query ? ' ' : '') + `name:${name}`;

  const response = await api.get('/cards', {
    params: query ? { q: query } : {},
  });

  return response.data;
}

// https://api.pokemontcg.io/v2/cards?q=types:fire
  // https://api.pokemontcg.io/v2/cards?q=types:fire%20name:Magmar