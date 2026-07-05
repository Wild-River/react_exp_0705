import { Package, Pencil, Hand } from 'lucide-react';
import styles from './ProductCard.module.css';

const ProductCard = ({ name, price, stock }) => {
  return (
    <div className={`${styles.card}  ${stock === 0 ? styles.soldOut : ''}`}>
      <div className={styles.img}>{stock === 0 ? 'SOLD OUT' : ''}</div>
      <div className={styles.textContainer}>
        <h2 className={styles.name}>
          <Package size={18} /> {name}
        </h2>
        <span className={styles.price}>
          <span>
            <Hand />¥
          </span>
          {price.toLocaleString('ja-JP')}
        </span>
        <span className={styles.stock}>（在庫 {stock}）</span>
        <button className={styles.button} disabled={stock === 0}>
          <Pencil size={14} /> 編集
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
