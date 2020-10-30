export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE":
            return{
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            }
        case "REMOVE_MOVIE":
            return{
                ...state,
                watchlist: state.watchlist.filter(movie => movie.imdbID !== action.payload)
            }
        case "WATCHED_MOVIE":
            return{
                ...state,
                watchlist: state.watchlist.filter(movie => movie.imdbID !== action.payload.imdbID),
                watched : [action.payload, ...state.watched]
            }
        case "TO_WATCHLIST":
            return{
                ...state,
                watched: state.watched.filter(movie => movie.imdbID !== action.payload.imdbID),
                watchlist: [action.payload, ...state.watchlist]
            }
        case "REMOVE_WATCHED":
            return{
                ...state,
                watched: state.watched.filter(movie=>movie.imdbID!==action.payload)
            }
        default:
            return state;
    }
}