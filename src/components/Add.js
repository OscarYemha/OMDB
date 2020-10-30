import React, {useState} from 'react'
import {ResultCard} from './ResultCard'

export const Add = () => {
    const [state, setState] = useState("");
    const [Search, setSearch] = useState([])

    const onChange = (e) => {
        e.preventDefault();
        
        setState(e.target.value)

        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1d746e63&s=${e.target.value}`)
        .then(res => res.json())
        .then(data=>{
            if(data.Search){
                setSearch(data.Search)
            }else{
                setSearch([])
            }
        });
    };

    return(
        <div className = "add-page">
            <div className = "container">
                <div className = "add-content">
                    <div className = "input-wrapper">
                        <input type="text"
                        autoFocus 
                        placeholder="Search for a movie" 
                        value={state} 
                        onChange={onChange}
                        />
                    </div>
                    
                        <ul className="search">
                            {Search.map((movie)=>(
                            <li key={movie.imdbID}>
                               <ResultCard movie={movie}/>
                            </li>
                            ))}
                        </ul>    
                </div>
            </div>
        </div>
    )
}