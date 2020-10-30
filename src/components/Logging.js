import React, {useState} from 'react';
//import axios from 'axios'

export const Logging = () =>{
    const [state,setState] = useState("");

    const onChange = (e) => {
        e.preventDefault();
        //console.log(e.target.value)
        setState(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        //log("login attempt...");
        //try {
          // POST user credentials
          //const { data } = await axios.post("/api/login", {
          //  email: email.value,
           // password: password.value,
        //  });
          // Set new state
          //setUser(data);
          //success(`logged user ${data.email}`);
          // Redirect to secret route!
    //      history.push("/secret");
      //  } catch ({ response }) {
          // something's not right...
        //  error(response.status, response.statusText);
        //}
      };

    return(
        <div className="movie-page">
            <div className="container">
                <div className = "add-content">
                    <div className = "input-wrapper">
                        <form onSubmit={handleSubmit}>
                            <label>Username:</label>
                            <input 
                            type="text" 
                            placeholder="Username"
                            required
                            onChange = {onChange}
                            />
                            <label>Password:</label>
                            <input 
                            type="text" 
                            placeholder="Password"
                            required
                            onChange={onChange}
                            />
                            <button type="submit"className="btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}