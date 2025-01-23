import { api } from '../lib/axios'

export async function getRarities() {
  const response = await api.get('/rarities');

  return response.data;
}