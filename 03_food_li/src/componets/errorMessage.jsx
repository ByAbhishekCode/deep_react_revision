function ErrorMessage({bhojan}){
    // let foodItem = ['daal','chawal','roti','sabji','sweetes','water','hotwater']
    // let foodItem = []
    return <>{bhojan.length === 0 ? <h3>I am Hungry</h3> : null}</>;
}

export default ErrorMessage;