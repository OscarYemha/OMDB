import React from 'react';
import {MovieControls} from './MovieControls'

export const MovieCard = ({movie, type}) => {
    return(
        <div className="movie-card">
            <div className="overlay"></div>
            {movie.Poster ? (
                    <img src={movie.Poster} alt ={movie.Title}/>
                ) : (
                    <div className="filler-poster"></div>
                )}

            <MovieControls type={type} movie={movie}/>
            <div className="info">
                <div>
                    <h2 className="title">{movie.Title}</h2>
                    <h4>{movie.Type}</h4>
                    <h4>{movie.Year}</h4>
                </div>
            </div>
        </div>
    )
}