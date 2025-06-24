import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let foodItem = ['daal','chawal','roti','sabji','sweetes','water','hotwater']
  // let foodItem = []
  
  return (
    <>
      <h1>Healthy Food</h1>
      {foodItem.length === 0 ? <h3>I am Hungry</h3> : null }
      <ul>
      {foodItem.map((item)=><li key={item} className="list-group—item">{item}</li>)}
        
      </ul>
    </>
  );
}

export default App;
