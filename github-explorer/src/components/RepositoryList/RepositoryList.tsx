import { useState, useMemo } from 'react';
import styles from './RepositoryList.module.scss';
import type { Repository } from '../../types/github';


interface RepositoryListProps {
  repositories: Repository[];
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredRepositories = useMemo(() => {
    return repositories.filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [repositories, searchTerm]);

  const totalPages = Math.ceil(filteredRepositories.length / itemsPerPage);
  const paginatedRepositories = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredRepositories.slice(start, start + itemsPerPage);
  }, [filteredRepositories, currentPage]);

  if (repositories.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h3>Repositórios Públicos ({filteredRepositories.length})</h3>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Filtrar repositório pelo nome..."
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); 
          }}
        />
      </div>

      <div className={styles.repoList}>
        {paginatedRepositories.length === 0 ? (
          <p className={styles.empty}>Nenhum repositório encontrado.</p>
        ) : (
          paginatedRepositories.map(repo => (
            <div key={repo.id} className={styles.repoCard}>
              <div className={styles.repoHeader}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </div>
              {repo.description && <p className={styles.description}>{repo.description}</p>}
              <div className={styles.repoFooter}>
                {repo.language && <span className={styles.language}>{repo.language}</span>}
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          >
            Anterior
          </button>
          <span>Página {currentPage} de {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}