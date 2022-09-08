import { useState } from "react";
import { useEffect } from "react";
import AnimesList from "./AnimesList";
import useFetch from "./useFetch"

const WishList = () => {
  const[wish,setWish]=useState(null)
    const {data: animes,pending,error,} = useFetch("https://api.jikan.moe/v4/anime");

  useEffect(()=>{
    let wish= localStorage.getItem("wish");
    wish=JSON.parse(wish);
    setWish(wish)
    // let x= animes.filter((anime)=>{return wish.includes(anime.mal_id)})
  },[])
    return ( 
        <div>
           { error && <h1>error</h1>} 
           {pending && <h1>loading..........</h1>} 
           {animes && <AnimesList animes={animes.filter((anime)=>{return wish.includes(anime.mal_id)})}/>} 
        </div>
     );
}
 
export default WishList;