function Event1(){
    function handleClick(){
        alert("Welcome LJU")
    }
    return(
        <div>
            <center>
                <button onClick={handleClick}>Click Me</button>
            </center>
        </div>
    )
}export default Event1