import { api } from '../lib/axios'

export async function getSupertypes() {
  const response = await api.get('/supertypes');

  return response.data;
}