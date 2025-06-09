import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useAuth } from "../context/AuthContext"; // ✅ make sure this context exists

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth(); // 🟢 Access user login state

  return (
    <>
      {/* Top Navbar (Desktop) */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>CocktailHub</div>
        <ul className={styles.navLinks}>
          <li><Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link></li>
          <li><Link to="/free-cocktails" className={location.pathname === '/free-cocktails' ? styles.active : ''}>Free</Link></li>
          <li><Link to="/premium-cocktails" className={location.pathname === '/premium-cocktails' ? styles.active : ''}>Premium</Link></li>
          <li><Link to="/pricing" className={location.pathname === '/pricing' ? styles.active : ''}>Pricing</Link></li>
          <li><Link to="/profile" className={location.pathname === '/profile' ? styles.active : ''}>Profile</Link></li>
          {user ? (
            <li>
              <button onClick={logout} className={styles.logoutBtn}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login" className={location.pathname === '/login' ? styles.active : ''}>Login</Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Bottom Nav (Mobile) */}
      <div className={styles.mobileNav}>
        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link>
        <Link to="/free-cocktails" className={location.pathname === '/free-cocktails' ? styles.active : ''}>Free</Link>
        <Link to="/premium-cocktails" className={location.pathname === '/premium-cocktails' ? styles.active : ''}>Premium</Link>
        <Link to="/profile" className={location.pathname === '/profile' ? styles.active : ''}>Me</Link>
      </div>
    </>
  );
};

export default Navbar;
