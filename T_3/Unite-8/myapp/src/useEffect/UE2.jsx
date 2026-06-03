import { useState,useEffect } from "react";

function UE2(){
    const [date,setDate] = useState(new Date())

    useEffect(()=>{
        const timer = setInterval(()=>{setDate(new Date())},1000)
    },[])
return(
    <div>
        Time using Localtime {date.toLocaleDateString()}
        <br />
        <br />
        Hours {date.getHours()}: Min - {date.getMinutes()} : sec - {date.getSeconds()}
    </div>
)
}export default UE2