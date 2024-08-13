import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';


const Register = () => {
    const [isSignIn, setIsSignIn] = useState(false);

    const toggle = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className={`container flex min-h-screen relative ${isSignIn ? 'sign-in' : 'sign-up'}`}>
            <div className="row flex flex-wrap w-full h-full">
                <div className="col w-full md:w-1/2 flex items-center justify-center text-center">
                    <div className={`form-wrapper max-w-lg w-full p-4 rounded-2xl shadow-lg transition duration-500 ${isSignIn ? '' : 'hidden'}`}>
                        <SignInForm toggle={toggle} />
                    </div>
                </div>
                <div className="col w-full md:w-1/2 flex items-center justify-center text-center">
                    <div className={`form-wrapper max-w-lg w-full p-4  rounded-2xl shadow-lg transition duration-500 ${isSignIn ? 'hidden' : ''}`}>
                        <SignUpForm toggle={toggle} />
                    </div>
                </div>
            </div>
            <div className="row content-row absolute top-0 left-0 pointer-events-none z-10 w-full h-full flex">
                <div className="col w-full md:w-1/2 flex items-center justify-center text-center">
                    <div className="text sign-in text-white">
                        <h2 className="text-5xl font-extrabold mb-4">Welcome</h2>
                        <p className="font-semibold transition duration-1000 delay-200">Please sign in to continue</p>
                    </div>
                </div>
                <div className="col w-full md:w-1/2 flex items-center justify-center text-center">
                    <div className="text sign-up text-white">
                        <h2 className="text-5xl font-extrabold mb-4">Join with us</h2>
                        <p className="font-semibold transition duration-1000 delay-200">Sign up to start your journey</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register