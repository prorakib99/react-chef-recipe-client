import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    const [error, setError] = useState('');
    const [googleButton, setGoogleButton] = useState(false);
    const [githubButton, setGithubButton] = useState(false);

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    console.log(googleButton);
    return (
        <div className="container mx-auto px-8">
            <div className="min-h-[85vh] flex flex-col items-center justify-center">
                <div className="bg-white p-8 mb-4 rounded-2xl shadow-2xl w-96">
                    <h2 className="text-2xl font-semibold mb-6">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                                Username
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none font-bold focus:shadow-outline-blue"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-4 text-sm">
                        <p>
                            Don't have an account?{' '}
                            <Link to='/register' className="text-blue-500 font-bold hover:underline">Sign up here</Link>
                        </p>
                    </div>
                </div>
                <div className="divider">OR</div>

                <div className='w-96 mt-2'>
                    <Link>
                        <button onMouseLeave={() => setGoogleButton(false)} onMouseEnter={() => setGoogleButton(true)} className="py-2 w-full mb-4 relative bg-white hover:shadow-2xl rounded-[57px] border border-stone-300">
                            <FcGoogle className={`absolute duration-700 text-3xl top-1 ${googleButton ? 'left-[345px]' : 'left-2'}`} /> <span className='text-black font-medium text-base text-center'>Continue with Google</span>
                        </button>
                    </Link>
                    <Link>
                        <button onMouseLeave={() => setGithubButton(false)} onMouseEnter={() => setGithubButton(true)} className="py-2 w-full relative bg-white hover:shadow-2xl rounded-[57px] border border-stone-300"><FaGithub className={`absolute duration-700 text-3xl top-1 ${githubButton ? 'left-[345px]' : 'left-2'}`} /> <span className='text-black font-medium text-base text-center'>Continue with Github</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;