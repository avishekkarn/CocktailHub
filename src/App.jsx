import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // <- Don't forget this!
import Home from './pages/Home';
import FreeCocktails from './pages/FreeCocktails';
import PremiumCocktails from './pages/PremiumCocktails';
import CocktailDetail from './pages/CocktailDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Pricing from './pages/Pricing';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free-cocktails" element={<FreeCocktails />} />
        <Route path="/premium-cocktails" element={<PremiumCocktails />} />
        <Route path="/cocktail/:id" element={<CocktailDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </Router>
  );
};

export default App;