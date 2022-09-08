import { useEffect, useState } from "react";


const useFetch = (request) => {
 const[data,setData]=useState(null); 
 const[pending,setPending]=useState(true);
 const[error,setError]=useState(null);
 
 useEffect(()=>{
    setTimeout(()=>{
    fetch(request)
    .then((responce)=>{
        if(responce.ok===false)
        {
            throw error("data not found")
        }
        return responce.json() })
    .then((recievedData)=>{setData(recievedData.data); setPending(false)})
    .catch((error)=>{setError(error.message); setPending(false)})
    },1000)
 },[])

 return {data,pending,error}
}
 
export default useFetch;