
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/create-account')

  }

  return (
    <>

      <div className="login">

        <div className="img">
          <img src='Login Image.jpg' alt="" />
        </div>
        <div className="logform">
          <h1>Login</h1>
          <p>Please enter your e-mail and password:</p>
          <form action="" onsubmit="sign()">
            <input
              type="email"
              name=""
              id="e-mail"
              placeholder="Email address*"
              required=""
            />
            <input
              type="password"
              name=""
              id="pass"
              placeholder="Password*"
              minLength={6}
              required=""
            />
            <input type="submit" defaultValue="Login" />
          </form>
          <a href="*">FORGOT PASSWORD?</a>
          <hr />
          <h2>Not signed up yet?</h2>
          <p>- View your order history</p>
          <br />
          <p>- Track your order status and shipping</p>
          <button id="login" onClick={handleClick}>
            Create Account
          </button>
        </div>
      </div>

    </>
  )
}