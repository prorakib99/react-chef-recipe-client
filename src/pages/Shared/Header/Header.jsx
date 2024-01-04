import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navStatus, setNavStatus] = useState(false);

    console.log(navStatus);
    return (
        <div className='container mx-auto px-8'>
            <div className="navbar bg-base-100 relative shadow-2xl flex justify-between rounded-2xl mt-8">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Food Collection</a>
                </div>


                <div className="flex-none gap-4">
                    <label className="btn lg:hidden btn-circle swap swap-rotate mr-2">
                        <input onClick={() => setNavStatus(!navStatus)} type="checkbox" />
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>
                    <div className={`absolute lg:flex duration-500 right-0 lg:static ${navStatus ? 'top-16 shadow-2xl rounded-xl pb-3 pt-6 text-center' : 'top-[-300px]'}`}>
                        <ul onClick={() => setNavStatus(false)} className="menu menu-vertical lg:menu-horizontal rounded-box">
                            <li><Link to='/' className='text-lg font-bold py-1 mx-3'>Home</Link></li>
                            <li><Link to='/' className='text-lg font-bold py-1 mx-3'>Blog</Link></li>
                            <li><Link to='/login' className='text-lg font-bold py-1 mx-3'>Login</Link></li>
                        </ul>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul onClick={() => setNavStatus(false)} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between text-lg">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link className='text-lg'>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;