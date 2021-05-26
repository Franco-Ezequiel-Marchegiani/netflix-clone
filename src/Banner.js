import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './request';
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                /* Selecciona un filme al azar, dentro del array al cual llamamos */
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);
    /* Genera los "..." cuando la descripción excede X número de caracteres */
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner" style={{
            backgroundSize: "Cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}> {/* Background-image */} 
        <div className="banner__contents">
            {/* Title */}
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            {/* Div > 2 buttons */}
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My list</button>
            </div>
            {/* Description */}
            <h2 className="banner__description">{truncate(movie?.overview, 150)}</h2>
        </div>
        <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
