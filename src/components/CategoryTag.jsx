import styles from './CategoryTag.module.css';

const CategoryTag = ({ label }) => {
  return <span className={styles.tag}>{label}</span>;
};

export default CategoryTag;
