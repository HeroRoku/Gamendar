import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import './LoginForm.css'

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    console.log(user)
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  // const demoSubmit = async (e) => {
  //   e.preventDefault()
  //   const email = 'demo@gamendar.com'
  //   const password = 'password'
  //   const user = await login(email, password);
  //   console.log(user)
  //   if (!user.errors) {
  //     setAuthenticated(true);
  //   } else {
  //     setErrors(user.errors)
  //   }
  // }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className='loginContainer'>
      <form onSubmit={onLogin}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        {/* <label htmlFor="email">Email</label> */}
        <h1>Login</h1>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
        {/* <label htmlFor="password">Password</label> */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <input
          type="submit"
          value="Login"
        />
      </form>
      {/* <form onSumbit={demoSubmit}>
        <input
          type='submit'
          value='Demo Account'
        />
      </form> */}
    </div>
  );
};

export default LoginForm;
