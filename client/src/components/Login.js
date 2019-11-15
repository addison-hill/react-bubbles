import React, { useState } from "react";
import { axiosWithAuth } from './axiosWithAuth';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    credentials: { username: "", password: "" }
  });

  const handleChange = e => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", user.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubble-page");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
          <input className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={user.credentials.username}
            onChange={handleChange}
          />
          <input className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={user.credentials.password}
            onChange={handleChange}
          />
          <button className="btn" type="submit">Log In</button>
        </form>
    </>
  );
};

export default Login;
