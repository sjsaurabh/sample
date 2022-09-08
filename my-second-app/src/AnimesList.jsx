import { useEffect, useState } from "react";

const AnimesList = ({animes}) => {

   const [wish,setWish]=useState([])
   useEffect(()=>{
    if(localStorage.getItem("wish")==null)// if wish array  is not present before
    {
        localStorage.setItem("wish","[]" )// then only you add wish array
    }
    
    

   },[])
   let handleWishlist=(id)=>{
    let x=localStorage.getItem("wish")
     
    x=JSON.parse(x)
    if(!x.includes(id)){
        x.push(id);
        x=JSON.stringify(x)
        localStorage.setItem("wish",x)
        console.log(x ,typeof x);

    }else
    {
        // alert("item alredy added")
        let index=x.indexOf(id);
        x.splice(index,1)
        x=JSON.stringify(x)
        localStorage.setItem("wish",x)
        console.log(x);
    }
    
   }







    return (  
        <div className="animes-list">
        {
            animes.map((anime)=>{
               return(
                <div key={anime.mal_id}>
                   <img src={anime.images.jpg.small_image_url} alt="poster not found" />  

                   <h2>animes:{anime.title}</h2>
                   <h2>rating:{anime.rating}</h2>
                   <button onClick={()=> handleWishlist(anime.mal_id)} >&#128155;</button>
                </div>
               )
            }) 
        }
        </div>
    );
}
 
export default AnimesList;