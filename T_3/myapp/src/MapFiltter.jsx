import './App.css'

function MapFiltter(){
    let arr = [1,2,3,4,5,6,7,8,9,10]
    return(
        <>
        <div>
            <h3>Table</h3>
            {
                arr.filter( (value => {return value!=3 }) ).map((value)=>{
                    return <h2>
                        5 * {value} = {value*5}
                    </h2>
                })
            }
        </div>
        </>
    )
}
export default MapFiltter