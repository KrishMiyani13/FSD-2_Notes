import { useState, useEffect } from "react";
import axios from "axios";

const RandonMimany = () => {
  const [myImg, setMyImg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
          .then((res) => {
              console.log(res.data);
              setMyImg(res.data.message);
        })
        .catch((err) => console.log(err));
    }, 500);

  }, []);

  return (
    <div>
      <img src={myImg} alt="random dog" />
    </div>
  );
};

export default RandonMimany;