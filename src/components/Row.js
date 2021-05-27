import React, { useState, useEffect } from 'react';
import axios from '../axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    //UseEffect, el código dentro del mismo se actualiza cada vez que
    useEffect(()=>{
    /* Si(if) [](está vacío) corre una vez solo cuando la columna se actualiza/recarga, de lo contrario no corre nuevamente. 
     If [] it's empty, run once when the row loads, and don't run again*/
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    /* Opciones React-Youtube */
    const opts = {
        height: "590",
        width: "100%",
        playerVars:{
            autoplay: 1,
        }
    }
    /* La api a la cual se llama no contiene casi ningún trailer activo
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        } else{
            movieTrailer(movie?.name || "") 
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log("Trailer no disponible"))
        }
    }; 
    */
    
    const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
          );
          setTrailerUrl(trailerurl.data.results[0]?.key);
        }
      };
       
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) =>(
                    <img key={movie.id} 
                    onClick={() => handleClick(movie)} 
                    className={`row__poster ${isLargeRow && "row__postersLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
            {/* Container /contenedor (posts) */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
        
    );
}

export default Row;
