import styles from "./Items.module.css";
const Item = ({ foodItem, handleByClicked }) => {
  return (
    <li className={`list-group-item ${styles["kg-item"]}  `}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleByClicked}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
