import styles from './PriceTag.module.css';

const PriceTag = ({ price }) => {
  return <span className={styles.price}>¥{price.toLocaleString()}</span>;
};

export default PriceTag;
