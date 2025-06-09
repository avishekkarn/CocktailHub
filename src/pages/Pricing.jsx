import React from 'react';
import styles from '../styles/Pricing.module.scss';

import infinityIcon from '../assets/icon-infinity.png';
import bookmarkIcon from '../assets/icon-bookmark.png';
import noadsIcon from '../assets/icon-noads.png';

const Pricing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Premium</h1>
      <h2 className={styles.subtitle}>Unlock the full experience</h2>
      <p className={styles.description}>
        Get access to all recipes, save your favorites, and enjoy an ad-free experience.
      </p>

      <div className={styles.features}>
        <div className={styles.feature}>
          <img src={infinityIcon} alt="Unlimited recipes" />
          <div>
            <h4>Unlimited recipes</h4>
            <p>Access all recipes, including premium ones</p>
          </div>
        </div>

        <div className={styles.feature}>
          <img src={bookmarkIcon} alt="Save favorites" />
          <div>
            <h4>Save favorites</h4>
            <p>Save your favorite recipes for quick access</p>
          </div>
        </div>

        <div className={styles.feature}>
          <img src={noadsIcon} alt="Ad-free" />
          <div>
            <h4>Ad-free</h4>
            <p>Enjoy an ad-free browsing experience</p>
          </div>
        </div>
      </div>

      <h3 className={styles.choosePlan}>Choose your plan</h3>

      <div className={styles.plans}>
        <div className={styles.plan}>
          <p className={styles.planLabel}>Monthly</p>
          <h2>$4.99 <span>/month</span></h2>
          <button>Choose plan</button>
        </div>

        <div className={styles.plan}>
          <p className={styles.planLabel}>Yearly <span className={styles.saveTag}>Save 15%</span></p>
          <h2>$49.99 <span>/year</span></h2>
          <button>Choose plan</button>
        </div>
      </div>

      <div className={styles.paymentSection}>
        <p className={styles.paymentTitle}>Payment method</p>
        <div className={styles.card}>
          <img
            src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
            alt="Mastercard"
          />
          <span>Card ending in 4242</span>
          <span className={styles.arrow}>&gt;</span>
        </div>
      </div>

      <button className={styles.subscribeBtn}>Subscribe</button>

      <div className={styles.faq}>
        <h4>FAQ</h4>
        <details>
          <summary>What is included in the premium membership?</summary>
          <p>All premium cocktails, saved favorites, and ad-free browsing experience.</p>
        </details>
        <details>
          <summary>How do I cancel my subscription?</summary>
          <p>You can cancel any time from your profile settings.</p>
        </details>
        <details>
          <summary>Can I try premium for free?</summary>
          <p>We occasionally offer a free trial. Stay tuned for updates.</p>
        </details>
      </div>
    </div>
  );
};

export default Pricing;
