import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiAlignCenter, TfiClose } from "react-icons/tfi";
import { AuthContext } from '../../../provider/AuthProvider';
import userImage from '../../../assets/user.jpg';
import toast from 'react-hot-toast';

const Header = () => {
    const [navStatus, setNavStatus] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    console.log(user);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Sign Out Successful')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className='container mx-auto px-8'>
            <div className="navbar bg-base-100 relative shadow-2xl flex justify-between rounded-2xl my-8">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl">Food Collection</Link>
                </div>

                <div className="flex-none gap-4">
                    <Link onClick={() => setNavStatus(!navStatus)} className="btn lg:hidden btn-circle swap swap-rotate mr-2">

                        {
                            navStatus ? <TfiClose className='text-2xl' /> : <TfiAlignCenter className='text-2xl' />
                        }

                    </Link>
                    <div className={`absolute lg:flex duration-500 z-10 right-0 lg:static ${navStatus ? 'top-20 shadow-2xl rounded-xl pb-3 pt-6 bg-white text-center' : 'top-[-300px]'}`}>
                        <ul onClick={() => setNavStatus(false)} className="menu menu-vertical lg:menu-horizontal z-10 rounded-box">
                            <li><Link to='/' className='text-lg font-bold py-1 mx-3'>Home</Link></li>
                            <li><Link to='/' className='text-lg font-bold py-1 mx-3'>Blog</Link></li>
                            {
                                !user && <li><Link to='/login' className='text-lg font-bold py-1 mx-3'>Login</Link></li>
                            }
                        </ul>
                        {
                            user && <div className="dropdown z-10 dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt={user.displayName} src={user.photoURL || userImage} title={user.displayName} />
                                    </div>
                                </div>
                                <ul onClick={() => setNavStatus(false)} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to='/profile' className="justify-between text-lg">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link onClick={handleSignOut} className='text-lg'>Logout</Link></li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;