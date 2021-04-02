import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import './SignUpForm.css'

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className='signupContainer'>
      <form onSubmit={onSignUp}>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={updateUsername}
          value={username}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={updateEmail}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={updatePassword}
          value={password}
        />
        <input
          type="password"
          name="repeat_password"
          placeholder="Confirm Password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        />
        <input
          type="submit"
          name="Sign Up"
        />
      </form>
    </div >
  );
};

export default SignUpForm;
