import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Likes() {
  const dispatch = useDispatch();
  const { likes } = useSelector((state) => state.likes);

  const [like, setLike] = useState(0);

  return (
    <div>
      <h3>
        {/* <span onClick={()=>{setLike(like + 1)}}> ♥ </span> */}
        {/* <span
        onClick={()=>{
          dispatch(__upDateData({
          }));
        }}></span> */}
        {like}
      </h3>
    </div>
  );
}

export default Likes;
