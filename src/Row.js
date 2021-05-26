import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }){
    const [movies, setMovies] = useState([]);
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
    console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie =>(
                    <img key={movie.id} className={`row__poster ${isLargeRow && "row__postersLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {/* Container /contenedor (posts) */}
        </div>
    );
}

export default Row;
