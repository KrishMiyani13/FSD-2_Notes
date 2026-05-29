import React,{use, useState} from "react";

function Prect6(){
    const [data,setData] = useState({})

    function handleChange (e){
        const {name,value} = e.target
        setData({...data,[name]:value})
    }
    return(
        <>
        <div>
            <input type="text" name="firstName" onChange={handleChange} />
        </div>
        <div>
            <input type="text" name="lastName" onChange={handleChange} />
        </div>
        <h1>First Name : {data.firstName} <br /> <br /> Lsat Name : {data.lastName}</h1>
        </>
    )
}export default Prect6