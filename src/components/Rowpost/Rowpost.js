import { useEffect, useState } from "react";
import React from "react";
import "./Rowpost.css";
import YouTube from 'react-youtube';
import axios from '../../axios';
import { apikey } from "../../constatnts/constatnts";
import { imageUrl } from '../../constatnts/constatnts';



function Rowpost(props) {
 
  const[movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState("")
  
  useEffect(()=>{
    axios.get(props.urls).then((response)=>{
      console.log(response.data.results[0])
      setMovies(response.data.results)
    })

  },[])
  const opts={
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }};

    const handleMOvie=(id)=>{
      console.log(id)
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}`).then(response=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }
        else( console.log('no trailer'))

      })


    }
  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="posters">
      {movies.map((obj) => (
  <img onClick={()=>handleMOvie(obj.id)}
       

    className={props.isSmall? 'smallposter':'poster'}
    src={`${imageUrl+obj.backdrop_path}`}
    alt=""
  />
))}

      </div>
      { urlId ? <YouTube videoId={urlId.key} opts={opts} />:""}
    </div>
  );
}

export default Rowpost;
