import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
function Detail() {
  const [char,setChar] =useState(null);
  const {char_id} =useParams();

  useEffect(()=>{
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
    .then((res)=>res.data)
    .then((data)=>setChar(data[0]))
  },[char_id])
  return (
    <div>
      {char && (
        <div>
          <h1>{char.name}</h1>
          <img src={char.img} alt="" style={{width:"40%"}} />
        </div>
      ) }
      {char && <pre>{JSON.stringify(char,null,2)}</pre>}
    </div>
  )
}

export default Detail