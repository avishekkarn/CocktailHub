import styles from './FreeCocktails.module.scss';
import CocktailCard from '../components/CocktailCard';
import mockCocktails from '../data/mockCocktails';

// Show only free cocktails (non-premium)
const FreeCocktails = () => {
  const freeCocktails = mockCocktails.filter(c => !c.isPremium);

  return (
    <section className={styles.grid}>
      {freeCocktails.map(c => (
        <CocktailCard
          key={c.id}
          id={c.id}
          name={c.name}
          description={c.story}
          image={c.image}
        />
      ))}
    </section>
  );
};

export default FreeCocktails;
