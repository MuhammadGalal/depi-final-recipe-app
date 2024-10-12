import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; 

export default function LoginPage() {
  const { setUser } = useUser(); 
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((users) => {
        const user = users.find(
          (user) => user.email === data.email && user.password === data.password
        );

        if (user) {
          setUser(user); 
          navigate(`/profile/${user.id}`);
        } else {
          setError('Invalid email or password. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setError('An error while logging in. Please try again.');
      });
  };

  const handleClick = () => {
    navigate('/create-account');
  };

  return (
    <div className="login">
      <div className="img">
        <img src='Login Image.jpg' alt="Login" />
      </div>
      <div className="logform">
        <h1>Login</h1>
        <p>Please enter your e-mail and password:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="e-mail"
            placeholder="Email address*"
            required
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="Password*"
            minLength={6}
            required
            value={data.password}
            onChange={handleChange}
          />
          <input type="submit" value="Login" />
        </form>
        {error && <p className="error">{error}</p>}
        <a href="*">FORGOT PASSWORD?</a>
        <hr />
        <h2>Not signed up yet?</h2>
        <p>- View your order history</p>
        <p>- Track your order status and shipping</p>
        <button id="login" onClick={handleClick}>
          Create Account
        </button>
      </div>
    </div>
  );
}
