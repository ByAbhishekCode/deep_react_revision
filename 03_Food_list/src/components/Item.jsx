import styles from "./Items.module.css";
const Item = ({purchase, foodItem,bought ,handleByClicked }) => {
  return (
    <li className={`list-group-item ${styles["kg-item"]} ${bought && "active" }`}>
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
