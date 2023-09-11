import React, { useEffect,useState} from "react";
import "./Banner.css"
import axios from '../../axios'
import { apikey } from '../../constatnts/constatnts';
import {imageUrl} from '../../constatnts/constatnts';

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${apikey}&language=en-US`).then((response)=>{
      // console.log(response.data.results[0])
      setMovie(response.data.results[11])
    })

  },[])
  return (
    
    <div className="banner" style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
      <div className="content">
        <h1 className="title">{movie? movie.title: ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="discription">
          {movie?movie.overview:""} 
        
        </h1>
        
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
