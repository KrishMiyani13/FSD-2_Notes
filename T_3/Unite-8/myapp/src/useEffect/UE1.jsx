import { useState , useEffect, use } from "react";

function UE1(){
    const [cout , setcount] = useState(0)
    const [calculation , setcal ] = useState(0)
    // useEffect (()=>{alert("clicked")},[cout])
    // useEffect(()=>{alert("clicked")},[])
    useEffect(()=>{alert("clicked")})
    const changeCount = ()=> {setcount(cout+1)}
    const changeCalc = ()=> {setcal(calculation+1)}
    return(
        <div>
            <button onClick={changeCount}>Button A {cout}</button>
            <button onClick={changeCalc}>Button B {calculation}</button>
        </div>
    )
}export default UE1