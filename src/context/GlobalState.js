import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched : localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(()=>{
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    },[state])

    const addMovie = (movie) => {
        dispatch({type:"ADD_MOVIE", payload:movie});
    };

    const removeMovie = (imdbID) => {
        dispatch({type:"REMOVE_MOVIE", payload:imdbID})
    }

    const watchedMovie = (movie) => {
        dispatch({type:"WATCHED_MOVIE", payload:movie})
    }

    const toWatchlist = (movie) => {
        dispatch({type:"TO_WATCHLIST", payload:movie})
    }

    const removeWatched = (imdbID) => {
        dispatch({type:"REMOVE_WATCHED", payload: imdbID})
    }

    return (
        <GlobalContext.Provider 
        value={{watchlist: state.watchlist, 
        watched: state.watched, 
        addMovie, 
        removeMovie,
        watchedMovie,
        toWatchlist,
        removeWatched,
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}