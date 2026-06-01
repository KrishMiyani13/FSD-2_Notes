import { use, useReducer } from "react";

const initialstate = 0;

function reducer(state,action){
    if (action.type === "increament")
    {return state+1}
}
function UR (){
    const [state,dispatch] = useReducer(reducer,initialstate)
    return(
        <>
        <div>
            <button onClick={()=>dispatch({type:"increament"})}>Click Me</button>
            <h3>{state}</h3>
        </div>
        </>
    )
}export default UR