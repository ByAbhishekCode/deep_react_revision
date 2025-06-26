import ListItem from "./listItem";

const FoodItem = ({bhojan}) => {
//   let foodItem = [
//     "daal",
//     "chawal",
//     "roti",
//     "sabji",
//     "sweetes",
//     "water",
//     "hotwater",
//   ];
  return (
    <>
      <ul>  
        {bhojan.map((item) => (
          <ListItem key={item }khana = {item}></ListItem>
        ))}
      </ul>
    </>
  );
};

export default FoodItem;
