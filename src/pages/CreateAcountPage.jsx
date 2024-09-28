
import React from "react";
import {  useNavigate } from 'react-router-dom';





export default function CreateAccount() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login')
  }

    return (
        <>
        <div className="login">
  <div className="img">
    <img src='createAcoount img.jpg' alt="" />
  </div>
  <div className="logform">
    <h1>Create account</h1>
    <p>Please enter your details to create an account.</p>
    <form action="" >
      <input
        type="text"
        name=""
        id="first"
        placeholder="First Name*"
        required=""
      />
      <input
        type="text"
        name=""
        id="last"
        placeholder="Last Name*"
        required=""
      />
      <input
        type="email"
        name=""
        id="email"
        placeholder="Email address*"
        required=""
      />
      <input
        type="password"
        name=""
        id="password"
        placeholder="Password*"
        minLength={6}
        required=""
      />
      <input type="submit" defaultValue="Create Account" />
    </form>
    <hr />
    <h2>Already have an account?</h2>
    <p>To access your account or reset your account password, login here...</p>
    <button onClick={handleClick} id="sign">
      Login
    </button>
  </div>
</div>

        </>
    )
}