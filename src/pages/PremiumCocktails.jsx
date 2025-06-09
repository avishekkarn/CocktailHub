import React from 'react';
import { Link } from 'react-router-dom';
import mockCocktails from '../data/mockCocktails';
import styles from '../styles/Premium.module.scss';

const PremiumCocktails = () => {
  // 🔐 Simulate user status
  const isPremiumUser = false;

  const premiumDrinks = mockCocktails.filter(c => c.isPremium);

  return (
    <div className={styles.container}>
      <h2>Premium Cocktails</h2>
      <div className={styles.grid}>
        {premiumDrinks.map(cocktail => (
          <div
            key={cocktail.id}
            className={`${styles.card} ${!isPremiumUser ? styles.locked : ''}`}
          >
            <img src={cocktail.image} alt={cocktail.name} />
            <div className={styles.info}>
              <h3>{cocktail.name}</h3>
              <p>{cocktail.story.slice(0, 50)}...</p>
              {isPremiumUser ? (
                <Link to={`/cocktail/${cocktail.id}`} className={styles.btn}>View</Link>
              ) : (
                <Link to="/pricing" className={styles.upgrade}>🔒 Upgrade to View</Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumCocktails;
