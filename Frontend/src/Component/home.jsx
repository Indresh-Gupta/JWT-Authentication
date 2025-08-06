import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Home() {
    const [loggedInUser, setLoggedInUser]=useState("");
    const [products, setProduct]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
      setLoggedInUser(localStorage.getItem("loggedInUser"));
    },[]);
    const handlebutton=(e)=>{
       localStorage.removeItem("token");
       localStorage.removeItem("loggedInUser");
       navigate("/login");

    }

  const fetchProducts=async()=>{
    try{
      const URL="http://localhost:8080/product"
      const headers={
        headers:{
          "authorization":localStorage.getItem("token")
        }
      }
      const response=await fetch(URL,headers);
      const result=await response.json();
      console.log(result);
      setProduct(result);

    }catch(err){
      console.log("this is while fetching the data", err);
    }
  }
  
  useEffect(()=>{
    fetchProducts();
  },[])

    return ( <>c 
    <h1>this is home page</h1>
    <h1>WelCome,{loggedInUser}</h1>
    <button onClick={handlebutton}>LogOut</button>
    <br></br>
    <br></br>
    {
     products && products?.map((data, index)=>(
      <span key={index}>{data.name} && {data.price}</span>
      ))
    }
    </> );
}

export default Home;