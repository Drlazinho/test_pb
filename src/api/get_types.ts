import { api } from '../lib/axios'

export async function getTypes() {
  const response = await api.get('/types');

  return response.data;
}