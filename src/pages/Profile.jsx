import React from "react";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Profile.module.scss";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <p className={styles.container}>Please log in to view your profile.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <h2>Welcome,</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p>
          <strong>Status:</strong>{" "}
          {user.isPremium ? (
            <span className={styles.premium}>Premium Member ⭐</span>
          ) : (
            <span className={styles.free}>Free User</span>
          )}
        </p>
        <button className={styles.manageBtn} onClick={() => navigate("/pricing")}>
          {user.isPremium ? "Manage Subscription" : "Upgrade to Premium"}
        </button>
        <button className={styles.manageBtn} onClick={logout} style={{ marginLeft: "1rem" }}>
          Logout
        </button>
      </div>

      <div className={styles.section}>
        <h2>Favorite Cocktails</h2>
        {user.favorites?.length > 0 ? (
          <div className={styles.grid}>
            {user.favorites.map((cocktail) => (
              <div key={cocktail._id} className={styles.card}>
                <img src={cocktail.image_url} alt={cocktail.name} />
                <div>
                  <h3>{cocktail.name}</h3>
                  <p>{cocktail.description?.slice(0, 60)}...</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>You haven’t added any favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
