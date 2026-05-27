import React,{useState} from "react";
function Use1(){
    const [count,setCount]=useState(0)
        function handleCount(){
            if (count != 10){
            setCount(count + 1)
            }
            else{
                alert("You have clicked more then 10 times !!")
            }
        }
        return(
            <div>
                <p>You Clicked {count} times</p>
                <button onClick={handleCount}>Click Me</button>
            </div>
        )
} export default Use1