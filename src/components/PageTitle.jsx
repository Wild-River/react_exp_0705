import styles from './PageTitle.module.css';

const PageTitle = ({ title, count }) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.count}>{count} 件</span>
    </div>
  );
};

export default PageTitle;
