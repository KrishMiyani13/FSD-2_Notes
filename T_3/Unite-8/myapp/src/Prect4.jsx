import React,{useState} from "react";
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
function Prect4(){
    const [MyIamge,setImage]=useState(img1)
        function changeImage(){
            const images = [img1,img2,img3]
            const random = Math.floor(Math.random() * images.length)
            setImage(images[random])
            console.log(random)
        }
        return(
            <div>
                <img src={MyIamge} height={250} width={300} alt="" />
                <button onClick={changeImage}>Change Image</button>
            </div>
        )
} export default Prect4