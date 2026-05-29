import React,{useState} from "react";
import img1 from './assets/hero.png'
import img2 from './assets/react.svg'
function Prect3(){
    const [MyIamge,setImage]=useState(img1)
        function changeImage(){
            if (MyIamge == img1){
            setImage(img2)
            }
            else{
                setImage(img1)
            }
        }
        return(
            <div>
                <img src={MyIamge} height={100} width={100} alt="" />
                <button onClick={changeImage}>Change Image</button>
            </div>
        )
} export default Prect3