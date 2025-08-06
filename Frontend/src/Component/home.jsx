import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Home() {
    const [loggedInUser, setLoggedInUser]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
      setLoggedInUser(localStorage.getItem("loggedInUser"));
    },[]);
    const handlebutton=(e)=>{
       localStorage.removeItem("token");
       localStorage.removeItem("loggedInUser");
       navigate("/login");

    }
    return ( <>c 
    <h1>this is home page</h1>
    <h1>WelCome,{loggedInUser}</h1>
    <button onClick={handlebutton}>LogOut</button>
    </> );
}

export default Home;