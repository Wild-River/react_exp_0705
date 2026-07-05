import styles from './Button.module.css';

const Button = ({ label, variant = 'primary', icon }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {icon}
      {label}
    </button>
  );
};

export default Button;
