function Event3(){
    function handleClick(e){
        e.preventDefault()
        alert("Welcome LJU")
    }
    return(
        <div>
            <form action="" onSubmit={handleClick}>
                <button type="submit" >submit</button>
            </form>
            
        </div>
    )
}export default Event3