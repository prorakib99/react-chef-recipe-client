import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselItem from './components/CarouselItem';


const Home = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://react-chef-recipe-server.vercel.app/chef')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setLoading(false)
            })
            .catch(error => console.log(error))
            
    }, [])

    if(loading){
        return (
            <div className='w-screen text-center'>
                <span className="loading my-11 loading-bars loading-lg"></span>
            </div>
        )
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: null,
        prevArrow: null
      };

    return (
        <div>
            <div className='container mx-auto px-8'>
                <Slider {...settings} className="mx-auto w-full mt-8">
                    {
                        chefs.map(chef => <CarouselItem key={chef.id} chef={chef} />)
                    }
                </Slider>
            </div>
        </div>
    );
};


export default Home;