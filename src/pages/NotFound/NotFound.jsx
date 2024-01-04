import React from 'react';
import image from '../../assets/NotFound404.png'
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const NotFound = () => {
    return (
        <>
            <Header></Header>
            <div className='container mx-auto px-8'>
                <div className='w-1/2 my-32 mx-auto'>
                    <Link to='/'>
                        <img className='w-full' src={image} alt="" />
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;