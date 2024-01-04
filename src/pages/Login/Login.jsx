import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }
    return (
        <div className="container mx-auto px-8">
            <div className="h-[85vh] flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
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
            </div>
        </div>
    );
};

export default Login;