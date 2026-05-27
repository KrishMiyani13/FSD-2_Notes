function Event4(){
    function handleClick(e){
        console.log(e.target.value)
        console.log(e.target.value.length)
    }
    return(
        <div>
            Enter Your Name: <input type="text" name="fName" onChange={handleClick} />
        </div>
    )
}export default Event4