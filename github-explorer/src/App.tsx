import { useState, useEffect } from 'react';
import { getUser, getUserRepositories } from './services/api';
import type { Repository, User } from './types/github';
import { SearchBar } from './components/SearchBar/SearchBar';
import { UserProfile } from './components/UserProfile/UserProfile';
import { RepositoryList } from './components/RepositoryList/RepositoryList';


export function App() {
  const [user, setUser] = useState<User | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('@GitHubExplorer:lastUser');
    if (savedUser) {
      handleSearch(savedUser);
    }
  }, []);

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const userData = await getUser(username);
      const reposData = await getUserRepositories(username);

      setUser(userData);
      setRepositories(reposData);

      localStorage.setItem('@GitHubExplorer:lastUser', username);
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro ao buscar os dados.');
      setUser(null);
      setRepositories([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#f0f6fc', fontSize: '32px', marginBottom: '8px' }}>GitHub Explorer</h1>
        <p style={{ color: '#8b949e' }}>Pesquise usuários e explore repositórios públicos</p>
      </header>

      <SearchBar onSearch={handleSearch} isLoading={isLoading} />

      {error && (
        <div style={{ color: '#f85149', textAlign: 'center', marginTop: '20px' }}>
          <p>{error}</p>
        </div>
      )}

      {user && <UserProfile user={user} />}

      <RepositoryList repositories={repositories} />
    </div>
  );
}