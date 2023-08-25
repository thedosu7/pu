import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra và xử lý logic đăng nhập ở đây
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
input.email === loggeduser.email && input.password === loggeduser.password) 
    {
    navigate('/home'); // Điều hướng đến trang Home sau khi đăng nhập thành công   
}
    else{
      alert("Wrong Email or Password");
    }
   
  };
  return (
    <>
      (
      <div className="auth-form-container">
        <h1>UTNOTE LOG IN</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => 'register'}>
          Don't have an account? Register here.
        </button>
      </div>
      )
    </>
  );
};

export default Login;
