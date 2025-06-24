function Time(){
    // let fullDate = new Date()
    let fullDate = new Date()
    // let fullTime = new Time()
    return <p>This is the current time: {fullDate.toLocaleDateString()} - {fullDate.toLocaleTimeString()}</p>;
}

export default Time;