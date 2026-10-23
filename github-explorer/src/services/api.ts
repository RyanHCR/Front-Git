import type { Repository, User } from "../types/github";

const BASE_URL = 'https://api.github.com';

export async function getUser(username: string): Promise<User> {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Usuário não encontrado.');
    }
    if (response.status === 403) {
      throw new Error('Limite de requisições da API excedido. Tente novamente mais tarde.');
    }
    throw new Error('Erro ao buscar informações do usuário.');
  }

  return response.json();
}

export async function getUserRepositories(username: string): Promise<Repository[]> {
  const response = await fetch(`${BASE_URL}/users/${username}/repos?per_page=100`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar os repositórios do usuário.');
  }

  return response.json();
}