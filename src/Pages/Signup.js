import React, {useState} from 'react';
import "./CSS/Signup.css";
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const [name, setName]=useState("");
  const [password ,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [error,setError]=useState({
    name:" ",
    email:" ",
    password:" "
  })
  const navigate=useNavigate();




  const emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



  function handlevalidation(){

    if((name.length>=3) && (email!=="") && (password.length>8)){
      navigate("/Signin")
    }
    else{

      if(name.trim()===""){
        setError((error)=>({...error, name: "Enter the name"}))
      }
      else if(name.trim().length<3){
        setError((error)=>({...error, name:"Name length should be 3 characters"}))
      }
      else{
        setError((error) => ({ ...error, name: "" }))
      }

      
      if (email.trim() === "") {
        setError((error) => ({ ...error, email: "Enter email address" }))
      }
      else if (!emailpattern.test(email)) {
        setError((error) => ({ ...error, email: "Enter valid email address" }))
      }
      else {
        setError((error) => ({ ...error, email: "" }))
      }


   

      if (password.trim() === "") {
        setError((error) => ({ ...error, password: "Enter password" }))
      }
      else if (password.trim().length < 8) {
        setError((error) => ({ ...error, password: "Password length should be 8 characters" }))
      }
       
      else {
        setError((error) => ({ ...error, password: "" }))
      }
    }
    
  }

 
  // const change=useNavigate();
  function handleclick(){
    navigate("/Signin");
  }
 

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />
          {
            error.name && <span className="text-danger">{error.name}</span>
          }

         <input  type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         {
            error.email && <span className="text-danger">{error.email}</span>
          }


         <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         {
            error.password && <span className="text-danger">{error.password}</span>
          }

        </div>
        <button onClick={handlevalidation}>Continue</button>
        <p className="signup-login">Already have an account <span  onClick={handleclick}>Signin here</span></p>
        <div className="signup-agree">
          <input  type="checkbox" name="" id=""  />
          <p>By continuing i agree to the terms of use & privacy policy </p>

        </div>

      </div>

    </div>
  )
}

export default Signup