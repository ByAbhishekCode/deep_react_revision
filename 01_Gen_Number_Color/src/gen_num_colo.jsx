function GenNUmCol(){
    let number = Math.floor(Math.random() * 100)
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6,"0")
    return <h1 style={{background: color}}>This is Number : {number}</h1>
}

export default GenNUmCol;