import React from "react";

function Child({isLoggedIn,setIsLoggedIn}) {

    function handleSubmit(){
        setIsLoggedIn(true);
    }


  return (
    <div className="child">
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input type="text" required></input>
        </label>
        <br/><br/>
        <label>
          Password: <input type="text" required></input>
        </label>
        <br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Child;
