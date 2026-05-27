import React,{useState} from "react";
function Prect5 ( )
{
    const [headingText,setText] = useState("LJ Univrsity")
    const [headingColor,setColor] = useState("Red")
    const [showText,setShowText] = useState(true)
    function changeText (){
        if (headingText === "LJ University"){
            setText("Wlcome student")
        }
        else {
            setText("LJ University")
        }
    }
    function changeColor (){
        if(headingColor === "Red"){
            setColor("Blue")
        }
        else{
            setColor("Blue")
        }
    }
    function toggleShowText(){
        if (showText){
            setShowText(false)
        }
        else{
            setShowText(true)
        }
    }
    return(
        <div>
            <h1 style={{color:headingColor}}>{headingText}</h1>
            <h2>{showText && "React Js Hooks"}</h2>
            <button onClick={ changeText}>changeText</button>
            <button onDoubleClick={changeColor}>changeColor</button>
            <button onClick={toggleShowText}>Show</button>
        </div>
    )
} export default Prect5