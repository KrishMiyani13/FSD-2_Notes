//  Create  react  jsx  app  to  increase  value  by  1  while  clicking 
// on  button  “Increment” and decrease value by 1 while 
// clicking on button “Decrement”. Initialize value with 0. Use 
// useReducer hook to perform the task.
import { use, useReducer } from "react";

const initialstate = 5;

function reducer(state,action){
    if (action.type === "increament")
    {return state+5;
        // if (state<=0)
        
        // else{state}
    }
    if(action.type === "decreament"){
        
            if (state>0)
            { return state-1}
            else 
            { console.log("alet")
                    return 0 }
    }
}

function UR (){
    const [state,dispatch] = useReducer(reducer,initialstate)
    
    return(
        <>
        <div>
            <button onClick={()=>dispatch({type:"increament"})}>increament</button>
            <button onClick={()=>dispatch({type:"decreament"})}>decreament</button>
            <h3>{state}</h3>
        </div>
        </>
    )
}export default UR