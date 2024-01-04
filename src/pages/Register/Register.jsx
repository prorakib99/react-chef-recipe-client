import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);
    }
    return (
        <div className="container mx-auto px-8">
            <div className="h-[85vh] flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
                    <h2 className="text-2xl font-semibold mb-6">Register</h2>

                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Full name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="photo"
                                name="photo"
                                className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Photo URL..."
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
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
                            Register
                        </button>
                    </form>
                    <div className="mt-4 text-sm">
                        <p>
                            Already have an account?{' '}
                            <Link to='/login' className="text-blue-500 font-bold hover:underline">Login here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;