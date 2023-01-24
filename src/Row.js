import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    // a snippet of code which runs on a specific condition
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.log(movies);

const opts = {
height:"390",
width:"100%",

PlayerVars:{autoplay:1,}

};

const handleClick= (data)=>{
    if(trailerUrl) setTrailerUrl("")
    else{
        movieTrailer(data?.name || "")
        .then((url)=>{
            const UrlParameter = new  URLSearchParams(new URL(url).search);
            setTrailerUrl(UrlParameter.get('v'));
        })
        .catch((e)=>console.log(e));
    }
}

    return (
        <>
            <div className='row'>
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className="row_posters">
                    {/* serval row posters(s) */}
                    {
                        movies.map((data) => (
                            <>
                                <div className="">
                                    <img onClick={()=>handleClick(data)} key={data.id} className={`row_poster ${isLargeRow && "row__posterLarge"}`} src={`${baseUrl}${isLargeRow ? data.poster_path : data.backdrop_path}`} alt={data.name} />
                                </div>
                            </>
                        ))
                    }
                </div>
                {trailerUrl&&<Youtube videoId={trailerUrl} opts={opts}/>}
            </div>
        </>
    )
}

export default Row