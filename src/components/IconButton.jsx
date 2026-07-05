import styles from './IconButton.module.css';

const IconButton = ({ icon }) => {
  return <button className={styles.iconBtn}>{icon}</button>;
};

export default IconButton;
