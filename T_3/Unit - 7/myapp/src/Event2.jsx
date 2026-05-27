function Event2(){
    function handleClick(){
        alert("Welcome LJU")
    }
    return(
        <div>
            <center>
                <button onDoubleClick={handleClick}>Click Me</button>
            </center>
        </div>
    )
}export default Event2