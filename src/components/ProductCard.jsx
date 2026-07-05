import { Package } from 'lucide-react';
import CategoryTag from './CategoryTag';
import PriceTag from './PriceTag';
import StatusBadge from './StatusBadge';
import Button from './Button';
import styles from './ProductCard.module.css';

const ProductCard = ({ name, price, stock, category }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>
        <Package size={18} /> {name}
      </h3>
      <CategoryTag label={category} />
      <PriceTag price={price} />
      <StatusBadge stock={stock} />
      <div className={styles.actions}>
        <Button label="編集" variant="primary" />
        <Button label="削除" variant="danger" />
      </div>
    </div>
  );
};

export default ProductCard;
