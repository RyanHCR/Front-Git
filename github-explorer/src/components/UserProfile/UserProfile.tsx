
import type { User } from '../../types/github';
import styles from './UserProfile.module.scss';

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className={styles.profileCard}>
      <img src={user.avatar_url} alt={user.login} className={styles.avatar} />
      
      <div className={styles.info}>
        <h2>{user.name || user.login}</h2>
        <span className={styles.username}>@{user.login}</span>
        
        {user.bio && <p className={styles.bio}>{user.bio}</p>}

        {user.location && (
          <span className={styles.location}>📍 {user.location}</span>
        )}

        <div className={styles.stats}>
          <div>
            <strong>{user.followers}</strong> Seguidores
          </div>
          <div>
            <strong>{user.following}</strong> Seguindo
          </div>
          <div>
            <strong>{user.public_repos}</strong> Repositórios
          </div>
        </div>

        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.profileButton}
        >
          Ver Perfil no GitHub
        </a>
      </div>
    </div>
  );
}