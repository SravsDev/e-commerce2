import React,{useState} from 'react'
import "./CSS/Signin.css";
import {useNavigate} from "react-router-dom"


const Signin = () => {
  const navigate=useNavigate();
  
  const [password ,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [error,setError]=useState({
  
    email:"",
    password:""
  })

   const emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  function handlevalidation()
  {
    if (email.trim() === "") {
      setError((error) => ({ ...error, email: "Invalid Email" }))
    }
    else if (!emailpattern.test(email)) {
      setError((error) => ({ ...error, email: "Invalid Email" }))
    }
    else {
      setError((error) => ({ ...error, email: "" }))
    }


    // let pwd=password.trim()

    if (password.trim() === "") {
      setError((error) => ({ ...error, password: "Invalid Password" }))
    }
    else if (password.trim().length < 8) {
      setError((error) => ({ ...error, password: " Invalid Password" }))
    }
    else {
      setError((error) => ({ ...error, password: "" }))
    }
   
    
    
  }
  function handleclick(){
    navigate("/Signup");
  }


  return (
    <div className="signin">
        <div  className="signin-container">
            <h1>Sign In</h1>
            <div className="signin-fields">
                <input  type="text" placeholder="Enter Email" value={email} onChange={((e)=>{setEmail(e.target.value)})}/>
                {
                  error.email && <span className="text-danger">{error.email}</span>
                }

                <input  type="text" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                {
                  error.password && <span className="text-danger">{error.password}</span>
                }



            </div>
            <div className="signin-checkbox">
              <input type="checkbox"/>
              <span> Remember me</span>
            </div>
            <button onClick={handlevalidation}>Continue</button>
            <div className="signin-notes">
              <p>Forgot Password?</p>
              <p>Don't have an account ? <span onClick={handleclick}>Signup here</span></p>
            </div>

        </div>

    </div>
  )
}

export default Signin