import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

export default function CreateAccount() {

  const [accountData, setAccountData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''

  })

  const handleChange = (e)=> {
    const {name, value} = e.target;
    setAccountData({...accountData, [name]: value})
  }

  const handleSubmit = (e)=> {
    e.preventDefault()

    fetch('http://localhost:3001/users', {method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(accountData)
    })

    
    
  }
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
    <form action="" onSubmit={handleSubmit} >
      <input
        type="text"
        name="firstName"
        id="first"
        placeholder="First Name*"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        id="last"
        placeholder="Last Name*"
        required
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email address*"
        required
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password*"
        minLength={6}
        required
        onChange={handleChange}
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
