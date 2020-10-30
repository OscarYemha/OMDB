import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const ResultCard = ({movie}) => {
    const {addMovie, watchlist} = useContext(GlobalContext);
    let storedMovie = watchlist.find(o => o.imdbID === movie.imdbID);
    const watchlistDisable = storedMovie ? true : false;

    return(
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.Poster ? (
                    <img src={movie.Poster} alt ={movie.Title}/>
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.Title}</h3>
                    <h4 className="year">
                        {movie.Year ? movie.Year : '-'}
                    </h4>
                    <h4>{movie.Type}</h4>
                </div>
            </div>

            <div className="controls">
                <button className="btn"
                disabled = {watchlistDisable}
                onClick={()=> addMovie(movie)}>Add to Watchlist</button>
            </div>

        </div>
    )

}