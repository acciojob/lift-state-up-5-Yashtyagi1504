
import React,{useState} from "react";
import './../styles/App.css';
import Child from "./Child"

const App = () => {

let [isLoggedIn,setIsLoggedIn] = useState(false)

  return (
    <div>
        <h1>Parent Component</h1>
        
        {isLoggedIn?<p>You are logged in!</p>:<Child isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}></Child>}
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
