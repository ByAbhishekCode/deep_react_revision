import Item from "./Item";
const FoodItems = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} handleByClicked={()=> console.log(`${item} Buy`)}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
