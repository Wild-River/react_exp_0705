import styles from './StatCard.module.css';

const StatCard = ({ label, value, icon }) => {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <div>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
