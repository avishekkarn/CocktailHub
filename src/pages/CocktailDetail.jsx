import { useParams } from 'react-router-dom';
import styles from './CocktailDetail.module.scss';
import mockCocktails from '../data/mockCocktails';

const CocktailDetail = () => {
  const { id } = useParams();
  const cocktail = mockCocktails.find(c => c.id === id);

  if (!cocktail) {
    return <p style={{ padding: '2rem', color: 'white' }}>Cocktail not found.</p>;
  }

  return (
    <section className={styles.detail}>
      <img src={cocktail.image} alt={cocktail.name} />
      <div className={styles.content}>
        <h2>{cocktail.name}</h2>
        {cocktail.isPremium && <span className={styles.premium}>Premium</span>}
        <p className={styles.story}>{cocktail.story}</p>

        <h4>Ingredients</h4>
        <ul>
          {cocktail.ingredients.map((ing, idx) => (
            <li key={idx}>
              <span>{ing.name}</span>
              <span>{ing.quantity}</span>
            </li>
          ))}
        </ul>

        <h4>Preparation</h4>
        <ol>
          {cocktail.preparation.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>

        <h4>Estimated Cost</h4>
        <p className={styles.price}>{cocktail.estimatedPrice}</p>

        <div className={styles.actions}>
          <button>❤️ Save</button>
          <button>🔖 Add to Collection</button>
        </div>
      </div>
    </section>
  );
};

export default CocktailDetail;
