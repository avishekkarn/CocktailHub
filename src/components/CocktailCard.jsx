import styles from './CocktailCard.module.scss';
import { Link } from 'react-router-dom';

const CocktailCard = ({ id, name, description, image }) => {
  return (
    <Link to={`/cocktail/${id}`} className={styles.card}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CocktailCard;
