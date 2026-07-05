import styles from './StatusBadge.module.css';

const StatusBadge = ({ stock }) => {
  let label = '在庫あり';
  let color = styles.ok;

  if (stock === 0) {
    label = '在庫切れ';
    color = styles.out;
  } else if (stock < 5) {
    label = '残りわずか';
    color = styles.low;
  }

  return <span className={`${styles.badge} ${color}`}>{label}</span>;
};

export default StatusBadge;
