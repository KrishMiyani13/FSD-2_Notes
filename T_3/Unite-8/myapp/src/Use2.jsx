import React,{useState} from "react";
function Use2(){
    const [count,setCount]=useState(0)
        function inCriment(){
            if (count != 10){
            setCount(count + 1)
            }
            else{
                alert("You have clicked more then 10 times !!")
            }
        }
        function deCriment(){
            if (count > 0){
                setCount(count - 1)
            }
            else{
                alert("Count not enof to Decriment")
            }
        }
        return(
            <div>
                <p>You Clicked {count} times</p>
                <button onClick={inCriment}>Click Me To Incriment</button>
                <button onClick={deCriment}>Click Me To Decriment</button>
            </div>
        )
} export default Use2