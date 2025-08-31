import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { FaEye } from "react-icons/fa";
const Signup = () => {
  const [errorMessege, setErrorMessege] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMessege("");
    setSuccess(true);
    //Password Validation
    const regExpression = /^\d{6}$/;
    if (regExpression.test(password) === false) {
      setErrorMessege("Please Try Again");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessege(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignup}>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name={}
                    type="password"
                    className="input"
                    placeholder="Password"
                  />

                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-xs absolute top-2 right-6"
                  >
                    <FaEye />
                  </button>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign Up</button>
              </form>
              {errorMessege && <p className="text-red-500">{errorMessege}</p>}
              {success && <p className="text-green-500">Success</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
