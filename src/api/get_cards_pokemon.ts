import { api } from '../lib/axios'

export async function getCardsPokemon() {
   const response = await api.get(
      '/cards',
    )
    return response.data
  }