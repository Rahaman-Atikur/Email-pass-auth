import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase";
const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const emailRef = useRef();
  const handleForgotPass = () => {
    console.log(emailRef.current.value);
    const email = email.current.value;
  }

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setErrorMessage('');
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          console.log('Please Verified User Email Address');
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"></h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" ref={emailRef} className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a onClick={handleForgotPass} className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              {
                errorMessage && <p className="text-red">{errorMessage}</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
