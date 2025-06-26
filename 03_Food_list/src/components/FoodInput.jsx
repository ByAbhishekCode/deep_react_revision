import styles from "./FoodInput.module.css";
const FoodIntput = ({ handlekeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item Here"
      className={styles.foodIntput}
      onKeyDown={handlekeyDown}
    ></input>
  );
};

export default FoodIntput;
