import cosmopolitanImg from '../assets/cosmopolitan.jpeg';
import margaritaImg from '../assets/margarita.jpeg';
import mojitoImg from '../assets/mojito.jpeg';
import negroniImg from '../assets/negroni.jpeg';
import whiskeysourImg from '../assets/whiskey-sour.jpeg';
import oldfashionedImg from '../assets/old-fashioned.jpeg';
import martiniImg from '../assets/martini.jpeg';
import daiquiriImg from '../assets/daiquiri.jpeg';
import palomaImg from '../assets/paloma.jpeg';
import aperolspritzImg from '../assets/aperol-spritz.jpeg';

const mockCocktails = [
  {
    id: 'cosmopolitan',
    name: 'Cosmopolitan',
    isPremium: true,
    image: cosmopolitanImg,
    story: 'The Cosmopolitan is a sophisticated cocktail with a tart and refreshing flavor profile.',
    ingredients: [
      { name: 'Vodka', quantity: '1.5 oz' },
      { name: 'Cranberry Juice', quantity: '1 oz' },
      { name: 'Lime Juice', quantity: '0.5 oz' },
      { name: 'Cointreau', quantity: '0.5 oz' },
    ],
    preparation: [
      'Shake all ingredients with ice.',
      'Strain into a chilled glass.',
      'Garnish with lime.',
    ],
    estimatedPrice: '$12 – $15',
  },
  {
    id: 'classic-margarita',
    name: 'Classic Margarita',
    isPremium: false,
    image: margaritaImg,
    story: 'A timeless tequila-based cocktail with lime and orange liqueur.',
    ingredients: [
      { name: 'Tequila', quantity: '2 oz' },
      { name: 'Lime Juice', quantity: '1 oz' },
      { name: 'Triple Sec', quantity: '1 oz' },
    ],
    preparation: [
      'Shake with ice.',
      'Strain into salt-rimmed glass.',
    ],
    estimatedPrice: '$10 – $12',
  },
  {
    id: 'mint-mojito',
    name: 'Mint Mojito',
    isPremium: false,
    image: mojitoImg,
    story: 'A Cuban classic with fresh mint, lime, and rum.',
    ingredients: [
      { name: 'White Rum', quantity: '2 oz' },
      { name: 'Mint Leaves', quantity: '10' },
      { name: 'Lime Juice', quantity: '0.75 oz' },
      { name: 'Soda Water', quantity: 'to top' },
    ],
    preparation: [
      'Muddle mint and lime.',
      'Add rum, ice, and top with soda.',
    ],
    estimatedPrice: '$8 – $10',
  },
  {
    id: 'negroni',
    name: 'Negroni',
    isPremium: true,
    image: negroniImg,
    story: 'A bold Italian cocktail with bitters and gin.',
    ingredients: [
      { name: 'Gin', quantity: '1 oz' },
      { name: 'Campari', quantity: '1 oz' },
      { name: 'Sweet Vermouth', quantity: '1 oz' },
    ],
    preparation: [
      'Stir with ice.',
      'Serve over rocks with orange twist.',
    ],
    estimatedPrice: '$11 – $13',
  },
  {
    id: 'whiskey-sour',
    name: 'Whiskey Sour',
    isPremium: false,
    image: whiskeysourImg,
    story: 'Smooth and tangy cocktail made with whiskey and lemon.',
    ingredients: [
      { name: 'Bourbon', quantity: '2 oz' },
      { name: 'Lemon Juice', quantity: '0.75 oz' },
      { name: 'Simple Syrup', quantity: '0.5 oz' },
    ],
    preparation: [
      'Shake all with ice.',
      'Strain into rocks glass.',
    ],
    estimatedPrice: '$10 – $11',
  },
  {
    id: 'old-fashioned',
    name: 'Old Fashioned',
    isPremium: true,
    image: oldfashionedImg,
    story: 'A true classic made with whiskey, bitters, and sugar.',
    ingredients: [
      { name: 'Rye or Bourbon', quantity: '2 oz' },
      { name: 'Sugar Cube', quantity: '1' },
      { name: 'Angostura Bitters', quantity: '2 dashes' },
    ],
    preparation: [
      'Muddle sugar & bitters.',
      'Add whiskey & ice, stir.',
    ],
    estimatedPrice: '$12 – $14',
  },
  {
    id: 'dry-martini',
    name: 'Dry Martini',
    isPremium: false,
    image: martiniImg,
    story: 'Elegant gin-based cocktail served ice-cold.',
    ingredients: [
      { name: 'Gin', quantity: '2 oz' },
      { name: 'Dry Vermouth', quantity: '0.5 oz' },
    ],
    preparation: [
      'Stir with ice.',
      'Strain and serve with olive.',
    ],
    estimatedPrice: '$11 – $13',
  },
  {
    id: 'daiquiri',
    name: 'Daiquiri',
    isPremium: false,
    image: daiquiriImg,
    story: 'Simple yet refreshing blend of rum, lime, and sugar.',
    ingredients: [
      { name: 'White Rum', quantity: '2 oz' },
      { name: 'Lime Juice', quantity: '1 oz' },
      { name: 'Simple Syrup', quantity: '0.75 oz' },
    ],
    preparation: [
      'Shake with ice.',
      'Strain into coupe glass.',
    ],
    estimatedPrice: '$8 – $10',
  },
  {
    id: 'paloma',
    name: 'Paloma',
    isPremium: true,
    image: palomaImg,
    story: 'A zesty grapefruit tequila cocktail.',
    ingredients: [
      { name: 'Tequila', quantity: '2 oz' },
      { name: 'Grapefruit Soda', quantity: '4 oz' },
      { name: 'Lime Juice', quantity: '0.5 oz' },
    ],
    preparation: [
      'Build over ice.',
      'Stir gently and garnish.',
    ],
    estimatedPrice: '$9 – $11',
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    isPremium: false,
    image: aperolspritzImg,
    story: 'Light and bubbly Italian favorite.',
    ingredients: [
      { name: 'Aperol', quantity: '2 oz' },
      { name: 'Prosecco', quantity: '3 oz' },
      { name: 'Soda Water', quantity: '1 oz' },
    ],
    preparation: [
      'Build in glass with ice.',
      'Stir and garnish with orange slice.',
    ],
    estimatedPrice: '$10 – $12',
  }
];

export default mockCocktails;
