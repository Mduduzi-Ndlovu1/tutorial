function FunctionEvent(){
    function handleClick(){
            console.log('Button is clicked'); 
    }
    return(
        <div>
            functional Component
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default FunctionEvent;