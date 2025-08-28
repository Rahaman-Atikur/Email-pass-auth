import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        console.log('Form Submitted');
        let email = e.target.email.value;
        let password = e.target.password.value;
        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='mx-auto'>
            <form onSubmit={handleRegister}>
                <input name='email' type="text" placeholder="Email" className="input input-xl" />
                <br />
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        name='password'

                    />
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>
                <br />
                <button className='btn btn-primary mt-4'>REGISTER</button>
            </form>
        </div>
    );
};

export default Register;