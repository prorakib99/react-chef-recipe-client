import React, { useContext } from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { AuthContext } from '../provider/AuthProvider';

const Main = () => {
    const {loader} = useContext(AuthContext);

    if (loader) {
        return (
            <div className='w-screen text-center'>
                <span className="loading my-11 loading-bars loading-lg"></span>
            </div>
        )
    }
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;