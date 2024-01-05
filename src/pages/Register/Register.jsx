import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const [googleButton, setGoogleButton] = useState(false);
    const [githubButton, setGithubButton] = useState(false);

    const { user, createUser, updateProfileInfo, handleGoogleLogin, handleGithubLogin } = useContext(AuthContext);

    if(user){
        return <Navigate to='/' replace={true}></Navigate>
    }

    const handleRegister = event => {
        event.preventDefault();

        const loader = toast.loading('Creating User');
        () => loader;

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                toast.dismiss(loader);
                toast.success('User Create Successful');

                updateProfileInfo(createdUser, name, photo)
                .then()
                .catch(error => console.error(error));

                <Navigate to='/' replace={true}></Navigate>
            })
            .catch(error => {
                console.error(error)
                toast.dismiss(loader);
                toast.error(error.message)
            })
    }

    return (
        <div className="container mx-auto px-8">
            <div className="min-h-[85vh] py-10 flex flex-col items-center justify-center">
                <div className="bg-white p-8 mb-4 rounded-2xl shadow-2xl lg:w-96">
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

                <div className="divider">OR</div>

                <div className='lg:w-96 mt-2'>
                    <Link onClick={handleGoogleLogin}>
                        <button onMouseLeave={() => setGoogleButton(false)} onMouseEnter={() => setGoogleButton(true)} className="py-2 w-full mb-4 relative bg-white hover:shadow-2xl rounded-[57px] border border-stone-300">
                            <FcGoogle className={`absolute duration-700 text-3xl top-1 ${googleButton ? 'left-[345px]' : 'left-2'}`} /> <span className='text-black font-medium text-base text-center'>Continue with Google</span>
                        </button>
                    </Link>
                    <Link onClick={handleGithubLogin}>
                        <button onMouseLeave={() => setGithubButton(false)} onMouseEnter={() => setGithubButton(true)} className="py-2 w-full relative bg-white hover:shadow-2xl rounded-[57px] border border-stone-300"><FaGithub className={`absolute duration-700 text-3xl top-1 ${githubButton ? 'left-[345px]' : 'left-2'}`} /> <span className='text-black font-medium text-base text-center'>Continue with Github</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;