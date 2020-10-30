import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

export const MovieControls = ({movie, type}) => {
    const {removeMovie, watchedMovie, toWatchlist, removeWatched} = useContext(GlobalContext)
    return(
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" onClick={()=> watchedMovie(movie)}>
                        <i>Watched</i>
                    </button>

                    <button className="ctrl-btn" onClick={()=> removeMovie(movie.imdbID)}>
                        <i>Remove</i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" onClick={()=> toWatchlist(movie)}>
                        <i>To watchlist</i>
                    </button>

                    <button className="ctrl-btn" onClick={()=> removeWatched(movie.imdbID)}>
                        <i>Remove</i>
                    </button>
                </>
            )}

        </div>
    )
}