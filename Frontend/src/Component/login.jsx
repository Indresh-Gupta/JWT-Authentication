import react from "react"
import { useNavigate } from 'react-router-dom';
import {useState} from "react"




function Login() {
      const [loginData, setLoginData]=useState({
        email:"",
        password:""
    })
    const navigator=useNavigate()
    const inputHandler=(e)=>{
       const {name, value} =e.target;
        setLoginData({...loginData, [name]:value})
       
    }

    const submitHandler=async(e)=>{
        e.preventDefault();
        const {email, password}=loginData;
        if(!email || !password){
            return console.log("user not enter correct data");
        }
        try{
           const url="http://localhost:8080/user/login"
          const response=await fetch(url, {
            method:"Post",
           headers:{
            'content-type':"application/json",
           },
           body:JSON.stringify(loginData),
          });
          const result=await response.json();
          const {success, message, jwtToken,name, error}=result;
          if(success){
            console.log(message);
            localStorage.setItem("token",jwtToken);
            localStorage.setItem("loggedInUser",name);
            navigator("/home");
          } else if(error){
            console.log(error);
          }
          console.log(result);
        }catch(err){
          return  console.log("this is server side error", err);
        }
    }

    return ( <>
    <h1>this is login page </h1>
    <form onSubmit={submitHandler}>
           <label htmlFor="email">Email</label>  
          <input type="text" placeholder="Enter your email" id="email" name="email" onChange={inputHandler} />
          <br></br><br></br>
           <label htmlFor="name">Password</label>  
          <input type="password" placeholder="Enter your password" id="password" name="password" onChange={inputHandler}/>
          <br></br>
          <button>Submit</button>

        </form>
    </> );
}

export default Login;