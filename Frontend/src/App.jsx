import Signup from "./Component/signup.jsx"
import Login from "./Component/login.jsx"
import Home from "./Component/home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'

function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element: <Signup/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/home",
      element:<Home/>
    }
  ])

  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    
    
    </>
  )
}

export default App
